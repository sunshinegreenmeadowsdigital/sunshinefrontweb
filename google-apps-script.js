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

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
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
