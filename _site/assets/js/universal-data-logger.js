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
            height: window.innerHeight
        },
        performance: {
            loadTime: performance.now(),
            timeOrigin: performance.timeOrigin
        },
        localStorage: {
            available: typeof(Storage) !== "undefined",
            itemCount: localStorage ? localStorage.length : 0
        },
        sessionData: {
            sessionId: generateSessionId(),
            visitCount: getVisitCount()
        }
    };
    
    return data;
}

function sendDataReport(data) {
    // Method 1: Send to console (for development)
    console.log('Universal Data Logger Report:', data);
    
    // Method 2: Send via email (using mailto - requires user action)
    const subject = encodeURIComponent('Cosmos in the Classroom - Data Logger Report');
    const body = encodeURIComponent(`Data Logger Report\n\nTimestamp: ${data.timestamp}\n\nFull Data:\n${JSON.stringify(data, null, 2)}`);
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
    
    // Method 3: Post to a webhook/API endpoint (uncomment and configure as needed)
    /*
    fetch('/api/data-logger', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => console.log('Data sent successfully:', result))
    .catch(error => console.error('Error sending data:', error));
    */
    
    // For now, open email client
    window.open(mailtoLink);
}

function generateSessionId() {
    let sessionId = sessionStorage.getItem('cosmosSessionId');
    if (!sessionId) {
        sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('cosmosSessionId', sessionId);
    }
    return sessionId;
}

function getVisitCount() {
    let visitCount = localStorage.getItem('cosmosVisitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('cosmosVisitCount', visitCount);
    return visitCount;
}

function showConfirmation() {
    const confirmation = document.createElement('div');
    confirmation.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #4ade80;
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            font-family: Arial, sans-serif;
        ">
            📊 Data logger report generated! Check your email client.
        </div>
    `;
    
    document.body.appendChild(confirmation);
    
    setTimeout(() => {
        document.body.removeChild(confirmation);
    }, 3000);
}

// Optional: Auto-collect data on page load (uncomment if desired)
/*
document.addEventListener('DOMContentLoaded', function() {
    // Store page visit data
    const visitData = {
        timestamp: new Date().toISOString(),
        page: window.location.href,
        sessionId: generateSessionId()
    };
    
    console.log('Page visit logged:', visitData);
});
*/
