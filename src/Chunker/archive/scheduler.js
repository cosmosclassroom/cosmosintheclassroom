/**
 * Chunker Configuration Engine
 * 
 * Universal schedule calculation engine that works with any bell schedule
 * configuration. Handles rotation schedules, fixed schedules, block schedules, etc.
 */

class ChunkerEngine {
    constructor(configPath = 'bhs-schedule-config.json') {
        this.config = null;
        this.loadConfig(configPath);
    }

    /**
     * Load and validate configuration from JSON file
     */
    async loadConfig(configPath) {
        try {
            const response = await fetch(configPath);
            this.config = await response.json();
            this.validateConfig();
            console.log(`✅ Loaded config for ${this.config.school.name}`);
        } catch (error) {
            console.error('❌ Failed to load configuration:', error);
            throw new Error(`Configuration loading failed: ${error.message}`);
        }
    }

    /**
     * Validate configuration structure
     */
    validateConfig() {
        const required = ['school', 'schedule', 'chunker', 'calendar'];
        const missing = required.filter(key => !this.config[key]);
        
        if (missing.length > 0) {
            throw new Error(`Missing required config sections: ${missing.join(', ')}`);
        }

        // Validate schedule type
        const validTypes = ['rotation', 'fixed', 'block', 'alternating'];
        if (!validTypes.includes(this.config.schedule.type)) {
            throw new Error(`Invalid schedule type: ${this.config.schedule.type}`);
        }

        console.log(`✅ Configuration validated: ${this.config.schedule.name}`);
    }

    /**
     * Get current rotation day based on date and config
     */
    getCurrentRotationDay(date = new Date()) {
        if (this.config.schedule.type !== 'rotation') {
            return null; // Fixed schedules don't have rotation days
        }

        const startDate = new Date(this.config.school.startDate);
        const daysSinceStart = Math.floor((date - startDate) / (1000 * 60 * 60 * 24));
        
        // Skip non-instructional days
        const instructionalDays = this.getInstructionalDaysSince(startDate, date);
        
        const rotationDays = this.config.schedule.pattern.rotationDays;
        const dayIndex = instructionalDays % rotationDays.length;
        
        return rotationDays[dayIndex];
    }

    /**
     * Calculate instructional days between two dates
     */
    getInstructionalDaysSince(startDate, endDate) {
        let count = 0;
        const current = new Date(startDate);
        const nonInstructional = new Set(this.config.calendar.nonInstructionalDays);

        while (current <= endDate) {
            const dateStr = current.toISOString().split('T')[0];
            const isWeekend = current.getDay() === 0 || current.getDay() === 6;
            
            if (!isWeekend && !nonInstructional.has(dateStr)) {
                count++;
            }
            
            current.setDate(current.getDate() + 1);
        }

        return count;
    }

    /**
     * Get periods meeting on a given date
     */
    getMeetingPeriods(date = new Date()) {
        const scheduleType = this.getScheduleType(date);
        
        if (scheduleType.isSpecial) {
            return scheduleType.periods;
        }

        if (this.config.schedule.type === 'rotation') {
            const rotationDay = this.getCurrentRotationDay(date);
            const rule = this.config.schedule.rotationRules[rotationDay];
            
            return rule.meeting.map(periodId => 
                this.config.schedule.periods.find(p => p.id === periodId)
            );
        }

        // Fixed schedule - all periods meet
        return this.config.schedule.periods.filter(p => p.type === 'academic');
    }

    /**
     * Get dropped periods on a given date
     */
    getDroppedPeriods(date = new Date()) {
        if (this.config.schedule.type !== 'rotation') {
            return []; // Fixed schedules don't drop periods
        }

        const rotationDay = this.getCurrentRotationDay(date);
        const rule = this.config.schedule.rotationRules[rotationDay];
        
        return rule.dropped.map(periodId => 
            this.config.schedule.periods.find(p => p.id === periodId)
        );
    }

    /**
     * Determine if date has special schedule
     */
    getScheduleType(date = new Date()) {
        const dateStr = date.toISOString().split('T')[0];
        const specialEvent = this.config.calendar.scheduledEvents?.find(
            event => event.date === dateStr
        );

        if (specialEvent) {
            return {
                isSpecial: true,
                type: specialEvent.type,
                name: specialEvent.name,
                periods: this.config.calendar.specialSchedules[specialEvent.type].periods
            };
        }

        return {
            isSpecial: false,
            type: 'regular',
            periods: this.config.schedule.periods
        };
    }

