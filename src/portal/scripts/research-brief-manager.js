/**
 * Research Brief Manager
 * Handles loading, displaying, and managing Socrates-generated research briefs
 */

class ResearchBriefManager {
    constructor() {
        this.briefsIndex = null;
        this.loadedBriefs = new Map();
        this.searchIndex = new Map();
        this.initialized = false;
    }

    /**
     * Initialize the research brief system
     */
    async init() {
        try {
            await this.loadBriefsIndex();
            this.buildSearchIndex();
            this.initialized = true;
            console.log('Research Brief Manager initialized successfully');
        } catch (error) {
            console.error('Failed to initialize Research Brief Manager:', error);
        }
    }

    /**
     * Load the research briefs index
     */
    async loadBriefsIndex() {
        try {
            const response = await fetch('/data/research-briefs-index.json');
            if (!response.ok) {
                throw new Error(`Failed to load briefs index: ${response.status}`);
            }
            this.briefsIndex = await response.json();
        } catch (error) {
            console.error('Error loading research briefs index:', error);
            // Fallback to empty index
            this.briefsIndex = {
                version: "1.0.0",
                briefs: [],
                concept_map: {},
                unit_connections: {},
                search_terms: {}
            };
        }
    }

    /**
     * Build internal search index for fast lookups
     */
    buildSearchIndex() {
        this.searchIndex.clear();
        
        if (!this.briefsIndex || !this.briefsIndex.briefs) return;

        this.briefsIndex.briefs.forEach(brief => {
            // Index by concepts
            brief.related_concepts?.forEach(concept => {
                if (!this.searchIndex.has(concept)) {
                    this.searchIndex.set(concept, []);
                }
                this.searchIndex.get(concept).push(brief.id);
            });

            // Index by tags
            brief.tags?.forEach(tag => {
                if (!this.searchIndex.has(tag)) {
                    this.searchIndex.set(tag, []);
                }
                this.searchIndex.get(tag).push(brief.id);
            });

            // Index by units
            brief.related_units?.forEach(unit => {
                if (!this.searchIndex.has(unit)) {
                    this.searchIndex.set(unit, []);
                }
                this.searchIndex.get(unit).push(brief.id);
            });
        });
    }

    /**
     * Load a specific research brief
     */
    async loadBrief(briefId) {
        if (this.loadedBriefs.has(briefId)) {
            return this.loadedBriefs.get(briefId);
        }

        const briefMeta = this.briefsIndex.briefs.find(b => b.id === briefId);
        if (!briefMeta) {
            throw new Error(`Brief not found: ${briefId}`);
        }

        try {
            const response = await fetch(briefMeta.file_path);
            if (!response.ok) {
                throw new Error(`Failed to load brief: ${response.status}`);
            }
            const brief = await response.json();
            this.loadedBriefs.set(briefId, brief);
            return brief;
        } catch (error) {
            console.error(`Error loading brief ${briefId}:`, error);
            throw error;
        }
    }

    /**
     * Get briefs related to specific units
     */
    getBriefsForUnit(unitId) {
        if (!this.briefsIndex) return [];
        return this.briefsIndex.briefs.filter(brief => 
            brief.related_units?.includes(unitId)
        );
    }

    /**
     * Get briefs related to specific concepts
     */
    getBriefsForConcepts(concepts) {
        if (!this.briefsIndex) return [];
        const conceptArray = Array.isArray(concepts) ? concepts : [concepts];
        
        return this.briefsIndex.briefs.filter(brief =>
            brief.related_concepts?.some(concept => 
                conceptArray.includes(concept)
            )
        );
    }

