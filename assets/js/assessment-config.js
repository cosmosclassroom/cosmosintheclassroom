// Assessment configuration
const ASSESSMENT_CONFIG = {
    webAppUrl: 'https://script.google.com/macros/s/AKfycbwoNvklG6XSla2Kwd8S6nsdK_uMByuNZaBC3cjT2QAYNuGnt3LM3vEltc5ZsifanNwqrA/exec',
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