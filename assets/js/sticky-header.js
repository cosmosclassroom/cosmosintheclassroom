/**
 * Sticky Header Controller
 * Manages student name persistence and submission button wiring for activity pages
 * Part of Phase 1: Sticky Header Implementation (Oct 15, 2025)
 */

(function() {
    'use strict';

    const STORAGE_KEY_PREFIX = 'socrates_student_';
    
    /**
     * Initialize sticky header functionality
     */
    function initializeStickyHeader() {
        const nameInput = document.getElementById('student-name-input');
        const submitBtn = document.getElementById('submit-activity-btn');
        
        if (!nameInput || !submitBtn) {
            console.warn('[sticky-header.js] Required elements not found');
            return;
        }

        // Restore student name from localStorage
        restoreStudentName(nameInput);

        // Save student name on change
        nameInput.addEventListener('input', function() {
            saveStudentName(this.value);
        });

        // Wire submit button to existing submission logic
        submitBtn.addEventListener('click', handleSubmit);

        console.log('[sticky-header.js] Initialized');
    }

    /**
     * Restore student name from localStorage
     */
    function restoreStudentName(input) {
        const savedName = localStorage.getItem(STORAGE_KEY_PREFIX + 'name');
        if (savedName) {
            input.value = savedName;
            console.log('[sticky-header.js] Restored student name');
        }
    }

    /**
     * Save student name to localStorage
     */
    function saveStudentName(name) {
        localStorage.setItem(STORAGE_KEY_PREFIX + 'name', name.trim());
    }

    /**
     * Get current student name
     */
    function getStudentName() {
        const input = document.getElementById('student-name-input');
        return input ? input.value.trim() : '';
    }

    /**
     * Handle submission button click
     */
    function handleSubmit() {
        const studentName = getStudentName();
        
        if (!studentName) {
            alert('Please enter your name before submitting.');
            document.getElementById('student-name-input').focus();
            return;
        }

        // Wait for ACTIVITY_CORE to be ready, then trigger submission
        if (window.ACTIVITY_CORE && typeof window.ACTIVITY_CORE.submitActivity === 'function') {
            window.ACTIVITY_CORE.submitActivity(studentName);
        } else {
            console.warn('[sticky-header.js] ACTIVITY_CORE not ready yet, retrying...');
            // Retry after a short delay
            setTimeout(function() {
                if (window.ACTIVITY_CORE && typeof window.ACTIVITY_CORE.submitActivity === 'function') {
                    window.ACTIVITY_CORE.submitActivity(studentName);
                } else {
                    console.error('[sticky-header.js] ACTIVITY_CORE.submitActivity still not found');
                    alert('Submission system not ready. Please wait a moment and try again.');
                }
            }, 100);
        }
    }

    // Expose getStudentName globally for activity-core.js
    window.StickyHeader = {
        getStudentName: getStudentName
    };

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeStickyHeader);
    } else {
        initializeStickyHeader();
    }

})();
