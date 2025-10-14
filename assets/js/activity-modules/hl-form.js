/**
 * Hexagon Lab Form Module
 * Generates submission fields for Hexagon Lab activities
 * Version: 1.0.0
 * Date: October 13, 2025
 */

(function() {
    'use strict';

    // Wait for activity-core to be ready
    if (!window.ACTIVITY_CORE) {
        console.error('[hl-form] activity-core.js not loaded');
        return;
    }

    console.log('[hl-form] Hexagon Lab module loading...');

    // =============================================================================
    // MODULE INITIALIZATION
    // =============================================================================
    
    function initialize() {
        const metadata = window.ACTIVITY_CORE.getMetadata();
        
        if (metadata.contentType !== 'hexagon_lab') {
            console.warn('[hl-form] Not a hexagon lab, skipping initialization');
            return;
        }

        console.log('[hl-form] Initializing Hexagon Lab form...');
        
        // Generate form fields
        generateFormFields(metadata);
        
        console.log('[hl-form] Hexagon Lab form initialized');
    }

    // =============================================================================
    // FORM FIELD GENERATION
    // =============================================================================

    function generateFormFields(metadata) {
        const container = document.getElementById('activity-specific-fields');
        if (!container) {
            console.error('[hl-form] Container #activity-specific-fields not found');
            return;
        }
        
        // Clear existing content - no additional fields needed for hexagon labs
        // All questions are already rendered in the lab sections
        container.innerHTML = '';
        
        console.log('[hl-form] Hexagon lab uses inline questions - no additional submission fields');
    }

    // =============================================================================
    // AUTO-INITIALIZATION
    // =============================================================================

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

    console.log('[hl-form] Module loaded');

})();
