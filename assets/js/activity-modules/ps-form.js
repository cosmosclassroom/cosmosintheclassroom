/**
 * Problem Set Form Module
 * Generates submission fields for Problem Set activities
 * Version: 1.0.0
 * Date: October 13, 2025
 */

(function() {
    'use strict';

    // Wait for activity-core to be ready
    if (!window.ACTIVITY_CORE) {
        console.error('[ps-form] activity-core.js not loaded');
        return;
    }

    console.log('[ps-form] Problem Set module loading...');

    // =============================================================================
    // MODULE INITIALIZATION
    // =============================================================================
    
    function initialize() {
        const metadata = window.ACTIVITY_CORE.getMetadata();
        
        if (metadata.contentType !== 'problem_set') {
            console.warn('[ps-form] Not a problem set, skipping initialization');
            return;
        }

        console.log('[ps-form] Initializing Problem Set form...');
        
        // Generate form fields
        generateFormFields(metadata);
        
        console.log('[ps-form] Problem Set form initialized');
    }

    // =============================================================================
    // FORM FIELD GENERATION
    // =============================================================================

    function generateFormFields(metadata) {
        const container = document.getElementById('activity-specific-fields');
        if (!container) {
            console.error('[ps-form] Container #activity-specific-fields not found');
            return;
        }

        const fields = metadata.submissionFields || {};
        
        // Build form HTML
        let html = '';

        // Section 1: Completion Checklist
        if (fields.completion_checklist !== false) {
            html += buildCompletionChecklist(fields.completion_checklist);
        }

        // Section 2: Difficulty Rating
        if (fields.difficulty_rating !== false) {
            html += buildDifficultyRating();
        }

        // Section 3: Time Spent
        if (fields.time_spent !== false) {
            html += buildTimeSpent();
        }

        // Section 4: Reflection
        if (fields.reflection !== false) {
            html += buildReflection(fields.reflection);
        }

        // Section 5: Questions/Help Needed
        if (fields.questions !== false) {
            html += buildQuestionsField();
        }

        // Section 6: Collaboration (if enabled)
        if (fields.collaboration === true) {
            html += buildCollaborationField();
        }

        // Section 7: Additional Notes
        if (fields.additional_notes !== false) {
            html += buildAdditionalNotes();
        }

        container.innerHTML = html;

        // Attach event listeners
        attachEventListeners();
    }

    // =============================================================================
    // FIELD BUILDERS
    // =============================================================================

    function buildCompletionChecklist(config) {
        // Note: Completion checklist is now more meaningful since we're collecting actual answers
        const problems = config?.problems || [
            'Apprentice Problems',
            'Journeyman Problems',
            'Master Problems'
        ];

        let html = '<div class="form-section">';
        html += '<h4>Completion Checklist</h4>';
        html += '<p class="helper-text">Check all sections you completed:</p>';
        html += '<div class="checkbox-group">';

        problems.forEach((problem, index) => {
            const id = `completion-${index}`;
            html += `
                <div class="checkbox-item">
                    <input type="checkbox" 
                           id="${id}" 
                           name="completed_sections" 
                           value="${escapeHtml(problem)}">
                    <label for="${id}">${escapeHtml(problem)}</label>
                </div>
            `;
        });

        html += '</div>';
        html += '<p class="helper-text"><small>Note: Your individual problem answers are automatically included in the submission.</small></p>';
        html += '</div>';

        return html;
    }

    function buildDifficultyRating() {
        let html = '<div class="form-section">';
        html += '<h4>Difficulty Rating</h4>';
        html += '<div class="form-group">';
        html += '<label for="difficulty-rating">How challenging was this problem set?</label>';
        html += '<select id="difficulty-rating" name="difficulty_rating" required>';
        html += '<option value="">Select difficulty...</option>';
        html += '<option value="too_easy">Too Easy - Not challenging enough</option>';
        html += '<option value="just_right">Just Right - Good challenge level</option>';
        html += '<option value="challenging">Challenging - Had to work hard but manageable</option>';
        html += '<option value="too_hard">Too Hard - Struggled significantly</option>';
        html += '</select>';
        html += '</div>';
        html += '</div>';

        return html;
    }

    function buildTimeSpent() {
        let html = '<div class="form-section">';
        html += '<h4>Time Spent</h4>';
        html += '<div class="form-grid">';
        
        html += '<div class="form-group">';
        html += '<label for="time-spent">Approximate time spent (minutes) <span class="required">*</span></label>';
        html += '<input type="number" id="time-spent" name="time_spent" min="0" max="500" required>';
        html += '</div>';

        html += '<div class="form-group">';
        html += '<label for="work-sessions">Number of work sessions</label>';
        html += '<input type="number" id="work-sessions" name="work_sessions" min="1" max="20" value="1">';
        html += '<span class="helper-text">How many separate times did you work on this?</span>';
        html += '</div>';

        html += '</div>';
        html += '</div>';

        return html;
    }

    function buildReflection(config) {
        const prompt = config?.prompt || 
            'What did you learn from this problem set? What strategies worked well? What would you do differently next time?';

        let html = '<div class="form-section">';
        html += '<h4>Reflection <span class="required">*</span></h4>';
        html += '<div class="form-group">';
        html += `<label for="reflection">${escapeHtml(prompt)}</label>`;
        html += '<textarea id="reflection" name="reflection" required minlength="50" rows="6">';
        html += '</textarea>';
        html += '<span class="helper-text">Minimum 50 characters. Be thoughtful and specific.</span>';
        html += '</div>';
        html += '</div>';

        return html;
    }

    function buildQuestionsField() {
        let html = '<div class="form-section">';
        html += '<h4>Questions or Help Needed</h4>';
        html += '<div class="form-group">';
        html += '<label for="questions">Do you have any questions about the problems or concepts?</label>';
        html += '<textarea id="questions" name="questions" rows="4">';
        html += '</textarea>';
        html += '<span class="helper-text">Optional: List specific problems or concepts you struggled with.</span>';
        html += '</div>';
        html += '</div>';

        return html;
    }

    function buildCollaborationField() {
        let html = '<div class="form-section">';
        html += '<h4>Collaboration</h4>';
        html += '<div class="form-group">';
        html += '<label for="collaborated-with">Did you work with anyone? (Optional)</label>';
        html += '<input type="text" id="collaborated-with" name="collaborated_with" ';
        html += 'placeholder="Enter names of classmates">';
        html += '<span class="helper-text">List classmates you collaborated with (discussion only, not copying).</span>';
        html += '</div>';
        html += '</div>';

        return html;
    }

    function buildAdditionalNotes() {
        let html = '<div class="form-section">';
        html += '<h4>Additional Notes</h4>';
        html += '<div class="form-group">';
        html += '<label for="additional-notes">Any other comments or feedback?</label>';
        html += '<textarea id="additional-notes" name="additional_notes" rows="3">';
        html += '</textarea>';
        html += '</div>';
        html += '</div>';

        return html;
    }

    // =============================================================================
    // EVENT LISTENERS
    // =============================================================================

    function attachEventListeners() {
        // Character counter for reflection
        const reflectionField = document.getElementById('reflection');
        if (reflectionField) {
            reflectionField.addEventListener('input', function() {
                const length = this.value.length;
                const minLength = parseInt(this.getAttribute('minlength')) || 50;
                
                // Find or create counter display
                let counter = this.parentElement.querySelector('.char-counter');
                if (!counter) {
                    counter = document.createElement('span');
                    counter.className = 'char-counter';
                    this.parentElement.appendChild(counter);
                }

                counter.textContent = `${length} / ${minLength} characters`;
                counter.style.color = length >= minLength ? '#27ae60' : '#7f8c8d';
                counter.style.fontSize = '0.85rem';
                counter.style.marginTop = '0.25rem';
            });
        }

        // Time spent validation
        const timeSpentField = document.getElementById('time-spent');
        if (timeSpentField) {
            timeSpentField.addEventListener('input', function() {
                const value = parseInt(this.value);
                if (value > 180) {
                    this.setCustomValidity('If you spent more than 3 hours, please explain in Additional Notes.');
                } else {
                    this.setCustomValidity('');
                }
            });
        }

        // Checklist tracking
        const checkboxes = document.querySelectorAll('input[name="completed_sections"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateCompletionSummary();
            });
        });
    }

    function updateCompletionSummary() {
        const checkboxes = document.querySelectorAll('input[name="completed_sections"]:checked');
        console.log('[ps-form] Completed sections:', checkboxes.length);
        
        // Could add visual feedback here if desired
    }

    // =============================================================================
    // UTILITY FUNCTIONS
    // =============================================================================

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
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

    console.log('[ps-form] Problem Set module loaded');

})();
