/**
 * Activity Navigator - Unified Sequential Navigation System
 * 
 * Provides one-at-a-time navigation for all activity types:
 * - Problem Sets (YAML problems array)
 * - Flexbooks (YAML instructional_flow array)
 * - Hexagon Labs (parsed markdown sections)
 * - Research Briefs (future)
 * 
 * Usage:
 *   const navigator = new ActivityNavigator({
 *     containerSelector: '.problem-container',
 *     progressBarId: 'progress-fill',
 *     progressTextId: 'progress-text',
 *     prevButtonId: 'prev-item',
 *     nextButtonId: 'next-item',
 *     itemLabel: 'Problem'  // or 'Section', 'Activity', etc.
 *   });
 */

class ActivityNavigator {
    constructor(options = {}) {
        // Configuration
        this.containerSelector = options.containerSelector || '.nav-item-container';
        this.progressBarId = options.progressBarId || 'progress-fill';
        this.progressTextId = options.progressTextId || 'progress-text';
        // Support both old ID-based and new selector-based button targeting
        this.prevButtonId = options.prevButtonId || options.prevButtonSelector || 'prev-item';
        this.nextButtonId = options.nextButtonId || options.nextButtonSelector || 'next-item';
        this.dropdownId = options.dropdownId || null; // New: dropdown selector support
        this.itemLabel = options.itemLabel || 'Item';
        this.scrollToTop = options.scrollToTop !== false; // Default true
        
        // State
        this.currentIndex = 0;
        this.totalItems = 0;
        this.items = [];
        
        // Initialize
        this.init();
    }
    
    init() {
        // Get all navigable items
        this.items = document.querySelectorAll(this.containerSelector);
        this.totalItems = this.items.length;
        
        if (this.totalItems === 0) {
            console.warn('[ActivityNavigator] No items found with selector:', this.containerSelector);
            return;
        }
        
        // Show first item
        this.showItem(0);
        
        // Setup navigation buttons
        this.setupButtons();
        
        // Setup keyboard navigation (optional)
        this.setupKeyboardNav();
        
        console.log('[ActivityNavigator] Initialized with', this.totalItems, 'items');
    }
    
    setupButtons() {
        // Handle both ID-based and selector-based button finding
        let prevButton, nextButton;
        
        if (this.prevButtonId) {
            if (this.prevButtonId.startsWith('.') || this.prevButtonId.startsWith('#')) {
                // It's a CSS selector
                prevButton = document.querySelector(this.prevButtonId);
            } else {
                // It's an ID
                prevButton = document.getElementById(this.prevButtonId);
            }
        }
        
        if (this.nextButtonId) {
            if (this.nextButtonId.startsWith('.') || this.nextButtonId.startsWith('#')) {
                // It's a CSS selector
                nextButton = document.querySelector(this.nextButtonId);
            } else {
                // It's an ID
                nextButton = document.getElementById(this.nextButtonId);
            }
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', () => this.navigate(-1));
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => this.navigate(1));
        }
    }
    
    setupKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            // Arrow keys for navigation (only when not typing in input/textarea)
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
            
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigate(-1);
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigate(1);
            }
        });
    }
    
    navigate(direction) {
        const newIndex = this.currentIndex + direction;
        if (newIndex >= 0 && newIndex < this.totalItems) {
            this.showItem(newIndex);
        }
    }
    
    showItem(index) {
        // Validate index
        if (index < 0 || index >= this.totalItems) {
            console.warn('[ActivityNavigator] Invalid index:', index);
            return;
        }
        
        // Hide all items
        this.items.forEach((item, i) => {
            item.classList.remove('active');
            item.style.display = 'none'; // Force inline style to hide
            console.log(`[ActivityNavigator] Hiding item ${i}:`, item.style.display);
        });
        
        // Show current item
        this.items[index].classList.add('active');
        this.items[index].style.display = 'block'; // Force inline style to show
        this.currentIndex = index;
        console.log(`[ActivityNavigator] Showing item ${index}:`, this.items[index].style.display, this.items[index]);
        
        // Update UI
        this.updateButtons();
        this.updateProgress();
        
        // Scroll to top
        if (this.scrollToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        console.log('[ActivityNavigator] Showing', this.itemLabel, index + 1, 'of', this.totalItems);
    }
    
    updateButtons() {
        // Handle both ID-based and selector-based button finding (same logic as setupButtons)
        let prevButton, nextButton;
        
        if (this.prevButtonId) {
            if (this.prevButtonId.startsWith('.') || this.prevButtonId.startsWith('#')) {
                // It's a CSS selector
                prevButton = document.querySelector(this.prevButtonId);
            } else {
                // It's an ID
                prevButton = document.getElementById(this.prevButtonId);
            }
        }
        
        if (this.nextButtonId) {
            if (this.nextButtonId.startsWith('.') || this.nextButtonId.startsWith('#')) {
                // It's a CSS selector
                nextButton = document.querySelector(this.nextButtonId);
            } else {
                // It's an ID
                nextButton = document.getElementById(this.nextButtonId);
            }
        }
        
        if (prevButton) {
            prevButton.disabled = (this.currentIndex === 0);
        }
        
        if (nextButton) {
            nextButton.disabled = (this.currentIndex === this.totalItems - 1);
        }
    }
    
    updateProgress() {
        const progressFill = document.getElementById(this.progressBarId);
        const progressText = document.getElementById(this.progressTextId);
        const dropdown = this.dropdownId ? document.getElementById(this.dropdownId) : null;
        
        if (progressFill) {
            const percent = ((this.currentIndex + 1) / this.totalItems) * 100;
            progressFill.style.width = percent + '%';
        }
        
        if (progressText) {
            progressText.textContent = `${this.itemLabel} ${this.currentIndex + 1} of ${this.totalItems}`;
        }
        
        // Update dropdown selection without triggering change event
        if (dropdown) {
            dropdown.value = this.currentIndex;
        }
    }
    
    // Public API
    jumpTo(index) {
        this.showItem(index);
    }
    
    goToItem(index) {
        this.showItem(index);
    }
    
    next() {
        this.navigate(1);
    }
    
    prev() {
        this.navigate(-1);
    }
    
    getCurrentIndex() {
        return this.currentIndex;
    }
    
    getTotalItems() {
        return this.totalItems;
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ActivityNavigator;
}
