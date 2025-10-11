// Assessment configuration
const ASSESSMENT_CONFIG = {
    webAppUrl: 'https://script.google.com/macros/s/AKfycbwlCDJ8sCL70GQ6A94du7dvS-W7svMe8VbNb_Gik0Gf5Lx-QC6CFulEpoe_uX76ezBWRQ/exec',
    autoSaveInterval: 30000, // Will be overridden by Jekyll
    password: '', // Will be overridden by Jekyll
    passwordHash: '' // Will be overridden by Jekyll
};

// Track script loading for debugging
if (window.markScriptLoaded) {
  window.markScriptLoaded('config');
}

// Output debug info when running locally
if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
    console.log('Assessment config loaded:', ASSESSMENT_CONFIG);
}