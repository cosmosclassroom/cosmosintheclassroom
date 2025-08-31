/**
 * Week-Centric Chunker Engine v2.0
 * 
 * Optimized for teacher week-based planning and AI curriculum extraction.
 * Focuses on natural weekly progression with easy +/- week navigation.
 */

class WeekCentricChunkerEngine {
    constructor(configPath = 'week-centric-v2.json') {
        this.config = null;
        this.currentWeek = null;
        this.loadConfig(configPath);
    }

    /**
     * Load week-centric configuration
     */
    async loadConfig(configPath) {
        try {
            const response = await fetch(configPath);
            this.config = await response.json();
            this.currentWeek = this.getCurrentWeekNumber();
            console.log(`✅ Loaded week-centric config for ${this.config.course.title}`);
            console.log(`📅 Current week: ${this.currentWeek}`);
        } catch (error) {
            console.error('❌ Failed to load configuration:', error);
            throw new Error(`Configuration loading failed: ${error.message}`);
        }
    }

    /**
     * Get current week number based on today's date
     */
    getCurrentWeekNumber() {
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];
        
        // Find which week contains today
        for (const [weekNum, weekData] of Object.entries(this.config.weeks)) {
            if (todayStr >= weekData.startDate && todayStr <= weekData.endDate) {
                return parseInt(weekNum);
            }
        }
        
