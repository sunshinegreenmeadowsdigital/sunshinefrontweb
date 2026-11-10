/**
 * ==============================================================================
 * SUNSHINE INFRA — GOOGLE SHEETS LEAD CAPTURE WEBHOOK SCRIPT
 * ==============================================================================
 * 
 * Instructions:
 * 1. Open Google Sheets (https://sheets.new)
 * 2. Name your spreadsheet: "Sunshine Infra Leads"
 * 3. Go to the menu: Extensions > Apps Script
 * 4. Erase everything in Code.gs and paste this ENTIRE code block
 * 5. Click Save (Ctrl+S / Cmd+S)
 * 6. Click Deploy > New deployment
 * 7. Click the gear icon next to "Select type" and choose "Web app"
 * 8. Set Configuration:
 *    - Description: "Sunshine Infra Lead Webhook"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone"  <-- CRITICAL! Must be "Anyone" so the website can post
 * 9. Click "Deploy"
 * 10. Grant permissions if prompted (Advanced > Go to Sunshine Infra (unsafe) > Allow)
 * 11. Copy the "Web app URL" (starts with https://script.google.com/macros/s/.../exec)
 * 12. Paste this URL into your website's .env file as:
 *     VITE_LEAD_SUBMISSION_ENDPOINT=https://script.google.com/macros/s/.../exec
 * ==============================================================================
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Leads");

    // Automatically create and format the "Leads" sheet if it does not exist
    if (!sheet) {
      sheet = ss.insertSheet("Leads");
      
      var headers = [
        "Date & Time (IST)",
        "Lead Type",
        "Full Name",
        "Phone Number",
        "Email Address",
        "Project Interest",
        "Message / Details",
        "Configuration / Date Slot",
        "Source Domain"
      ];
      
      sheet.appendRow(headers);

      // Apply Sunshine Infra Warm Orange branding to the header row
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#E06B2D");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setHorizontalAlignment("center");
      headerRange.setVerticalAlignment("middle");
      sheet.setRowHeight(1, 38);
      sheet.setFrozenRows(1);

      // Auto-fit column widths
      for (var col = 1; col <= headers.length; col++) {
        sheet.setColumnWidth(col, 180);
      }
    }

    // Parse the incoming JSON payload
    var rawContents = e.postData.contents;
    var data = JSON.parse(rawContents);

    // Current Indian Standard Time (IST)
    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");

    var leadType = data.leadType || "general_enquiry";
    var fullName = data.fullName || "";
    // Prefix phone with single quote so Google Sheets treats it as text and keeps leading zeros/formatting
    var phone = "'" + (data.phone || "");
    var email = data.email || "";
    var projectInterest = data.projectInterest || "Sunshine Green Meadows";
    var message = data.message || "";

    // Parse specific extra details depending on leadType
    var extraDetails = "";
    if (leadType === "site_visit") {
      extraDetails = "Visit Date: " + (data.preferredDate || "") + 
                     " | Slot: " + (data.preferredTimeSlot || "") + 
                     " | Visitors: " + (data.visitorCount || "1");
    } else if (leadType === "brochure_request") {
      extraDetails = "Channel: " + (data.preferredChannel || "download");
    } else if (leadType === "general_enquiry") {
      extraDetails = "Config: " + (data.preferredConfiguration || "undecided");
    }

    var sourceDomain = data.sourceDomain || "";

    // Append the row to Google Sheets
    sheet.appendRow([
      timestamp,
      leadType,
      fullName,
      phone,
      email,
      projectInterest,
      message,
      extraDetails,
      sourceDomain
    ]);

    // Format new row alignment
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 9).setVerticalAlignment("middle");

    // Optional: Send server-to-server lead event to Meta Conversions API (CAPI)
    sendMetaConversionsApi(fullName, data.phone || "", email, projectInterest, leadType, data.pageUrl || "");

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Meta Conversions API (CAPI) Server-to-Server Lead Dispatcher
function sendMetaConversionsApi(fullName, phone, email, projectInterest, leadType, pageUrl) {
  try {
    var datasetId = "2142803196313062";
    var accessToken = "EAAX440J46MkBS009z9N4G1ZB3QsQka9j201eSxkcQm9lZCXzA7XPtGQ8E9kjpPlepjwahcXyVIWVjonK3CohPrYfCTrS6Odx8rdtsihOEU1e2QUCiWgMN6Bqn8M9pRMrqCPPBmHaKOW6qj5hA94dPBZBhpbkaG8IGhu9qOrCbl8ZCmlVI4iBMjJNEDS9eAZDZD";

    function hashSha256(str) {
      if (!str) return null;
      var rawHash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, str.trim().toLowerCase(), Utilities.Charset.UTF_8);
      var hex = "";
      for (var i = 0; i < rawHash.length; i++) {
        var byteVal = rawHash[i];
        if (byteVal < 0) byteVal += 256;
        var byteHex = byteVal.toString(16);
        if (byteHex.length === 1) byteHex = "0" + byteHex;
        hex += byteHex;
      }
      return hex;
    }

    var cleanPhone = phone ? phone.replace(/\D/g, "") : "";
    if (cleanPhone.length === 10) cleanPhone = "91" + cleanPhone;

    var userData = {};
    if (cleanPhone) userData.ph = [hashSha256(cleanPhone)];
    if (email) userData.em = [hashSha256(email)];
    if (fullName) {
      var firstName = fullName.trim().split(/\s+/)[0];
      if (firstName) userData.fn = [hashSha256(firstName)];
    }

    var payload = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(new Date().getTime() / 1000),
          action_source: "website",
          event_source_url: pageUrl || "https://sunshineinfra.in",
          user_data: userData,
          custom_data: {
            content_name: projectInterest || "Sunshine Green Meadows",
            lead_type: leadType || "general_enquiry",
            currency: "INR",
            value: 1
          }
        }
      ]
    };

    var url = "https://graph.facebook.com/v21.0/" + datasetId + "/events?access_token=" + accessToken;
    UrlFetchApp.fetch(url, {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });
  } catch (err) {
    Logger.log("Meta CAPI Error: " + err.toString());
  }
}

// Health check GET handler
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      message: "Sunshine Infra Lead Capture Webhook is running and ready to receive POST requests."
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