    /**
     * Calculate available chunks for a period
     */
    calculateChunksForPeriod(period, includeAdmin = true) {
        const chunkSize = this.config.chunker.baseChunkSize;
        const adminTime = includeAdmin ? this.config.chunker.settings.defaultAdminTime : 0;
        const availableTime = period.duration - adminTime;
        
        const chunks = Math.floor(availableTime / chunkSize);
        const maxChunks = this.config.chunker.settings.maxChunksPerPeriod;
        
        return Math.min(chunks, maxChunks);
    }

    /**
     * Calculate total available chunks for a date
     */
    calculateDailyChunks(date = new Date(), includeAdmin = true) {
        const meetingPeriods = this.getMeetingPeriods(date);
        
        return meetingPeriods.reduce((total, period) => {
            return total + this.calculateChunksForPeriod(period, includeAdmin);
        }, 0);
    }

    /**
     * Project completion date for a given number of chunks
     */
    projectCompletionDate(totalChunks, startDate = new Date()) {
        let remainingChunks = totalChunks;
        const currentDate = new Date(startDate);
        
        while (remainingChunks > 0) {
            const dailyChunks = this.calculateDailyChunks(currentDate);
            remainingChunks -= dailyChunks;
            
            if (remainingChunks > 0) {
                currentDate.setDate(currentDate.getDate() + 1);
                
                // Skip weekends and non-instructional days
                while (this.isNonInstructionalDay(currentDate)) {
                    currentDate.setDate(currentDate.getDate() + 1);
                }
            }
        }
        
        return currentDate;
    }

    /**
     * Check if date is non-instructional
     */
    isNonInstructionalDay(date) {
        const dateStr = date.toISOString().split('T')[0];
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const isHoliday = this.config.calendar.nonInstructionalDays.includes(dateStr);
        
        return isWeekend || isHoliday;
    }

    /**
     * Calculate optimal chunk distribution across periods
     */
    distributeChunks(chunks, date = new Date()) {
        const meetingPeriods = this.getMeetingPeriods(date);
        const distribution = [];
        
        let remainingChunks = chunks.length;
        
        for (const period of meetingPeriods) {
            const maxChunks = this.calculateChunksForPeriod(period);
            const assignedChunks = Math.min(remainingChunks, maxChunks);
            
            if (assignedChunks > 0) {
                distribution.push({
                    period: period,
                    chunks: chunks.slice(chunks.length - remainingChunks, 
                                      chunks.length - remainingChunks + assignedChunks),
                    availableChunks: maxChunks,
                    usedChunks: assignedChunks
                });
                
                remainingChunks -= assignedChunks;
            }
            
            if (remainingChunks === 0) break;
        }
        
        return {
            distribution,
            unassignedChunks: remainingChunks,
            success: remainingChunks === 0
        };
    }

    /**
     * Apply chunker settings and calculate adjustments
     */
    applyChunkerSettings(chunks, settings = {}) {
        const mergedSettings = {
            ...this.config.chunker.settings,
            ...settings
        };

        return chunks.map(chunk => {
            const chunkType = this.config.chunker.chunkTypes[chunk.type] || {};
            
            // Apply flexibility rules
            let adjustmentCost = 0;
            if (chunkType.flexibility === 'sticky') {
                adjustmentCost += this.config.chunker.flexibility.stickyChunkPenalty;
            } else if (chunkType.flexibility === 'slippery') {
                adjustmentCost -= this.config.chunker.flexibility.slipperyChunkBonus;
            }

            return {
                ...chunk,
                adjustmentCost,
                homeworkTransferable: chunkType.homeworkTransferable || false,
                color: chunkType.color || '#E5E7EB'
            };
        });
    }

    /**
     * Generate schedule summary for display
     */
    getScheduleSummary(date = new Date()) {
        const rotationDay = this.getCurrentRotationDay(date);
        const meetingPeriods = this.getMeetingPeriods(date);
        const droppedPeriods = this.getDroppedPeriods(date);
        const dailyChunks = this.calculateDailyChunks(date);
        const scheduleType = this.getScheduleType(date);

        return {
            school: this.config.school.name,
            date: date.toDateString(),
            rotationDay,
            scheduleType: scheduleType.type,
            specialSchedule: scheduleType.isSpecial ? scheduleType.name : null,
            meetingPeriods: meetingPeriods.map(p => p.name),
            droppedPeriods: droppedPeriods.map(p => p.name),
            totalChunks: dailyChunks,
            averageChunksPerPeriod: Math.round(dailyChunks / meetingPeriods.length * 10) / 10
        };
    }

