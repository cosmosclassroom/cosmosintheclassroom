// Textbook Chapter Management System
class TextbookChapterManager extends ContentManager {
    constructor(dataPath = 'textbook-chapters.json') {
        super(dataPath);
        this.userProgress = new Map();
        this.bookmarks = new Set();
        this.currentChapter = null;
        this.readingSession = null;
    }

    // Load chapter data with enhanced processing
    async loadChapters() {
        await this.loadData();
        this.processChapterSequence();
        this.loadUserProgress();
        return this.data;
    }

    // Process chapter sequence and prerequisites
    processChapterSequence() {
        this.data.forEach(chapter => {
            chapter.isAvailable = this.checkPrerequisites(chapter);
            chapter.nextChapter = this.getNextChapter(chapter);
            chapter.previousChapter = this.getPreviousChapter(chapter);
            chapter.estimatedPages = chapter.pageEnd - chapter.pageStart + 1;
            chapter.progressPercentage = this.getChapterProgress(chapter.id);
        });
    }

    // Check if chapter prerequisites are met
    checkPrerequisites(chapter) {
        if (!chapter.prerequisites || chapter.prerequisites.length === 0) {
            return true;
        }
        
        return chapter.prerequisites.every(prereqId => {
            const progress = this.userProgress.get(prereqId);
            return progress && progress.completed;
        });
    }

    // Get next chapter in sequence
    getNextChapter(chapter) {
        const currentIndex = this.data.findIndex(ch => ch.id === chapter.id);
        return currentIndex < this.data.length - 1 ? this.data[currentIndex + 1] : null;
    }

    // Get previous chapter in sequence
    getPreviousChapter(chapter) {
        const currentIndex = this.data.findIndex(ch => ch.id === chapter.id);
        return currentIndex > 0 ? this.data[currentIndex - 1] : null;
    }

    // Enhanced data processing for textbook chapters
    processData(config) {
        let processed = [...this.data];

        // Apply category filter
        if (config.filterSettings.visibleCategories) {
            processed = processed.filter(chapter => 
                config.filterSettings.visibleCategories.includes(chapter.category)
            );
        }

        // Apply difficulty filter
        if (config.filterSettings.difficultyLevels) {
            processed = processed.filter(chapter => 
                config.filterSettings.difficultyLevels.includes(chapter.difficulty)
            );
        }

        // Apply reading time filter
        if (config.filterSettings.readingTimeRange) {
            const { min, max } = config.filterSettings.readingTimeRange;
            processed = processed.filter(chapter => 
                chapter.estimatedReadingTime >= min && chapter.estimatedReadingTime <= max
            );
        }

        // Apply page range filter
        if (config.filterSettings.pageRange) {
            const { min, max } = config.filterSettings.pageRange;
            processed = processed.filter(chapter => 
                chapter.pageStart >= min && chapter.pageEnd <= max
            );
        }

        // Apply status filter
        if (config.filterSettings.statusFilter) {
            processed = processed.filter(chapter => 
                config.filterSettings.statusFilter.includes(chapter.status)
            );
        }

        // Apply search filter
        if (config.filterSettings.searchFilter) {
            const search = config.filterSettings.searchFilter.toLowerCase();
            processed = processed.filter(chapter =>
                chapter.title.toLowerCase().includes(search) ||
                chapter.subtitle.toLowerCase().includes(search) ||
                chapter.author.toLowerCase().includes(search) ||
                chapter.sections.some(section => section.toLowerCase().includes(search)) ||
                chapter.keyTerms.some(term => term.toLowerCase().includes(search)) ||
                chapter.tags.some(tag => tag.toLowerCase().includes(search))
            );
        }

        // Show only available chapters if enabled
        if (config.filterSettings.showOnlyAvailable) {
            processed = processed.filter(chapter => chapter.isAvailable);
        }

        // Hide completed chapters if enabled
        if (config.progressSettings.hideCompleted) {
            processed = processed.filter(chapter => {
                const progress = this.userProgress.get(chapter.id);
                return !progress || !progress.completed;
            });
        }

        // Apply sorting
        processed = this.sortChapters(processed, config.displaySettings.sortMethod);

        this.filteredData = processed;
        this.notifySubscribers('chaptersProcessed', this.filteredData);
        return this.filteredData;
    }

