import type { VercelRequest, VercelResponse } from '@vercel/node'
import crypto from 'node:crypto'

const DATASET_ID = process.env.META_DATASET_ID || '2142803196313062'
const ACCESS_TOKEN =
  process.env.META_CAPI_ACCESS_TOKEN ||
  'EAAX440J46MkBS009z9N4G1ZB3QsQka9j201eSxkcQm9lZCXzA7XPtGQ8E9kjpPlepjwahcXyVIWVjonK3CohPrYfCTrS6Odx8rdtsihOEU1e2QUCiWgMN6Bqn8M9pRMrqCPPBmHaKOW6qj5hA94dPBZBhpbkaG8IGhu9qOrCbl8ZCmlVI4iBMjJNEDS9eAZDZD'

/**
 * SHA-256 hash helper complying with Meta's lowercase hex specification
 */
function sha256(value: string): string {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

/**
 * Normalize phone numbers to international format (e.g. 919876543210)
 */
function normalizePhone(rawPhone: string): string {
  const digits = rawPhone.replace(/\D/g, '')
  // If 10 digits (standard Indian mobile starting with 6-9), prepend country code 91
  if (digits.length === 10 && /^[6-9]/.test(digits)) {
    return '91' + digits
  }
  return digits
}

/**
 * Extract Meta cookie (_fbp or _fbc) from cookie header
 */
function getCookie(cookieHeader: string | undefined, name: string): string | undefined {
  if (!cookieHeader) return undefined
  const match = cookieHeader.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : undefined
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers for preflight and standard requests
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
    const {
      fullName = '',
      phone = '',
      email = '',
      projectInterest = 'Sunshine Green Meadows',
      leadType = 'general_enquiry',
      source = 'website',
      pageUrl = 'https://sunshineinfra.in',
      eventId,
    } = body

    // 1. Prepare user data object with SHA-256 hashed values
    const userData: Record<string, unknown> = {}

    if (phone) {
      const normalizedPhone = normalizePhone(phone)
      if (normalizedPhone) {
        userData.ph = [sha256(normalizedPhone)]
      }
    }

    if (email) {
      userData.em = [sha256(email)]
    }

    if (fullName) {
      const firstName = fullName.trim().split(/\s+/)[0]
      if (firstName) {
        userData.fn = [sha256(firstName)]
      }
    }

    // Capture IP address and User Agent for match rate improvement
    const forwarded = req.headers['x-forwarded-for']
    const clientIp = typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req.socket.remoteAddress
    if (clientIp) {
      userData.client_ip_address = clientIp
    }

    const userAgent = req.headers['user-agent']
    if (userAgent) {
      userData.client_user_agent = userAgent
    }

    // Extract _fbp and _fbc cookies if available
    const cookieHeader = req.headers.cookie
    const fbp = getCookie(cookieHeader, '_fbp')
    const fbc = getCookie(cookieHeader, '_fbc')
    if (fbp) userData.fbp = fbp
    if (fbc) userData.fbc = fbc

    // 2. Construct Meta Conversions API Payload
    const currentUnixTime = Math.floor(Date.now() / 1000)
    const metaPayload = {
      data: [
        {
          event_name: 'Lead',
          event_time: currentUnixTime,
          action_source: 'website',
          event_source_url: pageUrl,
          event_id: eventId || undefined,
          user_data: userData,
          custom_data: {
            content_name: projectInterest,
            lead_type: leadType,
            currency: 'INR',
            value: 1,
            source: source,
          },
        },
      ],
    }

    // 3. Post to Meta Graph API
    const metaEndpoint = `https://graph.facebook.com/v21.0/${DATASET_ID}/events?access_token=${ACCESS_TOKEN}`
    const metaResponse = await fetch(metaEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(metaPayload),
    })

    const metaResult = await metaResponse.json()

    if (!metaResponse.ok) {
      console.error('[Meta CAPI Error]:', metaResult)
      return res.status(metaResponse.status).json({
        success: false,
        error: metaResult,
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Lead conversion event recorded via Meta Conversions API',
      meta: metaResult,
    })
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err)
    console.error('[Meta CAPI Handler Exception]:', errorMessage)
    return res.status(500).json({
      success: false,
      error: errorMessage,
    })
  }
}