    /**
     * Export configuration for sharing
     */
    exportConfig() {
        return {
            ...this.config,
            exported: new Date().toISOString(),
            exportedBy: 'Chunker Configuration Engine'
        };
    }

    /**
     * Create template for different school types
     */
    static createTemplate(scheduleType) {
        const templates = {
            'traditional-6': {
                schedule: {
                    type: 'fixed',
                    periods: Array.from({length: 6}, (_, i) => ({
                        id: i + 1,
                        name: `Period ${i + 1}`,
                        duration: 50,
                        type: 'academic'
                    }))
                }
            },
            
            'block-ab': {
                schedule: {
                    type: 'alternating',
                    pattern: {
                        rotationDays: ['A', 'B'],
                        cycleLength: 2
                    },
                    rotationRules: {
                        'A': { meeting: [1, 3, 5, 7] },
                        'B': { meeting: [2, 4, 6, 8] }
                    }
                }
            }
        };

        return templates[scheduleType] || null;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChunkerEngine;
} else if (typeof window !== 'undefined') {
    window.ChunkerEngine = ChunkerEngine;
}

// Calendar and view management
window.setActiveView = function(viewName) {
    // Hide all views
    const views = ['tracker', 'calendar', 'settings'];
    views.forEach(view => {
        const element = document.getElementById(`${view}-view`);
        if (element) element.style.display = 'none';
    });
    
    // Show selected view
    const activeView = document.getElementById(`${viewName}-view`);
    if (activeView) activeView.style.display = 'block';
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`[onclick*="${viewName}"]`);
    if (activeLink) activeLink.classList.add('active');
    
    // Initialize calendar if switching to calendar view
    if (viewName === 'calendar') {
        initializeCalendar();
    }
};

// Calendar functionality
let currentCalendarDate = new Date();
let currentCalendarView = 'month';