    // Enhanced sorting for textbook chapters
    sortChapters(chapters, method) {
        const sorted = [...chapters];
        
        switch (method) {
            case 'number':
                return sorted.sort((a, b) => a.number - b.number);
            case 'title':
                return sorted.sort((a, b) => a.title.localeCompare(b.title));
            case 'difficulty':
                const difficultyOrder = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 };
                return sorted.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
            case 'readingTime':
                return sorted.sort((a, b) => a.estimatedReadingTime - b.estimatedReadingTime);
            case 'pages':
                return sorted.sort((a, b) => a.estimatedPages - b.estimatedPages);
            case 'lastUpdated':
                return sorted.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
            case 'progress':
                return sorted.sort((a, b) => (b.progressPercentage || 0) - (a.progressPercentage || 0));
            case 'assessmentWeight':
                return sorted.sort((a, b) => b.assessmentWeight - a.assessmentWeight);
            default:
                return sorted.sort((a, b) => a.number - b.number);
        }
    }

    // User progress management
    loadUserProgress() {
        const saved = localStorage.getItem('textbook-progress');
        if (saved) {
            const progressData = JSON.parse(saved);
            this.userProgress = new Map(Object.entries(progressData));
        }
    }

    saveUserProgress() {
        const progressData = Object.fromEntries(this.userProgress);
        localStorage.setItem('textbook-progress', JSON.stringify(progressData));
    }

    // Update chapter progress
    updateChapterProgress(chapterId, progressData) {
        this.userProgress.set(chapterId, {
            ...this.userProgress.get(chapterId),
            ...progressData,
            lastAccessed: new Date().toISOString()
        });
        this.saveUserProgress();
        this.notifySubscribers('progressUpdated', { chapterId, progress: progressData });
    }

    // Get chapter progress
    getChapterProgress(chapterId) {
        const progress = this.userProgress.get(chapterId);
        return progress ? progress.percentage || 0 : 0;
    }

    // Start reading session
    startReadingSession(chapterId) {
        const chapter = this.data.find(ch => ch.id === chapterId);
        if (!chapter) return null;

        this.readingSession = {
            chapterId,
            startTime: Date.now(),
            startPage: chapter.pageStart,
            currentPage: chapter.pageStart,
            bookmarks: [],
            notes: []
        };

        this.currentChapter = chapterId;
        this.updateChapterProgress(chapterId, { inProgress: true });
        return this.readingSession;
    }

    // End reading session
    endReadingSession() {
        if (!this.readingSession) return null;

        const duration = Date.now() - this.readingSession.startTime;
        const chapter = this.data.find(ch => ch.id === this.readingSession.chapterId);
        const pagesRead = this.readingSession.currentPage - this.readingSession.startPage + 1;
        const progressPercentage = Math.min(100, (pagesRead / chapter.estimatedPages) * 100);

        this.updateChapterProgress(this.readingSession.chapterId, {
            duration: (this.userProgress.get(this.readingSession.chapterId)?.duration || 0) + duration,
            pagesRead: pagesRead,
            percentage: progressPercentage,
            completed: progressPercentage >= 100,
            lastPage: this.readingSession.currentPage
        });

        const session = this.readingSession;
        this.readingSession = null;
        this.currentChapter = null;
        return session;
    }

    // Bookmark management
    addBookmark(chapterId, page, note = '') {
        this.bookmarks.add({ chapterId, page, note, timestamp: Date.now() });
        this.saveBookmarks();
    }

    removeBookmark(chapterId, page) {
        this.bookmarks = new Set([...this.bookmarks].filter(b => 
            !(b.chapterId === chapterId && b.page === page)
        ));
        this.saveBookmarks();
    }

    saveBookmarks() {
        localStorage.setItem('textbook-bookmarks', JSON.stringify([...this.bookmarks]));
    }

    loadBookmarks() {
        const saved = localStorage.getItem('textbook-bookmarks');
        if (saved) {
            this.bookmarks = new Set(JSON.parse(saved));
        }
    }

    // Get enhanced statistics
    getTextbookStatistics() {
        const baseStats = this.getStatistics();
        const totalPages = this.data.reduce((sum, ch) => sum + ch.estimatedPages, 0);
        const totalReadingTime = this.data.reduce((sum, ch) => sum + ch.estimatedReadingTime, 0);
        const totalProblems = this.data.reduce((sum, ch) => sum + ch.problems, 0);
        const totalLabs = this.data.reduce((sum, ch) => sum + ch.labActivities.length, 0);
        
        const completedChapters = [...this.userProgress.values()].filter(p => p.completed).length;
        const inProgressChapters = [...this.userProgress.values()].filter(p => p.inProgress && !p.completed).length;
        const pagesRead = [...this.userProgress.values()].reduce((sum, p) => sum + (p.pagesRead || 0), 0);
        const totalReadingDuration = [...this.userProgress.values()].reduce((sum, p) => sum + (p.duration || 0), 0);

        return {
            ...baseStats,
            textbook: {
                totalChapters: this.data.length,
                totalPages,
                totalReadingTime,
                totalProblems,
                totalLabs,
                completedChapters,
                inProgressChapters,
                overallProgress: Math.round((completedChapters / this.data.length) * 100),
                pagesRead,
                pagesRemaining: totalPages - pagesRead,
                readingTimeSpent: Math.round(totalReadingDuration / 60000), // in minutes
                averageReadingSpeed: pagesRead > 0 ? Math.round((totalReadingDuration / 60000) / pagesRead) : 0,
                bookmarks: this.bookmarks.size
            }
        };
    }

    // Get chapter recommendations
    getRecommendations(currentChapterId = null) {
        const current = currentChapterId || this.currentChapter;
        if (!current) {
            // Recommend first available chapter
            return this.data.find(ch => ch.isAvailable && !this.userProgress.get(ch.id)?.completed);
        }

        const currentChapter = this.data.find(ch => ch.id === current);
        const progress = this.userProgress.get(current);

        // If current chapter is not completed, recommend continuing it
        if (progress && !progress.completed) {
            return currentChapter;
        }

        // Recommend next available chapter
        const nextChapter = currentChapter?.nextChapter;
        if (nextChapter && nextChapter.isAvailable) {
            return nextChapter;
        }

        // Recommend any incomplete available chapter
        return this.data.find(ch => 
            ch.isAvailable && 
            ch.id !== current && 
            !this.userProgress.get(ch.id)?.completed
        );
    }

    // Get study plan
    generateStudyPlan(targetDate, chaptersPerWeek = 2) {
        const incomplete = this.data.filter(ch => 
            ch.isAvailable && !this.userProgress.get(ch.id)?.completed
        );

        const weeksAvailable = Math.ceil((new Date(targetDate) - new Date()) / (7 * 24 * 60 * 60 * 1000));
        const adjustedChaptersPerWeek = Math.max(1, Math.ceil(incomplete.length / weeksAvailable));

        const plan = [];
        let currentWeek = 1;
        
        for (let i = 0; i < incomplete.length; i += adjustedChaptersPerWeek) {
            const weekChapters = incomplete.slice(i, i + adjustedChaptersPerWeek);
            const weekReadingTime = weekChapters.reduce((sum, ch) => sum + ch.estimatedReadingTime, 0);
            
            plan.push({
                week: currentWeek,
                chapters: weekChapters,
                totalReadingTime: weekReadingTime,
                totalPages: weekChapters.reduce((sum, ch) => sum + ch.estimatedPages, 0),
                totalProblems: weekChapters.reduce((sum, ch) => sum + ch.problems, 0)
            });
            
            currentWeek++;
        }

        return plan;
    }
}

