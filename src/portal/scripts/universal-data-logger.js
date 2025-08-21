// /portal/scripts/universal-data-logger.js

// Replace this with your Google Apps Script Web App endpoint
const LOGGER_ENDPOINT = "https://script.google.com/macros/s/AKfycbzHxXrwCH2mOpLtOEbi-UMeS1YG9SjFZv3MdrqDtZ5BI0WWe5fXVkt2TSn_jQfueZrU/exec";

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

  console.log('Sending data to logger:', payload); // Debug log

  // Try both POST and GET methods to ensure compatibility
  const params = new URLSearchParams();
  Object.keys(payload).forEach(key => {
    params.append(key, typeof payload[key] === 'object' ? JSON.stringify(payload[key]) : payload[key]);
  });

  // Method 1: POST request
  fetch(LOGGER_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.toString()
  }).then(response => {
    console.log('POST response status:', response.status);
    return response.text();
  }).then(text => {
    console.log('POST response text:', text);
  }).catch(err => {
    console.warn("POST logging failed:", err);
    
    // Method 2: GET request as fallback
    const getUrl = `${LOGGER_ENDPOINT}?${params.toString()}`;
    console.log('Trying GET fallback:', getUrl);
    
    fetch(getUrl, {
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
