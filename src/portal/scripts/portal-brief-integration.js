/**
 * Portal Research Brief Integration
 * Adds research brief functionality to the main portal interface
 */

class PortalBriefIntegration {
    constructor() {
        this.currentFilters = {
            type: 'all',
            level: 'all',
            search: ''
        };
        this.currentUnit = null;
        this.currentCourse = null;
    }

    /**
     * Initialize brief integration in portal
     */
    init() {
        this.injectBriefStyles();
        this.setupPortalIntegration();
        this.bindEvents();
    }

    /**
     * Inject research brief CSS into portal
     */
    injectBriefStyles() {
        if (!document.getElementById('research-brief-styles')) {
            const link = document.createElement('link');
            link.id = 'research-brief-styles';
            link.rel = 'stylesheet';
            link.href = '/src/portal/styles/research-briefs.css';
            document.head.appendChild(link);
        }
    }

    /**
     * Setup portal integration points
     */
    setupPortalIntegration() {
        // Add research briefs section to portal
        this.addBriefsToMainPortal();
        
        // Add unit-specific brief recommendations
        this.addUnitBriefRecommendations();
        
        // Add search functionality
        this.addBriefSearch();
    }

    /**
     * Add research briefs section to main portal
     */
    addBriefsToMainPortal() {
        const mainContent = document.querySelector('.main-content') || document.querySelector('main');
        if (!mainContent) return;

        // Check if research briefs section already exists
        if (document.getElementById('research-briefs-section')) return;

        const briefsSection = document.createElement('section');
        briefsSection.id = 'research-briefs-section';
        briefsSection.className = 'research-briefs-section';

        briefsSection.innerHTML = `
            <div class="research-briefs-header">
                <h2 class="research-briefs-title">Research Briefs from Socrates</h2>
                <div class="research-briefs-filters">
                    <select class="filter-select" id="type-filter">
                        <option value="all">All Types</option>
                        <option value="phenomena">Phenomena</option>
                        <option value="historical">Historical</option>
                        <option value="connections">Connections</option>
                        <option value="applications">Applications</option>
                    </select>
                    <select class="filter-select" id="level-filter">
                        <option value="all">All Levels</option>
                        <option value="exploratory">Exploratory</option>
                        <option value="standard">Standard</option>
                        <option value="honors">Honors</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
            </div>
            <div class="briefs-search-container">
                <input type="text" class="briefs-search-input" id="briefs-search" 
                       placeholder="Search research briefs..." />
            </div>
            <div class="briefs-filter-tabs" id="filter-tabs">
                <button class="filter-tab active" data-filter="all">All</button>
                <button class="filter-tab" data-filter="new">New</button>
                <button class="filter-tab" data-filter="recommended">Recommended</button>
                <button class="filter-tab" data-filter="bookmarked">Bookmarked</button>
            </div>
            <div class="research-briefs-grid" id="research-briefs-grid">
                <div class="briefs-loading">Loading research briefs...</div>
            </div>
        `;

        // Insert after existing content but before footer
        const insertPoint = this.findBestInsertionPoint(mainContent);
        if (insertPoint) {
            insertPoint.parentNode.insertBefore(briefsSection, insertPoint);
        } else {
            mainContent.appendChild(briefsSection);
        }

        // Load and display briefs
        this.loadBriefsIntoPortal();
    }

    /**
     * Find the best place to insert research briefs section
     */
    findBestInsertionPoint(container) {
        // Look for course selection section or similar
        const courseSection = container.querySelector('.course-selection');
        if (courseSection) {
            return courseSection.nextElementSibling;
        }

        // Look for existing navigation sections
        const navSection = container.querySelector('nav');
        if (navSection) {
            return navSection.nextElementSibling;
        }

        // Default to end of main content
        return null;
    }