// Enhanced UI Controller for Textbook Chapters
class TextbookUIController extends UIController {
    constructor(configManager, chapterManager) {
        super(configManager, chapterManager);
        this.chapterManager = chapterManager;
    }

    // Enhanced rendering for chapter cards
    renderContent(data) {
        if (!this.elements['content-grid'] || !data) return;

        const config = this.configManager.getConfig();
        const { cardSize, itemsPerRow, showDescriptions, showPrerequisites, showProgress } = config.displaySettings;

        // Update grid layout for larger cards
        const minCardWidth = cardSize === 'large' ? '400px' : cardSize === 'medium' ? '320px' : '250px';
        this.elements['content-grid'].style.gridTemplateColumns = `repeat(auto-fill, minmax(${minCardWidth}, 1fr))`;
        this.elements['content-grid'].style.gap = '1.5rem';

        // Generate chapter cards
        this.elements['content-grid'].innerHTML = data.map(chapter => this.renderChapterCard(chapter, config)).join('');
    }

    // Render individual chapter card
    renderChapterCard(chapter, config) {
        const progress = this.chapterManager.userProgress.get(chapter.id);
        const isBookmarked = [...this.chapterManager.bookmarks].some(b => b.chapterId === chapter.id);
        const isCurrentChapter = this.chapterManager.currentChapter === chapter.id;
        
        const difficultyColors = {
            'beginner': '#48bb78',
            'intermediate': '#ed8936', 
            'advanced': '#e53e3e'
        };

        const statusColors = {
            'published': '#48bb78',
            'draft': '#ed8936',
            'review': '#e53e3e'
        };

        return `
            <div class="chapter-card ${config.displaySettings.cardSize} ${!chapter.isAvailable ? 'unavailable' : ''} ${isCurrentChapter ? 'current' : ''}" 
                 onclick="window.textbookUI.selectChapter('${chapter.id}')" 
                 data-chapter-id="${chapter.id}">
                
                <div class="chapter-header">
                    <div class="chapter-number">
                        <span class="chapter-num">${chapter.number}</span>
                        ${isBookmarked ? '<span class="bookmark-icon">📖</span>' : ''}
                        ${isCurrentChapter ? '<span class="current-icon">👁️</span>' : ''}
                    </div>
                    <div class="chapter-meta">
                        <span class="difficulty-badge" style="background: ${difficultyColors[chapter.difficulty]}">${chapter.difficulty}</span>
                        <span class="status-badge" style="background: ${statusColors[chapter.status]}">${chapter.status}</span>
                    </div>
                </div>

                <div class="chapter-content">
                    <h3 class="chapter-title">${chapter.title}</h3>
                    <p class="chapter-subtitle">${chapter.subtitle}</p>
                    <p class="chapter-author">by ${chapter.author}</p>

                    ${config.displaySettings.showProgress && progress ? `
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress.percentage || 0}%"></div>
                            <span class="progress-text">${Math.round(progress.percentage || 0)}% complete</span>
                        </div>
                    ` : ''}

                    <div class="chapter-stats">
                        <span class="stat-item">📄 ${chapter.estimatedPages} pages</span>
                        <span class="stat-item">⏱️ ${chapter.estimatedReadingTime} min</span>
                        <span class="stat-item">📝 ${chapter.problems} problems</span>
                        <span class="stat-item">🧪 ${chapter.labActivities.length} labs</span>
                    </div>

                    ${config.displaySettings.showDescriptions ? `
                        <div class="chapter-sections">
                            <h4>Key Sections:</h4>
                            <ul>
                                ${chapter.sections.slice(0, 3).map(section => `<li>${section}</li>`).join('')}
                                ${chapter.sections.length > 3 ? `<li>+ ${chapter.sections.length - 3} more...</li>` : ''}
                            </ul>
                        </div>
                    ` : ''}

                    ${config.displaySettings.showPrerequisites && chapter.prerequisites.length > 0 ? `
                        <div class="prerequisites">
                            <h4>Prerequisites:</h4>
                            <div class="prereq-chips">
                                ${chapter.prerequisites.map(prereqId => {
                                    const prereqChapter = this.chapterManager.data.find(ch => ch.id === prereqId);
                                    const prereqProgress = this.chapterManager.userProgress.get(prereqId);
                                    const isCompleted = prereqProgress && prereqProgress.completed;
                                    return `<span class="prereq-chip ${isCompleted ? 'completed' : 'incomplete'}">${prereqChapter ? prereqChapter.number : prereqId}</span>`;
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}

                    <div class="chapter-keywords">
                        ${chapter.keyTerms.slice(0, 5).map(term => `<span class="keyword-tag">${term}</span>`).join('')}
                    </div>
                </div>

                <div class="chapter-actions">
                    <button class="action-btn primary" onclick="event.stopPropagation(); window.textbookUI.startReading('${chapter.id}')" ${!chapter.isAvailable ? 'disabled' : ''}>
                        ${progress && progress.inProgress ? 'Continue Reading' : 'Start Reading'}
                    </button>
                    <button class="action-btn secondary" onclick="event.stopPropagation(); window.textbookUI.toggleBookmark('${chapter.id}')">
                        ${isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
                    </button>
                </div>
            </div>
        `;
    }

    // Chapter-specific UI interactions
    selectChapter(chapterId) {
        const chapter = this.chapterManager.data.find(ch => ch.id === chapterId);
        if (!chapter) return;

        // Show chapter details modal or navigate to chapter
        this.showChapterDetails(chapter);
    }

    startReading(chapterId) {
        const chapter = this.chapterManager.data.find(ch => ch.id === chapterId);
        if (!chapter || !chapter.isAvailable) return;

        this.chapterManager.startReadingSession(chapterId);
        this.showNotification(`Started reading: ${chapter.title}`, 'info');
        this.refreshContent();
        
        // In a real app, this would navigate to the reading interface
        console.log('Starting reading session for chapter:', chapter);
    }

    toggleBookmark(chapterId) {
        const isBookmarked = [...this.chapterManager.bookmarks].some(b => b.chapterId === chapterId);
        
        if (isBookmarked) {
            this.chapterManager.removeBookmark(chapterId, 1); // Remove from first page
            this.showNotification('Bookmark removed', 'info');
        } else {
            this.chapterManager.addBookmark(chapterId, 1, 'Chapter bookmark');
            this.showNotification('Chapter bookmarked', 'success');
        }
        
        this.refreshContent();
    }

    showChapterDetails(chapter) {
        // Create and show a modal with detailed chapter information
        const modal = document.createElement('div');
        modal.className = 'chapter-modal';
        modal.innerHTML = `
            <div class="modal-backdrop" onclick="this.parentElement.remove()">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <div class="modal-header">
                        <h2>Chapter ${chapter.number}: ${chapter.title}</h2>
                        <button class="close-btn" onclick="this.closest('.chapter-modal').remove()">×</button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Subtitle:</strong> ${chapter.subtitle}</p>
                        <p><strong>Author:</strong> ${chapter.author}</p>
                        <p><strong>Pages:</strong> ${chapter.pageStart} - ${chapter.pageEnd} (${chapter.estimatedPages} pages)</p>
                        <p><strong>Reading Time:</strong> ${chapter.estimatedReadingTime} minutes</p>
                        <p><strong>Difficulty:</strong> ${chapter.difficulty}</p>
                        
                        <h3>Learning Objectives:</h3>
                        <ul>
                            ${chapter.learningObjectives.map(obj => `<li>${obj}</li>`).join('')}
                        </ul>
                        
                        <h3>Sections:</h3>
                        <ul>
                            ${chapter.sections.map(section => `<li>${section}</li>`).join('')}
                        </ul>
                        
                        <h3>Key Terms:</h3>
                        <div class="key-terms">
                            ${chapter.keyTerms.map(term => `<span class="term-tag">${term}</span>`).join('')}
                        </div>
                        
                        <h3>Lab Activities:</h3>
                        <ul>
                            ${chapter.labActivities.map(lab => `<li>${lab}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    // Update statistics for textbook view
    updateStatistics() {
        const stats = this.chapterManager.getTextbookStatistics();
        
        if (this.elements['total-items']) {
            this.elements['total-items'].textContent = stats.textbook.totalChapters;
        }
        
        if (this.elements['visible-items']) {
            this.elements['visible-items'].textContent = stats.visible;
        }
        
        // Add textbook-specific stats
        const additionalStats = document.getElementById('additional-stats');
        if (additionalStats) {
            additionalStats.innerHTML = `
                <div class="stat-item">
                    <div class="stat-value">${stats.textbook.completedChapters}</div>
                    <div class="stat-label">Completed</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${stats.textbook.overallProgress}%</div>
                    <div class="stat-label">Progress</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${stats.textbook.pagesRead}</div>
                    <div class="stat-label">Pages Read</div>
                </div>
            `;
        }
    }
}

// CSS styles for textbook interface
const textbookStyles = `
    .chapter-card {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        padding: 1.5rem;
        transition: all 0.3s ease;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .chapter-card.unavailable {
        opacity: 0.6;
        background: #f7fafc;
        cursor: not-allowed;
    }

    .chapter-card.current {
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .chapter-card:hover:not(.unavailable) {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        border-color: #667eea;
    }

    .chapter-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
    }

    .chapter-number {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .chapter-num {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 0.5rem 0.75rem;
        border-radius: 50%;
        font-weight: bold;
        font-size: 1.1rem;
        min-width: 40px;
        text-align: center;
    }

    .bookmark-icon, .current-icon {
        font-size: 1.2rem;
    }

    .chapter-meta {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        align-items: flex-end;
    }

    .difficulty-badge, .status-badge {
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .chapter-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: #2d3748;
        margin-bottom: 0.5rem;
        line-height: 1.3;
    }

    .chapter-subtitle {
        font-size: 1rem;
        color: #718096;
        margin-bottom: 0.5rem;
        font-style: italic;
    }

    .chapter-author {
        font-size: 0.9rem;
        color: #a0aec0;
        margin-bottom: 1rem;
    }

    .progress-bar {
        background: #e2e8f0;
        border-radius: 10px;
        height: 8px;
        margin: 0.75rem 0;
        position: relative;
        overflow: hidden;
    }

    .progress-fill {
        background: linear-gradient(135deg, #667eea, #764ba2);
        height: 100%;
        border-radius: 10px;
        transition: width 0.3s ease;
    }

    .progress-text {
        position: absolute;
        top: -1.5rem;
        right: 0;
        font-size: 0.75rem;
        color: #718096;
        font-weight: 600;
    }

    .chapter-stats {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin: 1rem 0;
    }

    .stat-item {
        background: #f7fafc;
        padding: 0.25rem 0.5rem;
        border-radius: 6px;
        font-size: 0.8rem;
        color: #4a5568;
        border: 1px solid #e2e8f0;
    }

    .chapter-sections {
        margin: 1rem 0;
    }

    .chapter-sections h4 {
        font-size: 0.9rem;
        color: #4a5568;
        margin-bottom: 0.5rem;
        font-weight: 600;
    }

    .chapter-sections ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .chapter-sections li {
        padding: 0.25rem 0;
        font-size: 0.85rem;
        color: #718096;
        border-left: 2px solid #e2e8f0;
        padding-left: 0.75rem;
        margin-bottom: 0.25rem;
    }

    .prerequisites {
        margin: 1rem 0;
    }

    .prerequisites h4 {
        font-size: 0.9rem;
        color: #4a5568;
        margin-bottom: 0.5rem;
        font-weight: 600;
    }

    .prereq-chips {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .prereq-chip {
        background: #e2e8f0;
        color: #4a5568;
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .prereq-chip.completed {
        background: #48bb78;
        color: white;
    }

    .prereq-chip.incomplete {
        background: #fed7d7;
        color: #c53030;
    }

    .chapter-keywords {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }

    .keyword-tag {
        background: #edf2f7;
        color: #4a5568;
        padding: 0.25rem 0.5rem;
        border-radius: 8px;
        font-size: 0.75rem;
        border: 1px solid #e2e8f0;
    }

    .chapter-actions {
        display: flex;
        gap: 0.75rem;
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid #e2e8f0;
    }

    .action-btn {
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        flex: 1;
    }

    .action-btn.primary {
        background: #667eea;
        color: white;
    }

    .action-btn.primary:hover:not(:disabled) {
        background: #5a67d8;
        transform: translateY(-2px);
    }

    .action-btn.secondary {
        background: #e2e8f0;
        color: #4a5568;
    }

    .action-btn.secondary:hover {
        background: #cbd5e0;
    }

    .action-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .chapter-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
    }

    .modal-backdrop {
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .modal-content {
        background: white;
        border-radius: 12px;
        max-width: 600px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
    }

    .modal-header h2 {
        margin: 0;
        color: #2d3748;
    }

    .close-btn {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #718096;
        padding: 0.5rem;
    }

    .modal-body {
        padding: 1.5rem;
    }

    .key-terms {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .term-tag {
        background: #667eea;
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 6px;
        font-size: 0.8rem;
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = textbookStyles;
document.head.appendChild(styleSheet);