        // If not found, calculate based on current curriculum week
        return this.config.curriculum.currentWeek;
    }

    /**
     * Get week data with easy navigation
     */
    getWeek(weekOffset = 0) {
        const targetWeek = this.currentWeek + weekOffset;
        const weekData = this.config.weeks[targetWeek];
        
        if (!weekData) {
            return this.generateProjectedWeek(targetWeek);
        }
        
        return {
            weekNumber: targetWeek,
            ...weekData,
            navigation: {
                previous: this.config.weeks[targetWeek - 1] ? targetWeek - 1 : null,
                next: this.config.weeks[targetWeek + 1] ? targetWeek + 1 : null,
                isLastWeek: weekOffset === -1,
                isThisWeek: weekOffset === 0,
                isNextWeek: weekOffset === 1
            }
        };
    }

    /**
     * Get last week's data for summary display
     */
    getLastWeek() {
        return this.getWeek(-1);
    }

    /**
     * Get this week's data (current focus)
     */
    getThisWeek() {
        return this.getWeek(0);
    }

    /**
     * Get next week's data for planning
     */
    getNextWeek() {
        return this.getWeek(1);
    }

    /**
     * Get multi-week range for calendar view
     */
    getWeekRange(startOffset = -2, endOffset = 3) {
        const weeks = [];
        for (let offset = startOffset; offset <= endOffset; offset++) {
            weeks.push(this.getWeek(offset));
        }
        return weeks;
    }

    /**
     * Get today's chunk details
     */
    getTodayChunks() {
        const today = new Date().toISOString().split('T')[0];
        const thisWeek = this.getThisWeek();
        
        if (!thisWeek.days || !thisWeek.days[today]) {
            return {
                date: today,
                dayOfWeek: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
                rotationDay: this.getCurrentRotationDay(),
                chunks: [],
                periods: [],
                message: "No classes scheduled today"
            };
        }
        
        const dayData = thisWeek.days[today];
        return {
            date: today,
            ...dayData,
            chunks: dayData.chunks.map(chunk => ({
                ...chunk,
                isComplete: chunk.status === 'completed',
                isCurrent: chunk.status === 'current',
                isPending: chunk.status === 'planned'
            }))
        };
    }

    /**
     * Get current rotation day
     */
    getCurrentRotationDay() {
        const today = new Date().toISOString().split('T')[0];
        const thisWeek = this.getThisWeek();
        
        if (thisWeek.days && thisWeek.days[today]) {
            return thisWeek.days[today].rotationDay;
        }
        
        // Calculate rotation day if not explicitly stored
        return this.calculateRotationDay(new Date());
    }

    /**
     * Calculate rotation day for any date
     */
    calculateRotationDay(date) {
        const rotationDays = this.config.schedule.rotationDays;
        const startDate = new Date('2025-08-26'); // School year start
        const daysSinceStart = Math.floor((date - startDate) / (1000 * 60 * 60 * 24));
        
        // Skip weekends and adjust for actual school days
        const schoolDaysSinceStart = this.getSchoolDaysSince(startDate, date);
        const rotationIndex = schoolDaysSinceStart % rotationDays.length;
        
        return rotationDays[rotationIndex];
    }

    /**
     * Get school days between dates (excluding weekends)
     */
    getSchoolDaysSince(startDate, endDate) {
        let count = 0;
        const current = new Date(startDate);
        
        while (current <= endDate) {
            const dayOfWeek = current.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not weekend
                count++;
            }
            current.setDate(current.getDate() + 1);
        }
        
        return count;
    }

    /**
     * Get unit progress across all weeks
     */
    getUnitProgress() {
        const units = this.config.curriculum.units;
        return Object.entries(units).map(([unitNum, unitData]) => ({
            number: parseInt(unitNum),
            ...unitData,
            progressPercent: Math.round((unitData.completedChunks / unitData.totalChunks) * 100),
            weeksSpanned: this.getWeeksForUnit(parseInt(unitNum))
        }));
    }

    /**
     * Get weeks that belong to a specific unit
     */
    getWeeksForUnit(unitNumber) {
        return Object.entries(this.config.weeks)
            .filter(([weekNum, weekData]) => weekData.unit === unitNumber)
            .map(([weekNum, weekData]) => ({
                weekNumber: parseInt(weekNum),
                startDate: weekData.startDate,
                endDate: weekData.endDate,
                theme: weekData.theme,
                status: weekData.status
            }));
    }

    /**
     * Get quarter overview with all weeks
     */
    getQuarterOverview() {
        const allWeeks = Object.entries(this.config.weeks)
            .map(([weekNum, weekData]) => ({
                weekNumber: parseInt(weekNum),
                ...weekData
            }))
            .sort((a, b) => a.weekNumber - b.weekNumber);
        
        return {
            totalWeeks: allWeeks.length,
            completedWeeks: allWeeks.filter(w => w.status === 'completed').length,
            currentWeek: this.currentWeek,
            weeks: allWeeks,
            totalChunks: allWeeks.reduce((sum, w) => sum + w.totalChunks, 0),
            completedChunks: allWeeks.reduce((sum, w) => sum + w.completedChunks, 0)
        };
    }

    /**
     * Update chunk status (for real-time progress tracking)
     */
    updateChunkStatus(chunkId, newStatus) {
        const today = new Date().toISOString().split('T')[0];
        const thisWeek = this.getThisWeek();
        
        if (thisWeek.days && thisWeek.days[today]) {
            const chunk = thisWeek.days[today].chunks.find(c => c.id === chunkId);
            if (chunk) {
                chunk.status = newStatus;
                
                // Update week completed chunks count
                this.recalculateWeekProgress(this.currentWeek);
                
                console.log(`✅ Updated chunk ${chunkId} to ${newStatus}`);
                return true;
            }
        }
        
        console.warn(`❌ Chunk ${chunkId} not found for today`);
        return false;
    }

    /**
     * Recalculate week progress after chunk updates
     */
    recalculateWeekProgress(weekNumber) {
        const weekData = this.config.weeks[weekNumber];
        if (!weekData) return;
        
        let completedCount = 0;
        Object.values(weekData.days).forEach(day => {
            if (day.chunks) {
                completedCount += day.chunks.filter(c => c.status === 'completed').length;
            }
        });
        
        weekData.completedChunks = completedCount;
        
        // Update unit progress as well
        const unit = this.config.curriculum.units[weekData.unit];
        if (unit) {
            unit.completedChunks = this.calculateUnitCompletedChunks(weekData.unit);
        }
    }

    /**
     * Calculate total completed chunks for a unit
     */
    calculateUnitCompletedChunks(unitNumber) {
        return Object.values(this.config.weeks)
            .filter(week => week.unit === unitNumber)
            .reduce((sum, week) => sum + week.completedChunks, 0);
    }

    /**
     * Generate projected week data for future weeks
     */
    generateProjectedWeek(weekNumber) {
        return {
            weekNumber: weekNumber,
            startDate: this.calculateWeekStartDate(weekNumber),
            endDate: this.calculateWeekEndDate(weekNumber),
            unit: this.projectUnitForWeek(weekNumber),
            theme: "Projected Planning Week",
            status: "projected",
            totalChunks: 20, // Default estimate
            completedChunks: 0,
            days: {},
            navigation: {
                previous: weekNumber - 1,
                next: weekNumber + 1,
                isProjected: true
            }
        };
    }

    /**
     * Calculate start date for any week number
     */
    calculateWeekStartDate(weekNumber) {
        const baseWeek = Object.values(this.config.weeks)[0];
        const baseWeekNumber = Object.keys(this.config.weeks)[0];
        const baseStartDate = new Date(baseWeek.startDate);
        
        const weekDifference = weekNumber - parseInt(baseWeekNumber);
        const targetDate = new Date(baseStartDate);
        targetDate.setDate(targetDate.getDate() + (weekDifference * 7));
        
        return targetDate.toISOString().split('T')[0];
    }

    /**
     * Calculate end date for any week number
     */
    calculateWeekEndDate(weekNumber) {
        const startDate = new Date(this.calculateWeekStartDate(weekNumber));
        startDate.setDate(startDate.getDate() + 4); // Friday
        return startDate.toISOString().split('T')[0];
    }

    /**
     * Project which unit a future week belongs to
     */
    projectUnitForWeek(weekNumber) {
        const currentUnit = this.config.curriculum.currentUnit;
        const currentWeek = this.config.curriculum.currentWeek;
        
        // Simple projection - could be made more sophisticated
        if (weekNumber > currentWeek + 4) {
            return currentUnit + 1;
        }
        return currentUnit;
    }

    /**
     * Get analytics for dashboard display
     */
    getAnalytics() {
        return {
            ...this.config.analytics,
            weeklyTrend: this.calculateWeeklyTrend(),
            currentPace: this.calculateCurrentPace(),
            projectedCompletion: this.calculateProjectedCompletion()
        };
    }

    /**
     * Calculate weekly completion trend
     */
    calculateWeeklyTrend() {
        const recentWeeks = Object.entries(this.config.weeks)
            .filter(([weekNum, weekData]) => weekData.status === 'completed')
            .slice(-4) // Last 4 weeks
            .map(([weekNum, weekData]) => ({
                week: parseInt(weekNum),
                efficiency: weekData.completedChunks / weekData.totalChunks
            }));
        
        return recentWeeks;
    }

    /**
     * Calculate current learning pace
     */
    calculateCurrentPace() {
        const thisWeek = this.getThisWeek();
        const daysElapsed = this.getDaysElapsedThisWeek();
        const expectedChunks = (thisWeek.totalChunks / 5) * daysElapsed;
        
        return {
            expected: Math.round(expectedChunks),
            actual: thisWeek.completedChunks,
            paceRatio: thisWeek.completedChunks / expectedChunks
        };
    }

    /**
     * Get days elapsed in current week
     */
    getDaysElapsedThisWeek() {
        const today = new Date();
        const thisWeek = this.getThisWeek();
        const weekStart = new Date(thisWeek.startDate);
        
        const daysDiff = Math.floor((today - weekStart) / (1000 * 60 * 60 * 24));
        return Math.max(0, Math.min(daysDiff + 1, 5)); // 1-5 school days
    }

    /**
     * Calculate projected completion dates
     */
    calculateProjectedCompletion() {
        const currentUnit = this.config.curriculum.units[this.config.curriculum.currentUnit];
        const averageChunksPerWeek = this.config.analytics.averageChunksPerDay * 5;
        
        const remainingChunks = currentUnit.totalChunks - currentUnit.completedChunks;
        const weeksNeeded = Math.ceil(remainingChunks / averageChunksPerWeek);
        
        const projectedDate = new Date();
        projectedDate.setDate(projectedDate.getDate() + (weeksNeeded * 7));
        
        return {
            remainingChunks,
            weeksNeeded,
            projectedDate: projectedDate.toISOString().split('T')[0],
            bufferDays: this.config.analytics.projectedCompletionBuffer
        };
    }

    /**
     * Export data for AI re-extraction
     */
    exportForAIProcessing() {
        return {
            sourceFormat: "week-centric-v2",
            exportDate: new Date().toISOString(),
            course: this.config.course,
            currentStatus: {
                week: this.currentWeek,
                unit: this.config.curriculum.currentUnit,
                totalChunks: this.getQuarterOverview().totalChunks,
                completedChunks: this.getQuarterOverview().completedChunks
            },
            recentWeeks: this.getWeekRange(-2, 2),
            upcomingChunks: this.getUpcomingChunks(),
            needsUpdate: this.identifyOutdatedContent()
        };
    }

    /**
     * Get upcoming chunks for AI context
     */
    getUpcomingChunks() {
        const upcoming = [];
        const nextWeeks = this.getWeekRange(0, 2);
        
        nextWeeks.forEach(week => {
            if (week.days) {
                Object.values(week.days).forEach(day => {
                    if (day.chunks) {
                        day.chunks
                            .filter(chunk => chunk.status === 'planned')
                            .forEach(chunk => upcoming.push({
                                ...chunk,
                                weekNumber: week.weekNumber,
                                date: day.dayOfWeek
                            }));
                    }
                });
            }
        });
        
        return upcoming;
    }

    /**
     * Identify content that may need AI re-extraction
     */
    identifyOutdatedContent() {
        const lastExtraction = new Date(this.config.aiExtraction.lastRun);
        const daysSinceExtraction = (Date.now() - lastExtraction) / (1000 * 60 * 60 * 24);
        
        return {
            needsUpdate: daysSinceExtraction > 7,
            daysSinceLastUpdate: Math.floor(daysSinceExtraction),
            flaggedChunks: this.config.aiExtraction.extractionMetrics.flaggedForReview,
            nextScheduledRun: this.config.aiExtraction.nextScheduledRun
        };
    }
}

// Usage examples and integration points
const chunkerEngine = new WeekCentricChunkerEngine();

// For the UI components:
// const lastWeek = chunkerEngine.getLastWeek();
// const thisWeek = chunkerEngine.getThisWeek(); 
// const nextWeek = chunkerEngine.getNextWeek();
// const todayChunks = chunkerEngine.getTodayChunks();
// const calendarWeeks = chunkerEngine.getWeekRange(-3, 4);

export { WeekCentricChunkerEngine };
