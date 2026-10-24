import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '@/utils/analytics'

/**
 * Route-change Analytics Listener
 * Dispatches a virtual page view whenever the URL path changes.
 * Prevents duplicate hits on same-path renders.
 */
export function useAnalytics(): void {
  const location = useLocation()
  const prevPathRef = useRef<string | null>(null)

  useEffect(() => {
    const currentPath = location.pathname + location.search

    if (prevPathRef.current !== currentPath) {
      prevPathRef.current = currentPath
      trackPageView(currentPath)
    }
  }, [location])
}
