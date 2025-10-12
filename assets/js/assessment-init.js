// Assessment Initialization Script

// Initialize assessment system components in the correct order
document.addEventListener('DOMContentLoaded', function() {
    console.log('Assessment initialization starting...');
    
    // Keep track of loaded components
    const loaded = {
        errorHandling: false,
        config: false,
        sections: false,
        storage: false,
        utils: false,
        main: false
    };
    
    // Log load status
    function logStatus(component, success) {
        loaded[component] = success;
        console.log(`Assessment component ${component} loaded: ${success ? 'SUCCESS' : 'FAILED'}`);
        
        // Check if all critical components are loaded
        const criticalComponents = ['errorHandling', 'config', 'sections', 'storage'];
        const allCriticalLoaded = criticalComponents.every(c => loaded[c]);
        
        if (allCriticalLoaded) {
            console.log('✅ All critical assessment components loaded');
        }
    }
    
    try {
        // Ensure assessment configuration exists
        if (!window.ASSESSMENT_CONFIG) {
            window.ASSESSMENT_CONFIG = {
                autoSaveInterval: 30000, // 30 seconds default
                webAppUrl: document.querySelector('meta[name="assessment-endpoint"]')?.getAttribute('content'),
                password: document.querySelector('meta[name="assessment-password"]')?.getAttribute('content'),
                passwordHash: document.querySelector('meta[name="assessment-password-hash"]')?.getAttribute('content')
            };
        }
        logStatus('config', true);
        
        // Initialize error handling
        if (window.assessmentErrors) {
            // Add visual error indicator to show user when something goes wrong
            window.assessmentErrors.onError(function(errorInfo) {
                // Log to console
                console.group('Assessment System Error');
                console.error(errorInfo.message);
                console.info('Source:', errorInfo.source);
                console.info('Context:', errorInfo.context);
                if (errorInfo.stack) console.debug('Stack:', errorInfo.stack);
                console.groupEnd();
                
                // Show in UI
                const errorIndicator = document.getElementById('assessment-error-indicator') || 
                                     document.createElement('div');
                if (!errorIndicator.id) {
                    errorIndicator.id = 'assessment-error-indicator';
                    errorIndicator.style.cssText = 'margin:10px;padding:10px;background:#fff3cd;border:1px solid #ffeeba;border-radius:4px;color:#856404';
                    
                    const assessmentForm = document.querySelector('.assessment-form') || 
                                        document.querySelector('form') || 
                                        document.body.firstElementChild;
                    if (assessmentForm) {
                        assessmentForm.parentNode.insertBefore(errorIndicator, assessmentForm);
                    }
                }
                
                errorIndicator.innerHTML = `
                    <strong>System Notice:</strong> The assessment encountered an issue.
                    <span style="display:block;margin-top:5px;font-size:0.9em">
                        Error in ${errorInfo.source}: ${errorInfo.message}
                    </span>
                    <button onclick="document.getElementById('assessment-error-indicator').style.display='none'" 
                            style="float:right;background:none;border:none;cursor:pointer">✕</button>
                `;
            });
            logStatus('errorHandling', true);
        } else {
            console.warn('Assessment error handling not available');
            logStatus('errorHandling', false);
        }
        
        // Check for section management
        if (typeof initializeSections === 'function') {
            console.log('Sections module available');
            logStatus('sections', true);
        } else {
            console.warn('Assessment sections module not available');
            logStatus('sections', false);
        }
        
        // Check for storage functionality
        if (typeof autoSave === 'function') {
            console.log('Storage module available');
            logStatus('storage', true);
            
            // Set up auto-save timer
            if (window.ASSESSMENT_CONFIG.autoSaveInterval > 0) {
                console.log(`Setting auto-save interval: ${window.ASSESSMENT_CONFIG.autoSaveInterval}ms`);
                setInterval(function() {
                    try {
                        autoSave();
                    } catch (e) {
                        if (window.assessmentErrors) {
                            window.assessmentErrors.report('autoSaveTimer', e);
                        } else {
                            console.error('Auto-save error:', e);
                        }
                    }
                }, window.ASSESSMENT_CONFIG.autoSaveInterval);
            }
        } else {
            console.warn('Assessment storage module not available');
            logStatus('storage', false);
        }
        
        // Check for utility functions
        if (typeof updateProgress === 'function') {
            console.log('Utils module available');
            logStatus('utils', true);
            
            // Attach progress tracking events
            const form = document.getElementById('assessment-form');
            if (form) {
                form.addEventListener('input', updateProgress);
                form.addEventListener('change', updateProgress);
            }
        } else {
            console.warn('Assessment utils module not available');
            logStatus('utils', false);
        }
        
        console.log('Assessment system initialization complete');
        
    } catch (error) {
        console.error('Assessment initialization error:', error);
        if (window.assessmentErrors) {
            window.assessmentErrors.report('initialization', error);
        }
    }
});