    /**
     * Search briefs by query string
     */
    searchBriefs(query, filters = {}) {
        if (!this.briefsIndex) return [];

        const queryLower = query.toLowerCase();
        let results = [];

        // Search in titles and summaries
        results = this.briefsIndex.briefs.filter(brief => {
            const titleMatch = brief.title.toLowerCase().includes(queryLower);
            const summaryMatch = brief.summary?.toLowerCase().includes(queryLower);
            return titleMatch || summaryMatch;
        });

        // Search in indexed terms
        for (const [term, briefIds] of this.searchIndex.entries()) {
            if (term.toLowerCase().includes(queryLower)) {
                const additionalBriefs = this.briefsIndex.briefs.filter(brief =>
                    briefIds.includes(brief.id) && !results.some(r => r.id === brief.id)
                );
                results.push(...additionalBriefs);
            }
        }

        // Apply filters
        if (filters.type) {
            results = results.filter(brief => brief.type === filters.type);
        }
        if (filters.depth_level) {
            results = results.filter(brief => brief.depth_level === filters.depth_level);
        }
        if (filters.tags) {
            const filterTags = Array.isArray(filters.tags) ? filters.tags : [filters.tags];
            results = results.filter(brief =>
                brief.tags?.some(tag => filterTags.includes(tag))
            );
        }

        return results;
    }

    /**
     * Get recommended briefs based on current context
     */
    getRecommendations(context = {}) {
        if (!this.briefsIndex) return [];

        const { currentUnit, recentConcepts, userLevel = 'standard' } = context;
        let candidates = [];

        // Start with unit-related briefs
        if (currentUnit) {
            candidates.push(...this.getBriefsForUnit(currentUnit));
        }

        // Add concept-related briefs
        if (recentConcepts && recentConcepts.length > 0) {
            candidates.push(...this.getBriefsForConcepts(recentConcepts));
        }

        // Filter by user level
        candidates = candidates.filter(brief => 
            brief.depth_level === userLevel || brief.depth_level === 'exploratory'
        );

        // Remove duplicates and limit results
        const uniqueCandidates = candidates.filter((brief, index, self) =>
            index === self.findIndex(b => b.id === brief.id)
        );

        // Sort by relevance (new briefs first, then by related concepts)
        return uniqueCandidates
            .sort((a, b) => {
                if (a.new && !b.new) return -1;
                if (!a.new && b.new) return 1;
                return 0;
            })
            .slice(0, 5);
    }

    /**
     * Render a brief preview card
     */
    renderBriefCard(brief, options = {}) {
        const { showFullContent = false, className = '' } = options;

        const card = document.createElement('div');
        card.className = `research-brief-card ${className}`;
        card.setAttribute('data-brief-id', brief.id);

        const typeColor = this.getTypeColor(brief.type);
        const levelBadge = this.getLevelBadge(brief.depth_level);

        card.innerHTML = `
            <div class="brief-header">
                <span class="brief-type" style="background-color: ${typeColor}">${brief.type}</span>
                ${brief.new ? '<span class="brief-new-badge">New</span>' : ''}
                ${levelBadge}
            </div>
            <h3 class="brief-title">${brief.title}</h3>
            <p class="brief-summary">${brief.summary}</p>
            <div class="brief-metadata">
                <div class="brief-concepts">
                    ${brief.related_concepts?.slice(0, 3).map(concept => 
                        `<span class="concept-tag">${concept.replace(/_/g, ' ')}</span>`
                    ).join('') || ''}
                </div>
                <div class="brief-actions">
                    <button class="btn-read-brief" onclick="researchBriefManager.openBrief('${brief.id}')">
                        Read Brief
                    </button>
                </div>
            </div>
        `;

        return card;
    }

    /**
     * Open a brief in modal or dedicated view
     */
    async openBrief(briefId) {
        try {
            const brief = await this.loadBrief(briefId);
            this.displayBriefModal(brief);
            this.trackBriefView(briefId);
        } catch (error) {
            console.error('Error opening brief:', error);
            this.showError('Failed to load research brief');
        }
    }

