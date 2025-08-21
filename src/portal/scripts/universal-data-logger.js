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
    console.error("Logging failed:", err);
  });
}

// Example: auto-log page views when a portal loads
document.addEventListener("DOMContentLoaded", () => {
  logEvent("page_view", { title: document.title });
});
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
