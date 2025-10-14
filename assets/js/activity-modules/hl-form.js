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

        const fields = metadata.submissionFields || {};
        
        // Clear existing content
        container.innerHTML = '';

        // Completion Checklist
        if (fields.completion_checklist && fields.completion_checklist.sections) {
            const checklistHtml = generateChecklistField(fields.completion_checklist);
            container.insertAdjacentHTML('beforeend', checklistHtml);
        }

        // Difficulty Rating
        if (fields.difficulty_rating) {
            const difficultyHtml = generateDifficultyRating();
            container.insertAdjacentHTML('beforeend', difficultyHtml);
        }

        // Time Spent
        if (fields.time_spent) {
            const timeHtml = `
                <div class="form-group">
                    <label for="time-spent" class="form-label">
                        Time Spent (minutes)
                        <span class="help-text">How long did this lab take you to complete?</span>
                    </label>
                    <input 
                        type="number" 
                        id="time-spent" 
                        name="time_spent"
                        min="0"
                        step="5"
                        placeholder="e.g., 45"
                        class="form-control"
                    >
                </div>
            `;
            container.insertAdjacentHTML('beforeend', timeHtml);
        }

        // Reflection
        if (fields.reflection && fields.reflection.prompt) {
            const reflectionHtml = `
                <div class="form-group">
                    <label for="reflection" class="form-label">
                        Reflection
                        <span class="help-text">${fields.reflection.prompt}</span>
                    </label>
                    <textarea 
                        id="reflection" 
                        name="reflection"
                        rows="4"
                        placeholder="Write your reflection here..."
                        class="form-control"
                    ></textarea>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', reflectionHtml);
        }

        // Questions for Teacher
        if (fields.questions) {
            const questionsHtml = `
                <div class="form-group">
                    <label for="questions" class="form-label">
                        Questions for Teacher
                        <span class="help-text">Any questions or concepts you'd like clarified?</span>
                    </label>
                    <textarea 
                        id="questions" 
                        name="questions"
                        rows="3"
                        placeholder="Optional - list any questions you have..."
                        class="form-control"
                    ></textarea>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', questionsHtml);
        }

        // Collaboration
        if (fields.collaboration) {
            const collaborationHtml = `
                <div class="form-group">
                    <label for="collaborators" class="form-label">
                        Collaboration
                        <span class="help-text">List anyone you worked with (if applicable)</span>
                    </label>
                    <input 
                        type="text" 
                        id="collaborators" 
                        name="collaborators"
                        placeholder="e.g., Alex Smith, Jordan Lee"
                        class="form-control"
                    >
                </div>
            `;
            container.insertAdjacentHTML('beforeend', collaborationHtml);
        }

        // Additional Notes
        if (fields.additional_notes) {
            const notesHtml = `
                <div class="form-group">
                    <label for="additional-notes" class="form-label">
                        Additional Notes
                        <span class="help-text">Any other comments about this lab?</span>
                    </label>
                    <textarea 
                        id="additional-notes" 
                        name="additional_notes"
                        rows="3"
                        placeholder="Optional additional comments..."
                        class="form-control"
                    ></textarea>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', notesHtml);
        }
    }

    function generateChecklistField(checklistConfig) {
        const sections = checklistConfig.sections || [];
        
        let checklistHtml = `
            <div class="form-group">
                <label class="form-label">
                    Completion Checklist
                    <span class="help-text">Check off each section as you complete it</span>
                </label>
                <div class="checkbox-group">
        `;

        sections.forEach((section, index) => {
            checklistHtml += `
                <div class="checkbox-item">
                    <input 
                        type="checkbox" 
                        id="checklist-${index}" 
                        name="completion_checklist[]"
                        value="${section}"
                    >
                    <label for="checklist-${index}">${section}</label>
                </div>
            `;
        });

        checklistHtml += `
                </div>
            </div>
        `;

        return checklistHtml;
    }

    function generateDifficultyRating() {
        return `
            <div class="form-group">
                <label class="form-label">
                    Difficulty Rating
                    <span class="help-text">How challenging was this lab?</span>
                </label>
                <div class="radio-group difficulty-rating">
                    <div class="radio-item">
                        <input type="radio" id="difficulty-1" name="difficulty_rating" value="1">
                        <label for="difficulty-1">1 - Very Easy</label>
                    </div>
                    <div class="radio-item">
                        <input type="radio" id="difficulty-2" name="difficulty_rating" value="2">
                        <label for="difficulty-2">2 - Easy</label>
                    </div>
                    <div class="radio-item">
                        <input type="radio" id="difficulty-3" name="difficulty_rating" value="3" checked>
                        <label for="difficulty-3">3 - Just Right</label>
                    </div>
                    <div class="radio-item">
                        <input type="radio" id="difficulty-4" name="difficulty_rating" value="4">
                        <label for="difficulty-4">4 - Challenging</label>
                    </div>
                    <div class="radio-item">
                        <input type="radio" id="difficulty-5" name="difficulty_rating" value="5">
                        <label for="difficulty-5">5 - Very Challenging</label>
                    </div>
                </div>
            </div>
        `;
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