    /**
     * Display brief in modal overlay
     */
    displayBriefModal(brief) {
        // Remove existing modal if present
        const existingModal = document.getElementById('brief-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.id = 'brief-modal';
        modal.className = 'brief-modal-overlay';

        modal.innerHTML = `
            <div class="brief-modal-content">
                <div class="brief-modal-header">
                    <h2>${brief.title}</h2>
                    <button class="brief-modal-close" onclick="researchBriefManager.closeBriefModal()">×</button>
                </div>
                <div class="brief-modal-body">
                    ${this.renderBriefContent(brief)}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        // Add click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeBriefModal();
            }
        });

        // Add escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeBriefModal();
            }
        });
    }

    /**
     * Close the brief modal
     */
    closeBriefModal() {
        const modal = document.getElementById('brief-modal');
        if (modal) {
            modal.remove();
        }
    }

    /**
     * Render full brief content
     */
    renderBriefContent(brief) {
        const socraticQuestions = this.renderSocraticQuestions(brief.socratic_prompts);
        
        return `
            <div class="brief-content">
                <div class="brief-summary-section">
                    <h3>Overview</h3>
                    <p>${brief.content.summary}</p>
                </div>

                <div class="brief-questions-section">
                    <h3>Key Questions</h3>
                    <ul>
                        ${brief.content.key_questions?.map(q => `<li>${q}</li>`).join('') || ''}
                    </ul>
                </div>

                <div class="brief-historical-section">
                    <h3>Historical Context</h3>
                    <p>${brief.content.historical_context}</p>
                </div>

                <div class="brief-mathematical-section">
                    <h3>Mathematical Framework</h3>
                    <p>${brief.content.mathematical_framework}</p>
                </div>

                <div class="brief-applications-section">
                    <h3>Real-World Applications</h3>
                    <ul>
                        ${brief.content.real_world_applications?.map(app => `<li>${app}</li>`).join('') || ''}
                    </ul>
                </div>

                ${socraticQuestions}

                <div class="brief-further-section">
                    <h3>Further Investigation</h3>
                    <p>${brief.content.further_investigation}</p>
                </div>

                <div class="brief-connections-section">
                    <h3>Related Content</h3>
                    <div class="related-links">
                        ${this.renderRelatedLinks(brief)}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render interactive Socratic questions
     */
    renderSocraticQuestions(prompts) {
        if (!prompts || prompts.length === 0) return '';

        return `
            <div class="socratic-questions-section">
                <h3>Socratic Exploration</h3>
                <p>Click on each level to explore deeper questions:</p>
                ${prompts.map((prompt, index) => `
                    <div class="socratic-level">
                        <button class="socratic-toggle" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">
                            ${prompt.level.charAt(0).toUpperCase() + prompt.level.slice(1)} Questions
                        </button>
                        <div class="socratic-questions" style="display: none;">
                            <ul>
                                ${prompt.questions?.map(q => `<li>${q}</li>`).join('') || ''}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Render related links and connections
     */
    renderRelatedLinks(brief) {
        const links = [];

        // Add unit links
        if (brief.related_units) {
            brief.related_units.forEach(unit => {
                links.push(`<a href="/physics/honors/units/${unit}/" class="related-link unit-link">Unit ${unit.replace(/^\d+_/, '').replace(/_/g, ' ')}</a>`);
            });
        }

        // Add assessment links
        if (brief.assessment_connections) {
            brief.assessment_connections.forEach(assessment => {
                links.push(`<a href="/assessments/${assessment}" class="related-link assessment-link">${assessment.replace(/_/g, ' ')}</a>`);
            });
        }

        return links.join('');
    }

    /**
     * Get color for brief type
     */
    getTypeColor(type) {
        const colors = {
            'phenomena': '#e3f2fd',
            'historical': '#f3e5f5',
            'connections': '#e8f5e8',
            'applications': '#fff3e0',
            'mathematical-frameworks': '#fce4ec'
        };
        return colors[type] || '#f5f5f5';
    }

    /**
     * Get badge for difficulty level
     */
    getLevelBadge(level) {
        const badges = {
            'exploratory': '<span class="level-badge exploratory">Explore</span>',
            'standard': '<span class="level-badge standard">Standard</span>',
            'honors': '<span class="level-badge honors">Honors</span>',
            'advanced': '<span class="level-badge advanced">Advanced</span>'
        };
        return badges[level] || '';
    }

    /**
     * Track brief view for analytics
     */
    trackBriefView(briefId) {
        // Implementation for analytics tracking
        console.log(`Brief viewed: ${briefId}`);
        
        // Could integrate with existing analytics system
        if (window.dataLogger) {
            window.dataLogger.log('brief_viewed', { briefId, timestamp: Date.now() });
        }
    }

    /**
     * Show error message
     */
    showError(message) {
        // Simple error display - could be enhanced with toast notifications
        console.error(message);
        alert(message);
    }
}

// Initialize global instance
const researchBriefManager = new ResearchBriefManager();

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    researchBriefManager.init();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ResearchBriefManager;
}
