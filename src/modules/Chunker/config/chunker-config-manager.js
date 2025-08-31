// ChunkerConfigManager - Real-time curriculum scheduling and teacher adjustments
// Manages three-tier configuration: base curriculum, class config, live adjustments

class ChunkerConfigManager {
    constructor() {
        this.storageKeys = {
            base: 'chunker_base_curriculum',
            class: 'chunker_class_config', 
            live: 'chunker_live_session'
        };
        
        this.baseConfig = this.loadBaseConfig();
        this.classConfig = this.loadClassConfig();
        this.liveSession = this.loadLiveSession();
        this.changes = new Map(); // Track all modifications for export
        
        this.bindEvents();
    }

    // ===== CONFIGURATION LOADING =====
    
    loadBaseConfig() {
        try {
            const stored = localStorage.getItem(this.storageKeys.base);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (error) {
            console.warn('Failed to load base curriculum config:', error);
        }
        
        return this.getDefaultBaseConfig();
    }

    loadClassConfig() {
        try {
            const stored = localStorage.getItem(this.storageKeys.class);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (error) {
            console.warn('Failed to load class config:', error);
        }
        
        return this.getDefaultClassConfig();
    }

    loadLiveSession() {
        try {
            const stored = sessionStorage.getItem(this.storageKeys.live);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (error) {
            console.warn('Failed to load live session:', error);
        }
        
        return this.getDefaultLiveSession();
    }

    // ===== DEFAULT CONFIGURATIONS =====

    getDefaultBaseConfig() {
        return {
            curriculumFile: "physics-honors-2025.json",
            version: "1.0.0",
            lastUpdated: new Date().toISOString()
        };
    }

    getDefaultClassConfig() {
        return {
            course: "physics",
            level: "honors",
            period: "",
            semester: "fall2025",
            teacher: "",
            startDate: "",
            endDate: "",
            schedule: {
                daysPerWeek: 5,
                periodLength: 50, // minutes
                chunkDuration: 15 // default chunk size
            }
        };
    }

    getDefaultLiveSession() {
        return {
            currentWeek: this.getCurrentWeek(),
            activeDate: this.getCurrentDate(),
            timeShifts: {},      // { "2025-08-22": { "chunk_id": { shift: +15 } } }
            contentOverrides: {}, // { "2025-08-22": { "chunk_id": { newContent: "..." } } }
            sessionStarted: new Date().toISOString()
        };
    }

    // ===== REAL-TIME ADJUSTMENTS =====

    adjustChunkTiming(chunkId, minuteShift) {
        const today = this.getCurrentDate();
        
        // Initialize date entry if needed
        if (!this.liveSession.timeShifts[today]) {
            this.liveSession.timeShifts[today] = {};
        }
        
        // Store the adjustment
        this.liveSession.timeShifts[today][chunkId] = { 
            shift: minuteShift,
            timestamp: new Date().toISOString()
        };
        
        // Track for export
        this.changes.set(`${today}-${chunkId}-time`, {
            type: 'timeShift',
            chunkId: chunkId,
            value: minuteShift,
            date: today,
            timestamp: Date.now()
        });
        
        this.saveLiveSession();
        this.notifyChange('chunk-adjusted', { chunkId, minuteShift });
        
        console.log(`Adjusted ${chunkId} by ${minuteShift} minutes`);
    }

    editChunkContent(chunkId, newContent, duration = null) {
        const today = this.getCurrentDate();
        
        // Initialize date entry if needed
        if (!this.liveSession.contentOverrides[today]) {
            this.liveSession.contentOverrides[today] = {};
        }
        
        // Store the content change
        const override = {
            newContent: newContent,
            timestamp: new Date().toISOString()
        };
        
        if (duration !== null) {
            override.duration = duration;
        }
        
        this.liveSession.contentOverrides[today][chunkId] = override;
        
        // Track for export
        this.changes.set(`${today}-${chunkId}-content`, {
            type: 'contentOverride',
            chunkId: chunkId,
            newContent: newContent,
            duration: duration,
            date: today,
            timestamp: Date.now()
        });
        
        this.saveLiveSession();
        this.notifyChange('chunk-content-changed', { chunkId, newContent });
        
        console.log(`Updated content for ${chunkId}:`, newContent);
    }

    // ===== CLASS CONFIGURATION =====

    updateClassConfig(updates) {
        this.classConfig = { ...this.classConfig, ...updates };
        this.saveClassConfig();
        this.notifyChange('class-config-updated', updates);
    }

    setActiveClass(course, level, period, teacher = '') {
        this.updateClassConfig({
            course: course,
            level: level, 
            period: period,
            teacher: teacher
        });
        
        // Generate class-specific filename
        const classId = `${course}-${level}-period${period}-${this.classConfig.semester}`;
        this.classConfig.classId = classId;
        
        this.saveClassConfig();
        console.log(`Active class set to: ${classId}`);
    }

    // ===== EXPORT FUNCTIONALITY =====

    exportUpdatedCurriculum(format = 'detailed') {
        const exportData = {
            metadata: {
                exportedOn: new Date().toISOString(),
                classId: this.classConfig.classId,
                classPeriod: this.classConfig,
                exportFormat: format,
                weeksCovered: this.getWeeksCovered()
            },
            baseCurriculum: this.baseConfig,
            appliedAdjustments: this.getAdjustmentsSummary(),
            weeklyStats: this.calculateWeeklyStats()
        };
        
        if (format === 'detailed') {
            exportData.rawChanges = Object.fromEntries(this.changes);
            exportData.dailyBreakdown = this.getDailyBreakdown();
        }
        
        return JSON.stringify(exportData, null, 2);
    }

    exportForNextYear() {
        // Clean export for planning next year
        const planningData = {
            metadata: {
                generatedFrom: this.classConfig.classId,
                originalSemester: this.classConfig.semester,
                exportedOn: new Date().toISOString(),
                purpose: 'next-year-planning'
            },
            schedule: this.classConfig.schedule,
            commonAdjustments: this.getCommonAdjustments(),
            recommendedTimeBuffers: this.getRecommendedBuffers(),
            contentNotes: this.getContentNotes()
        };
        
        return JSON.stringify(planningData, null, 2);
    }

    // ===== ANALYSIS HELPERS =====

    getAdjustmentsSummary() {
        const summary = {
            totalAdjustments: this.changes.size,
            timeShifts: 0,
            contentChanges: 0,
            datesModified: new Set()
        };
        
        for (const [key, change] of this.changes) {
            if (change.type === 'timeShift') summary.timeShifts++;
            if (change.type === 'contentOverride') summary.contentChanges++;
            summary.datesModified.add(change.date);
        }
        
        summary.datesModified = Array.from(summary.datesModified);
        return summary;
    }

    calculateWeeklyStats() {
        const weeks = {};
        
        for (const [key, change] of this.changes) {
            const week = this.getWeekFromDate(change.date);
            if (!weeks[week]) {
                weeks[week] = { adjustments: 0, timeShifts: 0, contentChanges: 0 };
            }
            
            weeks[week].adjustments++;
            if (change.type === 'timeShift') weeks[week].timeShifts++;
            if (change.type === 'contentOverride') weeks[week].contentChanges++;
        }
        
        return weeks;
    }

    getCommonAdjustments() {
        const adjustments = {};
        
        for (const [key, change] of this.changes) {
            if (change.type === 'timeShift') {
                const chunkId = change.chunkId;
                if (!adjustments[chunkId]) {
                    adjustments[chunkId] = [];
                }
                adjustments[chunkId].push(change.value);
            }
        }
        
        // Calculate averages for frequently adjusted chunks
        const common = {};
        for (const [chunkId, shifts] of Object.entries(adjustments)) {
            if (shifts.length >= 2) { // Adjusted multiple times
                const avg = shifts.reduce((a, b) => a + b, 0) / shifts.length;
                common[chunkId] = {
                    averageAdjustment: Math.round(avg),
                    frequency: shifts.length,
                    range: [Math.min(...shifts), Math.max(...shifts)]
                };
            }
        }
        
        return common;
    }

    getRecommendedBuffers() {
        // Analyze which types of content need more time
        const buffers = {
            labs: 5,      // Default 5min buffer for labs
            assessments: 10, // 10min buffer for tests/quizzes
            discussions: 5,  // 5min buffer for discussions
            lectures: 0      // No buffer for straight lectures
        };
        
        // This could be enhanced to learn from actual adjustments
        return buffers;
    }

    // ===== PERSISTENCE =====

    saveLiveSession() {
        try {
            sessionStorage.setItem(this.storageKeys.live, JSON.stringify(this.liveSession));
        } catch (error) {
            console.error('Failed to save live session:', error);
        }
    }

    saveClassConfig() {
        try {
            localStorage.setItem(this.storageKeys.class, JSON.stringify(this.classConfig));
        } catch (error) {
            console.error('Failed to save class config:', error);
        }
    }

    saveBaseConfig() {
        try {
            localStorage.setItem(this.storageKeys.base, JSON.stringify(this.baseConfig));
        } catch (error) {
            console.error('Failed to save base config:', error);
        }
    }

    // ===== UTILITIES =====

    getCurrentDate() {
        return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    }

    getCurrentWeek() {
        const date = new Date();
        const startOfYear = new Date(date.getFullYear(), 0, 1);
        const weekNumber = Math.ceil(((date - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);
        return `${date.getFullYear()}-W${weekNumber.toString().padStart(2, '0')}`;
    }

    getWeekFromDate(dateString) {
        const date = new Date(dateString);
        const startOfYear = new Date(date.getFullYear(), 0, 1);
        const weekNumber = Math.ceil(((date - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);
        return `${date.getFullYear()}-W${weekNumber.toString().padStart(2, '0')}`;
    }

    getWeeksCovered() {
        const weeks = new Set();
        for (const [key, change] of this.changes) {
            weeks.add(this.getWeekFromDate(change.date));
        }
        return Array.from(weeks).sort();
    }

    getDailyBreakdown() {
        const daily = {};
        
        for (const [key, change] of this.changes) {
            const date = change.date;
            if (!daily[date]) {
                daily[date] = { timeShifts: [], contentChanges: [] };
            }
            
            if (change.type === 'timeShift') {
                daily[date].timeShifts.push({
                    chunkId: change.chunkId,
                    shift: change.value
                });
            } else if (change.type === 'contentOverride') {
                daily[date].contentChanges.push({
                    chunkId: change.chunkId,
                    newContent: change.newContent
                });
            }
        }
        
        return daily;
    }

    getContentNotes() {
        const notes = [];
        
        for (const [key, change] of this.changes) {
            if (change.type === 'contentOverride') {
                notes.push({
                    date: change.date,
                    chunkId: change.chunkId,
                    note: `Content changed to: ${change.newContent}`
                });
            }
        }
        
        return notes;
    }

    // ===== EVENT SYSTEM =====

    bindEvents() {
        // Listen for CosmosConfig changes that might affect Chunker
        document.addEventListener('cosmos-settings-changed', (e) => {
            if (e.detail.path.startsWith('chunker.')) {
                this.handleCosmosConfigChange(e.detail.path, e.detail.value);
            }
        });
    }

    handleCosmosConfigChange(path, value) {
        console.log('Chunker responding to config change:', path, value);
        // Handle changes from the global config system
    }

    notifyChange(eventType, data) {
        document.dispatchEvent(new CustomEvent('chunker-config-changed', {
            detail: { type: eventType, data: data, timestamp: Date.now() }
        }));
    }

    // ===== PUBLIC API =====

    // Get current chunk data for Ratatoskr
    getRatatoskrData() {
        // This will eventually connect to actual curriculum data
        // For now, return structure that Ratatoskr expects
        return {
            currentChunk: this.getCurrentChunk(),
            completedChunks: this.getCompletedChunks(),
            upcomingChunks: this.getUpcomingChunks(),
            dailyProgress: this.calculateDailyProgress(),
            adjustments: this.getTodayAdjustments()
        };
    }

    getCurrentChunk() {
        // Placeholder - will integrate with actual curriculum
        return {
            id: "chunk_current",
            title: "Current Learning Chunk",
            time: "9:15-9:30",
            status: "current"
        };
    }

    getCompletedChunks() {
        return []; // Placeholder
    }

    getUpcomingChunks() {
        return []; // Placeholder  
    }

    calculateDailyProgress() {
        // Placeholder progress calculation
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const totalMinutes = (hours * 60) + minutes;
        
        // School day 8:00 AM to 3:00 PM
        const schoolStart = 8 * 60;
        const schoolEnd = 15 * 60;
        
        if (totalMinutes < schoolStart) return 0;
        if (totalMinutes > schoolEnd) return 100;
        
        return Math.round(((totalMinutes - schoolStart) / (schoolEnd - schoolStart)) * 100);
    }

    getTodayAdjustments() {
        const today = this.getCurrentDate();
        return {
            timeShifts: this.liveSession.timeShifts[today] || {},
            contentOverrides: this.liveSession.contentOverrides[today] || {}
        };
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (window.CosmosConfig) {
        window.ChunkerConfigManager = new ChunkerConfigManager();
        console.log('ChunkerConfigManager initialized');
    }
});
