/**
 * Google Apps Script Web App to receive quiz submissions and write to a Google Sheet.
 *
 * Deployment:
 * 1. In Google Drive, create a new Apps Script project.
 * 2. Create a Google Sheet and copy its ID from the URL.
 * 3. Paste this code into Code.gs, set the SHEET_ID and SHEET_NAME.
 * 4. Deploy > New deployment > Type: Web app. Execute as: Me. Who has access: Anyone with the link.
 * 5. Copy the Web app URL and paste it into the HTML as APPS_SCRIPT_URL.
 */

const SHEET_ID = 'REPLACE_WITH_SHEET_ID';
const SHEET_NAME = 'Submissions';

function doPost(e) {
  try {
    const body = e.postData && e.postData.contents ? e.postData.contents : '{}';
    const data = JSON.parse(body);

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // Ensure header row exists and is up to date
    const headers = [
      'timestamp', 'quiz_id', 'student_name', 'date', 'period',
      'q1a', 'q1b', 'q2a', 'q2b', 'q2c', 'q3a', 'q3b', 'q4a', 'q4b', 'q5',
      'server_received_at'
    ];

    const existing = sheet.getRange(1, 1, 1, sheet.getLastColumn() || headers.length).getValues()[0];
    if (!existing || existing.length === 0 || existing[0] === '') {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    } else {
      // Expand headers if needed
      const existingSet = new Set(existing);
      const missing = headers.filter(h => !existingSet.has(h));
      if (missing.length > 0) {
        sheet.getRange(1, existing.length + 1, 1, missing.length).setValues([missing]);
      }
    }

    // Build row in the order of headers
    const now = new Date().toISOString();
    const headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = headerRow.map(h => h === 'server_received_at' ? now : (data[h] ?? ''));

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true, message: 'Submission received.' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
