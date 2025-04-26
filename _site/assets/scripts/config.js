// Configuration file for path references

// Base paths
const CONFIG = {
    // Path constants
    PATHS: {
        CSS_BASE: "../assets/css/",
        JS_BASE: "../assets/js/",
        IMG_BASE: "../assets/images/",
        LIB_BASE: "../assets/lib/",
        SRC_BASE: "../assets/src/"
    },
    
    // Specific file references
    FILES: {
        MAIN_CSS: "worksheets.css",
        MAIN_JS: "script.js"
    }
};

// Apply configurations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set CSS path
    document.getElementById('mainStylesheet').href = 
        CONFIG.PATHS.CSS_BASE + CONFIG.FILES.MAIN_CSS;
    
    // You can add more automatic configurations here
});
