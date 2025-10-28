/**
 * activity-core-static.js
 *
 * Lightweight core module for static content navigation only.
 * Handles navigation without submission functionality.
 */

// Initialize the global Socrates object for static content
if (typeof window.Socrates === 'undefined') {
    window.Socrates = {
        config: {},
        data: {},
        modules: {},
        log: function(message) {
            console.log('[Socrates]', message);
        },
        getMetadata: function() {
            // Extract metadata from the activity-metadata element
            const metadataElement = document.getElementById('activity-metadata');
            
            if (!metadataElement) {
                console.warn('[Socrates] No metadata element found');
                return {
                    contentType: 'unknown',
                    course: 'unknown'
                };
            }
            
            return {
                contentType: metadataElement.getAttribute('data-content-type') || 'unknown',
                course: metadataElement.getAttribute('data-course') || 'unknown',
                title: metadataElement.getAttribute('data-title') || 'unknown'
            };
        }
    };
    window.Socrates.log('Static content core initialized.');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.Socrates.log('DOM ready - static content mode');
    
    const metadata = window.Socrates.getMetadata();
    window.Socrates.log('Content type: ' + metadata.contentType + ', Course: ' + metadata.course);
    
    // Ensure navigation is working - verify first item has active class
    setTimeout(function() {
        const firstItem = document.querySelector('.problem-container, .lab-section, .flexbook-item, .brief-task');
        if (firstItem && !firstItem.classList.contains('active')) {
            window.Socrates.log('Adding active class to first item');
            firstItem.classList.add('active');
            firstItem.style.display = 'block';
        }
    }, 100);
});

window.Socrates.log('activity-core-static.js loaded.');