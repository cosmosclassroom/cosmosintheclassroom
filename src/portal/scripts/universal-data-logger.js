
/**
 * Universal Data Logger - Google Apps Script Integration
 * -----------------------------------------------------
 * Endpoint: https://script.google.com/macros/s/AKfycbz0yyH_uzZBft2Vz6WaYOYD_LPHILsqKRjerWATmJ4Ofarm6WZBwjD57Q5TpWYExqLJ/exec
 * Deployment ID: AKfycbz0yyH_uzZBft2Vz6WaYOYD_LPHILsqKRjerWATmJ4Ofarm6WZBwjD57Q5TpWYExqLJ
 * Deployment Date: August 22, 2025 (Version 2)
 * Access: Anyone (public logging)
 *
 * Usage:
 *   - All log events are sent via POST (JSON) to the endpoint above.
 *   - If POST fails, a GET fallback is attempted.
 *   - Apps Script must handle CORS and parse JSON correctly.
 *
 * Apps Script Example:
 *   function doPost(e) {
 *     var data = JSON.parse(e.postData.contents);
 *     // ... handle data ...
 *     return ContentService.createTextOutput("OK")
 *       .setMimeType(ContentService.MimeType.TEXT)
 *       .setHeaders({ "Access-Control-Allow-Origin": "*" });
 *   }
 *   function doGet(e) {
 *     return ContentService.createTextOutput("OK")
 *       .setMimeType(ContentService.MimeType.TEXT)
 *       .setHeaders({ "Access-Control-Allow-Origin": "*" });
 *   }
 */

// Replace this with your Google Apps Script Web App endpoint
const LOGGER_ENDPOINT = "https://script.google.com/macros/s/AKfycbz0yyH_uzZBft2Vz6WaYOYD_LPHILsqKRjerWATmJ4Ofarm6WZBwjD57Q5TpWYExqLJ/exec";

/**
 * Send a log event to the backend
 * @param {string} eventType - e.g. "page_view", "lesson_open", "quiz_submit"
 * @param {object} data - extra data about the event {lesson: "Chapter 1", user: "studentA"}
 */
function logEvent(eventType, data = {}) {
  const payload = {
    timestamp: new Date().toISOString(),
    eventType: eventType,
    userId: localStorage.getItem("userId") || "anon",
    page: window.location.pathname,
    ...data
  };

  console.log('Sending JSON data to logger:', JSON.stringify(payload, null, 2)); // Debug log

  fetch(LOGGER_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(response => {
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    return response.text();
  }).then(text => {
    console.log('Response body:', text);
    if (text.includes('error') || text.includes('Error')) {
      console.error('Server returned error:', text);
    } else {
      console.log('Data logged successfully');
    }
  }).catch(err => {
    console.error("POST logging failed:", err);
    // Fallback: try GET request
    console.log('Attempting GET fallback...');
    fetch(LOGGER_ENDPOINT + '?' + new URLSearchParams(payload), {
      method: "GET"
    }).then(response => {
      console.log('GET response status:', response.status);
      return response.text();
    }).then(text => {
      console.log('GET response text:', text);
    }).catch(getErr => {
      console.error("Both POST and GET logging failed:", getErr);
    });
  });
}

// Example: auto-log page views when a portal loads
document.addEventListener("DOMContentLoaded", () => {
  logEvent("page_view", { title: document.title });
});
