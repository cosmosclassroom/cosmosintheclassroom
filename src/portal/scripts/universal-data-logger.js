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

  fetch(LOGGER_ENDPOINT, {
    method: "POST",
    mode: "no-cors", // prevents CORS errors; server won’t return a response
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).catch(err => {
    console.warn("Logging failed:", err);
  });
}

// Example: auto-log page views when a portal loads
document.addEventListener("DOMContentLoaded", () => {
  logEvent("page_view", { title: document.title });
});