window.setCalendarView = function(view) {
    currentCalendarView = view;
    
    // Update view buttons
    document.querySelectorAll('[onclick^="setCalendarView"]').forEach(btn => {
        btn.classList.remove('bg-sage-600', 'text-parchment-50');
        btn.classList.add('text-sage-600', 'hover:bg-sage-200');
    });
    
    const activeBtn = document.querySelector(`[onclick="setCalendarView('${view}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('bg-sage-600', 'text-parchment-50');
        activeBtn.classList.remove('text-sage-600', 'hover:bg-sage-200');
    }
    
    renderCalendar();
};

window.navigateCalendar = function(direction) {
    const currentMonth = currentCalendarDate.getMonth();
    const currentYear = currentCalendarDate.getFullYear();
    
    if (currentCalendarView === 'month') {
        currentCalendarDate.setMonth(currentMonth + direction);
    } else if (currentCalendarView === 'week') {
        currentCalendarDate.setDate(currentCalendarDate.getDate() + (direction * 7));
    } else if (currentCalendarView === 'day') {
        currentCalendarDate.setDate(currentCalendarDate.getDate() + direction);
    }
    
    renderCalendar();
};

window.selectDay = function(day, month) {
    const year = currentCalendarDate.getFullYear();
    const monthIndex = month === 'Oct' ? 9 : (month === 'Sep' ? 8 : 9);
    const selectedDate = new Date(year, monthIndex, day);
    
    updateDayDetail(selectedDate);
    
    // Update selected day styling
    document.querySelectorAll('.calendar-day-cell').forEach(cell => {
        cell.classList.remove('selected');
    });
    event.target.closest('.calendar-day-cell').classList.add('selected');
};

function initializeCalendar() {
    renderCalendar();
    updateDayDetail(new Date()); // Show today by default
}

function renderCalendar() {
    const titleElement = document.getElementById('calendar-title');
    const subtitleElement = document.getElementById('calendar-subtitle');
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    if (titleElement) {
        titleElement.textContent = `${monthNames[currentCalendarDate.getMonth()]} ${currentCalendarDate.getFullYear()}`;
    }
    
    if (subtitleElement) {
        subtitleElement.textContent = 'BHS 8-Day Rotation Schedule';
    }
    
    generateCalendarGrid();
}

function generateCalendarGrid() {
    const grid = document.getElementById('calendar-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const today = new Date();
    
    for (let i = 0; i < 42; i++) { // 6 weeks × 7 days
        const cellDate = new Date(startDate);
        cellDate.setDate(startDate.getDate() + i);
        
        const isCurrentMonth = cellDate.getMonth() === month;
        const isToday = cellDate.toDateString() === today.toDateString();
        const rotationDay = getRotationDay(cellDate);
        const meetsPeriod3 = doesPeriod3Meet(cellDate);
        
        const cellClass = `calendar-day-cell p-3 rounded-lg border border-sage-200 cursor-pointer hover:bg-sage-50 ${
            meetsPeriod3 ? 'meets' : ''
        } ${isToday ? 'today' : ''}`;
        
        const textClass = isToday ? 'text-parchment-50' : (isCurrentMonth ? 'text-sage-800' : 'text-sage-400');
        const rotationClass = isToday ? 'text-parchment-200' : 'text-sage-600';
        
        const cell = document.createElement('div');
        cell.className = cellClass;
        cell.onclick = () => selectDay(cellDate.getDate(), cellDate.toLocaleDateString('en', {month: 'short'}));
        
        cell.innerHTML = `
            <div class="${textClass} text-sm ${isToday ? 'font-bold' : (isCurrentMonth ? 'font-medium' : '')}">${cellDate.getDate()}</div>
            ${meetsPeriod3 ? `<div class="text-xs ${rotationClass}">Day ${rotationDay}</div>` : ''}
            ${meetsPeriod3 ? generateChunkDots(cellDate) : ''}
        `;
        
        grid.appendChild(cell);
    }
}

function getRotationDay(date) {
    // BHS 8-day rotation starting from a known reference date
    const referenceDate = new Date(2025, 8, 30); // September 30, 2025 = Day A
    const daysDiff = Math.floor((date - referenceDate) / (1000 * 60 * 60 * 24));
    const rotationDays = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    return rotationDays[((daysDiff % 8) + 8) % 8];
}

function doesPeriod3Meet(date) {
    // Check if it's a school day (M-F) and Period 3 meets
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return false; // Weekend
    
    const rotationDay = getRotationDay(date);
    // Period 3 drops on Day F and Day H in BHS rotation
    return rotationDay !== 'F' && rotationDay !== 'H';
}

function generateChunkDots(date) {
    // Generate chunk progress visualization
    const rotationDay = getRotationDay(date);
    const today = new Date();
    const isPast = date < today;
    const isToday = date.toDateString() === today.toDateString();
    
    let dots = '';
    for (let i = 0; i < 3; i++) {
        let dotClass = 'w-2 h-2 rounded-full ';
        if (isPast) {
            dotClass += 'bg-sage-400';
        } else if (isToday) {
            dotClass += i < 2 ? 'bg-parchment-400' : 'bg-parchment-100';
        } else {
            dotClass += 'bg-sage-200';
        }
        dots += `<div class="${dotClass}"></div>`;
    }
    
    return `<div class="flex space-x-1 mt-1">${dots}</div>`;
}

function updateDayDetail(date) {
    const dayElement = document.getElementById('selected-day');
    const rotationElement = document.getElementById('selected-rotation');
    
    if (dayElement) {
        dayElement.textContent = date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    if (rotationElement) {
        const rotationDay = getRotationDay(date);
        rotationElement.textContent = `Day ${rotationDay} • 8-Period Schedule`;
    }
    
    // Update period blocks with realistic data
    updatePeriodBlocks(date);
}

function updatePeriodBlocks(date) {
    const rotationDay = getRotationDay(date);
    const periodsContainer = document.getElementById('periods-container');
    
    if (!periodsContainer) return;
    
    // BHS 8-period schedule with rotation drops
    const scheduleData = {
        periods: [
            { number: 1, time: '7:30 - 8:20 AM', subject: 'AP Physics C', room: 'Room 204' },
            { number: 2, time: '8:25 - 9:15 AM', subject: 'Honors Physics', room: 'Room 204' },
            { number: 3, time: '9:20 - 10:10 AM', subject: 'Physics Honors', room: 'Room 204', isUserClass: true },
            { number: 4, time: '10:15 - 11:05 AM', subject: 'Planning Period', room: '' },
            { number: 5, time: '11:10 AM - 12:00 PM', subject: 'Standard Physics', room: 'Room 204' },
            { number: 6, time: '12:05 - 12:55 PM', subject: 'Lunch/Free', room: '' },
            { number: 7, time: '1:00 - 1:50 PM', subject: 'Study Hall', room: 'Room 180' },
            { number: 8, time: '1:55 - 2:45 PM', subject: 'Free Period', room: '' }
        ],
        rotationDrops: {
            'A': [],
            'B': [8],
            'C': [7],
            'D': [6, 8],
            'E': [5],
            'F': [3, 6],
            'G': [2, 7],
            'H': [1, 3]
        }
    };
    
    const droppedPeriods = scheduleData.rotationDrops[rotationDay] || [];
    
    let morningHtml = '<div class="space-y-3"><h5 class="font-medium text-sage-800 mb-3">Morning Periods</h5>';
    let afternoonHtml = '<div class="space-y-3"><h5 class="font-medium text-sage-800 mb-3">Afternoon Periods</h5>';
    
    scheduleData.periods.forEach(period => {
        const isDropped = droppedPeriods.includes(period.number);
        const isUserClass = period.isUserClass && !isDropped;
        const chunks = generatePeriodChunks(period.number, date, isUserClass);
        
        let cardClass = 'period-block p-4 rounded-lg border ';
        let textClass = '';
        
        if (isDropped) {
            cardClass += 'border-burgundy-300 bg-burgundy-50';
            textClass = 'text-burgundy-800';
        } else if (isUserClass) {
            cardClass += 'border-2 border-sage-400 bg-parchment-50';
            textClass = 'text-sage-800';
        } else {
            cardClass += 'border-sage-200 bg-sage-50';
            textClass = 'text-sage-800';
        }
        
        const periodHtml = `
            <div class="${cardClass}">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-medium ${textClass}">Period ${period.number}${isDropped ? ' - DROPPED' : ''}${isUserClass ? ' (Your Class)' : ''}</span>
                    <span class="text-sm ${isDropped ? 'text-burgundy-600' : 'text-sage-600'}">${period.time}</span>
                </div>
                <div class="text-sm ${isDropped ? 'text-burgundy-600' : 'text-sage-600'}">${isDropped ? `Not meeting today (Day ${rotationDay} rotation)` : `${period.subject}${period.room ? ` (${period.room})` : ''}`}</div>
                ${!isDropped ? `<div class="flex space-x-1 mt-2">${chunks}</div>` : ''}
            </div>
        `;
        
        if (period.number <= 4) {
            morningHtml += periodHtml;
        } else {
            afternoonHtml += periodHtml;
        }
    });
    
    morningHtml += '</div>';
    afternoonHtml += '</div>';
    
    periodsContainer.innerHTML = morningHtml + afternoonHtml;
    
    // Update chunks scheduled count
    const chunksScheduledElement = document.getElementById('chunks-scheduled');
    if (chunksScheduledElement) {
        const totalChunks = isUserClassMeeting(date) ? 4 : 0;
        const completedChunks = getCompletedChunksForDate(date);
        chunksScheduledElement.textContent = `${completedChunks} of ${totalChunks}`;
    }
    
    // Update rotation legend
    const legendTitle = document.getElementById('rotation-legend-title');
    if (legendTitle) {
        legendTitle.textContent = `Day ${rotationDay} Rotation`;
    }
}

function generatePeriodChunks(periodNumber, date, isUserClass) {
    const today = new Date();
    const isPast = date < today;
    const isToday = date.toDateString() === today.toDateString();
    
    let chunks = '';
    const chunkCount = isUserClass ? 4 : 3;
    
    for (let i = 0; i < chunkCount; i++) {
        let chunkClass = 'chunk-mini ';
        let title = '';
        
        if (isUserClass) {
            const chunkTitles = [
                'Warmup: Review centripetal force',
                'Concept: Universal gravitation',
                'Practice: Orbital calculations',
                'Available'
            ];
            title = `title="${chunkTitles[i]}"`;
            
            if (isPast) {
                chunkClass += 'complete';
            } else if (isToday) {
                chunkClass += i < 2 ? 'complete' : (i === 2 ? 'current' : 'pending');
            } else {
                chunkClass += 'pending';
            }
        } else {
            if (isPast) {
                chunkClass += 'complete';
            } else if (isToday) {
                chunkClass += i < 1 ? 'complete' : 'pending';
            } else {
                chunkClass += 'pending';
            }
        }
        
        chunks += `<div class="${chunkClass}" ${title}></div>`;
    }
    
    return chunks;
}

function isUserClassMeeting(date) {
    const rotationDay = getRotationDay(date);
    // Period 3 (user's class) drops on Days F and H
    return rotationDay !== 'F' && rotationDay !== 'H';
}

function getCompletedChunksForDate(date) {
    const today = new Date();
    const isPast = date < today;
    const isToday = date.toDateString() === today.toDateString();
    
    if (!isUserClassMeeting(date)) return 0;
    
    if (isPast) return 4;
    if (isToday) return 2; // Example: 2 chunks completed today
    return 0;
}