    /**
     * Load and display research briefs in portal
     */
    async loadBriefsIntoPortal() {
        const grid = document.getElementById('research-briefs-grid');
        if (!grid) return;

        try {
            // Wait for research brief manager to be ready
            if (!window.researchBriefManager || !window.researchBriefManager.initialized) {
                setTimeout(() => this.loadBriefsIntoPortal(), 500);
                return;
            }

            const briefs = this.getFilteredBriefs();
            this.displayBriefs(briefs, grid);

        } catch (error) {
            console.error('Error loading briefs into portal:', error);
            grid.innerHTML = `
                <div class="briefs-empty">
                    <h3>Unable to load research briefs</h3>
                    <p>Please check your connection and try again.</p>
                </div>
            `;
        }
    }

    /**
     * Get filtered briefs based on current filters
     */
    getFilteredBriefs() {
        const briefManager = window.researchBriefManager;
        if (!briefManager || !briefManager.briefsIndex) return [];

        let briefs = briefManager.briefsIndex.briefs;

        // Apply type filter
        if (this.currentFilters.type !== 'all') {
            briefs = briefs.filter(brief => brief.type === this.currentFilters.type);
        }

        // Apply level filter
        if (this.currentFilters.level !== 'all') {
            briefs = briefs.filter(brief => brief.depth_level === this.currentFilters.level);
        }

        // Apply search filter
        if (this.currentFilters.search) {
            const searchLower = this.currentFilters.search.toLowerCase();
            briefs = briefs.filter(brief => 
                brief.title.toLowerCase().includes(searchLower) ||
                brief.summary?.toLowerCase().includes(searchLower) ||
                brief.related_concepts?.some(concept => 
                    concept.toLowerCase().includes(searchLower)
                )
            );
        }

        return briefs;
    }

    /**
     * Display briefs in the grid
     */
    displayBriefs(briefs, container) {
        if (!briefs || briefs.length === 0) {
            container.innerHTML = `
                <div class="briefs-empty">
                    <h3>No research briefs found</h3>
                    <p>Try adjusting your filters or search terms.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = '';
        
        briefs.forEach(brief => {
            const card = window.researchBriefManager.renderBriefCard(brief);
            container.appendChild(card);
        });
    }

    /**
     * Add unit-specific brief recommendations
     */
    addUnitBriefRecommendations() {
        // This would be called when viewing a specific unit
        // Look for unit navigation or content areas
        const unitSections = document.querySelectorAll('[data-unit-id]');
        
        unitSections.forEach(section => {
            const unitId = section.dataset.unitId;
            this.addUnitBriefWidget(section, unitId);
        });
    }

    /**
     * Add brief widget to unit section
     */
    addUnitBriefWidget(unitSection, unitId) {
        const widget = document.createElement('div');
        widget.className = 'unit-briefs-widget';
        widget.innerHTML = `
            <h4>Related Research Briefs</h4>
            <div class="unit-briefs-container" data-unit="${unitId}">
                <div class="briefs-loading">Loading related briefs...</div>
            </div>
        `;

        unitSection.appendChild(widget);

        // Load unit-specific briefs
        this.loadUnitBriefs(unitId);
    }

    /**
     * Load briefs for specific unit
     */
    async loadUnitBriefs(unitId) {
        const container = document.querySelector(`[data-unit="${unitId}"]`);
        if (!container) return;

        try {
            const briefManager = window.researchBriefManager;
            if (!briefManager || !briefManager.initialized) {
                setTimeout(() => this.loadUnitBriefs(unitId), 500);
                return;
            }

            const briefs = briefManager.getBriefsForUnit(unitId);
            
            if (briefs.length === 0) {
                container.innerHTML = '<p class="no-briefs">No research briefs available for this unit.</p>';
                return;
            }

            container.innerHTML = '';
            briefs.slice(0, 3).forEach(brief => {
                const miniCard = this.createMiniBriefCard(brief);
                container.appendChild(miniCard);
            });

        } catch (error) {
            console.error('Error loading unit briefs:', error);
            container.innerHTML = '<p class="briefs-error">Unable to load related briefs.</p>';
        }
    }

    /**
     * Create mini brief card for unit widgets
     */
    createMiniBriefCard(brief) {
        const card = document.createElement('div');
        card.className = 'mini-brief-card';
        card.onclick = () => window.researchBriefManager.openBrief(brief.id);

        card.innerHTML = `
            <div class="mini-brief-type">${brief.type}</div>
            <h5 class="mini-brief-title">${brief.title}</h5>
            <p class="mini-brief-summary">${brief.summary?.substring(0, 100)}...</p>
        `;

        return card;
    }

    /**
     * Add search functionality
     */
    addBriefSearch() {
        // Search input is already added in addBriefsToMainPortal
        // Just need to bind events
    }

    /**
     * Bind all event listeners
     */
    bindEvents() {
        // Filter change events
        document.addEventListener('change', (e) => {
            if (e.target.id === 'type-filter') {
                this.currentFilters.type = e.target.value;
                this.loadBriefsIntoPortal();
            }
            if (e.target.id === 'level-filter') {
                this.currentFilters.level = e.target.value;
                this.loadBriefsIntoPortal();
            }
        });

        // Search input events
        document.addEventListener('input', (e) => {
            if (e.target.id === 'briefs-search') {
                this.currentFilters.search = e.target.value;
                // Debounce search
                clearTimeout(this.searchTimeout);
                this.searchTimeout = setTimeout(() => {
                    this.loadBriefsIntoPortal();
                }, 300);
            }
        });

        // Filter tab events
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-tab')) {
                // Update active tab
                document.querySelectorAll('.filter-tab').forEach(tab => 
                    tab.classList.remove('active')
                );
                e.target.classList.add('active');

                // Handle special filters
                const filter = e.target.dataset.filter;
                this.handleSpecialFilter(filter);
            }
        });

        // Listen for portal navigation changes
        window.addEventListener('portalNavigation', (e) => {
            this.currentUnit = e.detail.unit;
            this.currentCourse = e.detail.course;
            this.updateRecommendations();
        });
    }

    /**
     * Handle special filter types (new, recommended, bookmarked)
     */
    handleSpecialFilter(filter) {
        const briefManager = window.researchBriefManager;
        if (!briefManager) return;

        const grid = document.getElementById('research-briefs-grid');
        if (!grid) return;

        let briefs = [];

        switch (filter) {
            case 'new':
                briefs = briefManager.briefsIndex.briefs.filter(brief => brief.new);
                break;
            case 'recommended':
                briefs = briefManager.getRecommendations({
                    currentUnit: this.currentUnit,
                    currentCourse: this.currentCourse
                });
                break;
            case 'bookmarked':
                // Would need to implement bookmarking system
                briefs = this.getBookmarkedBriefs();
                break;
            default:
                briefs = this.getFilteredBriefs();
        }

        this.displayBriefs(briefs, grid);
    }

    /**
     * Get bookmarked briefs (placeholder)
     */
    getBookmarkedBriefs() {
        // Implement bookmarking system
        const bookmarks = JSON.parse(localStorage.getItem('cosmos_bookmarked_briefs') || '[]');
        const briefManager = window.researchBriefManager;
        
        return briefManager.briefsIndex.briefs.filter(brief => 
            bookmarks.includes(brief.id)
        );
    }

    /**
     * Update recommendations based on current context
     */
    updateRecommendations() {
        // This would be called when user navigates to different units/courses
        const activeTab = document.querySelector('.filter-tab.active');
        if (activeTab && activeTab.dataset.filter === 'recommended') {
            this.handleSpecialFilter('recommended');
        }
    }

    /**
     * Add brief to portal navigation
     */
    addBriefToNavigation() {
        const nav = document.querySelector('.header-nav') || document.querySelector('nav');
        if (!nav) return;

        const briefsLink = document.createElement('a');
        briefsLink.href = '#research-briefs-section';
        briefsLink.className = 'nav-item';
        briefsLink.textContent = 'Research Briefs';
        briefsLink.onclick = (e) => {
            e.preventDefault();
            document.getElementById('research-briefs-section')?.scrollIntoView({ 
                behavior: 'smooth' 
            });
        };

        nav.appendChild(briefsLink);
    }
}

// Initialize portal brief integration
const portalBriefIntegration = new PortalBriefIntegration();

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for other systems to initialize
    setTimeout(() => {
        portalBriefIntegration.init();
    }, 1000);
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortalBriefIntegration;
}
