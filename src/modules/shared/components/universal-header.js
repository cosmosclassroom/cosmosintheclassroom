/**
 * ---
 * title: "Universal Header Manager"
 * type: "component-script"
 * system: "shared"
 * author: "Cosmos in the Classroom"
 * date: "2025-01-27"
 * description: "JavaScript manager for universal header functionality"
 * dependencies:
 *   - "schedule-config.json"
 *   - "universal-header.html"
 * features:
 *   - "User data persistence"
 *   - "Course/period management"
 *   - "Progress calculation"
 *   - "Schedule integration"
 * ---
 */

/**
 * Universal Header Manager for Cosmos in the Classroom
 * Handles user tracking, course/period management, and progress visualization
 */

class CosmosHeaderManager {
    constructor() {
        this.userData = this.loadUserData();
        this.scheduleData = null;
        this.progressData = null;
        this.currentDate = new Date();
        
        this.init();
    }

    async init() {
        try {
            await this.loadScheduleData();
            this.setupEventListeners();
            this.updateDisplay();
            this.startPeriodicUpdates();
        } catch (error) {
            console.error('Failed to initialize header manager:', error);
        }
    }

    // --- USER DATA MANAGEMENT ---
    
    loadUserData() {
        const defaultData = {
            name: '',
            role: 'visitor',
            selectedCourse: '',
            selectedPeriod: null,
            preferences: {}
        };
        
        try {
            const stored = localStorage.getItem('cosmosUserData');
            return stored ? { ...defaultData, ...JSON.parse(stored) } : defaultData;
        } catch (error) {
            console.error('Error loading user data:', error);
            return defaultData;
        }
    }

    saveUserData() {
        try {
            localStorage.setItem('cosmosUserData', JSON.stringify(this.userData));
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    }

    // --- SCHEDULE DATA MANAGEMENT ---
    
    async loadScheduleData() {
        try {
            // Load base schedule configuration
            const response = await fetch('/data/schedule-config.json');
            if (response.ok) {
                this.scheduleData = await response.json();
            } else {
                // Fallback schedule data
                this.scheduleData = this.getDefaultSchedule();
            }
        } catch (error) {
            console.warn('Using default schedule data:', error);
            this.scheduleData = this.getDefaultSchedule();
        }
    }

    getDefaultSchedule() {
        return {
            academicYear: "2025-2026",
            startDate: "2025-08-25",
            endDate: "2026-06-15",
            totalInstructionalDays: 180,
            totalChunks: 144, // 4 chunks per day * 36 weeks
            chunksPerQuarter: 36,
            rotationCycle: ['A', 'B', 'C', 'D'],
            dropRules: {
                1: [7, 8], // Day A drops periods 7, 8
                2: [1, 8], // Day B drops periods 1, 8  
                3: [1, 2], // Day C drops periods 1, 2
                4: [2, 7]  // Day D drops periods 2, 7
            },
            periods: [1, 2, 3, 4, 5, 6, 7, 8],
            courses: {
                'hphys-p1': { course: 'Honors Physics', period: 1 },
                'hphys-p3': { course: 'Honors Physics', period: 3 },
                'hphys-p7': { course: 'Honors Physics', period: 7 },
                'sphys-p2': { course: 'Standard Physics', period: 2 },
                'sphys-p4': { course: 'Standard Physics', period: 4 },
                'sphys-p6': { course: 'Standard Physics', period: 6 }
            }
        };
    }

    // --- DISPLAY UPDATES ---
    
    updateDisplay() {
        this.updateUserGreeting();
        this.updateCourseSelection();
        this.updateRotationDay();
        this.updateProgressBar();
        this.updateActiveNavigation();
    }

    updateUserGreeting() {
        const greetingEl = document.getElementById('userGreeting');
        if (!greetingEl) return;

        if (this.userData.name) {
            const timeOfDay = this.getTimeOfDayGreeting();
            greetingEl.textContent = `${timeOfDay}, ${this.userData.name}`;
        } else {
            greetingEl.textContent = 'Welcome, Guest';
        }
    }

    getTimeOfDayGreeting() {
        const hour = this.currentDate.getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 17) return 'Good afternoon';
        return 'Good evening';
    }

    updateCourseSelection() {
        const selectorEl = document.getElementById('courseSelector');
        const periodBadgeEl = document.getElementById('periodNumber');
        
        if (selectorEl && this.userData.selectedCourse) {
            selectorEl.value = this.userData.selectedCourse;
        }
        
        if (periodBadgeEl && this.userData.selectedPeriod) {
            periodBadgeEl.textContent = this.userData.selectedPeriod;
        } else if (periodBadgeEl) {
            periodBadgeEl.textContent = '-';
        }
    }

    updateRotationDay() {
        const rotationBadgeEl = document.getElementById('rotationBadge');
        const rotationDateEl = document.getElementById('rotationDate');
        
        if (!rotationBadgeEl || !rotationDateEl) return;

        const rotationInfo = this.calculateRotationDay();
        
        // Update rotation badge
        rotationBadgeEl.textContent = rotationInfo.day;
        rotationBadgeEl.className = `rotation-badge day-${rotationInfo.day.toLowerCase()}`;
        
        // Update date
        rotationDateEl.textContent = this.currentDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    }

    calculateRotationDay() {
        if (!this.scheduleData) return { day: 'A', dayNumber: 1 };

        const startDate = new Date(this.scheduleData.startDate);
        const daysDiff = Math.floor((this.currentDate - startDate) / (1000 * 60 * 60 * 24));
        const rotationIndex = daysDiff % this.scheduleData.rotationCycle.length;
        
        return {
            day: this.scheduleData.rotationCycle[rotationIndex],
            dayNumber: rotationIndex + 1
        };
    }

    updateProgressBar() {
        const chunkGridEl = document.getElementById('chunkGrid');
        const progressFillEl = document.getElementById('progressFill');
        const chunksUsedEl = document.getElementById('chunksUsed');
        const daysRemainingEl = document.getElementById('daysRemaining');
        const currentQuarterEl = document.getElementById('currentQuarter');
        
        if (!this.scheduleData) return;

        const progressInfo = this.calculateProgress();
        
        // Update chunk grid
        if (chunkGridEl) {
            this.renderChunkGrid(chunkGridEl, progressInfo);
        }
        
        // Update progress fill
        if (progressFillEl) {
            progressFillEl.style.width = `${progressInfo.percentComplete}%`;
        }
        
        // Update text displays
        if (chunksUsedEl) {
            chunksUsedEl.textContent = `${progressInfo.chunksUsed} of ${progressInfo.totalChunks} chunks used`;
        }
        
        if (daysRemainingEl) {
            daysRemainingEl.textContent = progressInfo.daysRemaining;
        }
        
        if (currentQuarterEl) {
            currentQuarterEl.textContent = progressInfo.currentQuarter;
        }
    }

    calculateProgress() {
        const startDate = new Date(this.scheduleData.startDate);
        const endDate = new Date(this.scheduleData.endDate);
        const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
        const daysPassed = Math.floor((this.currentDate - startDate) / (1000 * 60 * 60 * 24));
        const daysRemaining = Math.max(0, totalDays - daysPassed);
        
        const percentComplete = Math.min(100, (daysPassed / totalDays) * 100);
        const chunksUsed = Math.floor((daysPassed / totalDays) * this.scheduleData.totalChunks);
        
        // Determine current quarter
        const quarterProgress = percentComplete / 25; // 4 quarters = 25% each
        const quarters = ['Fall Quarter', 'Winter Quarter', 'Spring Quarter', 'Summer Quarter'];
        const currentQuarter = quarters[Math.min(3, Math.floor(quarterProgress))];
        
        return {
            percentComplete,
            chunksUsed,
            totalChunks: this.scheduleData.totalChunks,
            daysRemaining,
            currentQuarter
        };
    }

    renderChunkGrid(container, progressInfo) {
        container.innerHTML = '';
        
        for (let i = 0; i < this.scheduleData.totalChunks; i++) {
            const chunkCell = document.createElement('div');
            chunkCell.className = 'chunk-cell';
            
            if (i < progressInfo.chunksUsed) {
                chunkCell.classList.add('used');
            } else if (i === progressInfo.chunksUsed) {
                chunkCell.classList.add('current');
            }
            
            container.appendChild(chunkCell);
        }
    }

    updateActiveNavigation() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href && currentPath.includes(href.replace('/', ''))) {
                link.classList.add('active');
            }
        });
    }

    // --- EVENT HANDLERS ---
    
    setupEventListeners() {
        // Course selector change
        const courseSelector = document.getElementById('courseSelector');
        if (courseSelector) {
            courseSelector.addEventListener('change', (e) => {
                this.handleCourseChange(e.target.value);
            });
        }

        // User settings form
        const userNameInput = document.getElementById('userName');
        const userRoleSelect = document.getElementById('userRole');
        
        if (userNameInput) {
            userNameInput.value = this.userData.name;
        }
        
        if (userRoleSelect) {
            userRoleSelect.value = this.userData.role;
        }
    }

    handleCourseChange(courseKey) {
        if (!courseKey) {
            this.userData.selectedCourse = '';
            this.userData.selectedPeriod = null;
        } else {
            this.userData.selectedCourse = courseKey;
            const courseInfo = this.scheduleData.courses[courseKey];
            this.userData.selectedPeriod = courseInfo ? courseInfo.period : null;
        }
        
        this.saveUserData();
        this.updateDisplay();
        
        // Trigger custom event for other components to listen to
        window.dispatchEvent(new CustomEvent('cosmosUserCourseChanged', {
            detail: {
                course: this.userData.selectedCourse,
                period: this.userData.selectedPeriod
            }
        }));
    }

    // --- PUBLIC METHODS ---
    
    saveUserSettings() {
        const userNameInput = document.getElementById('userName');
        const userRoleSelect = document.getElementById('userRole');
        
        if (userNameInput) {
            this.userData.name = userNameInput.value.trim();
        }
        
        if (userRoleSelect) {
            this.userData.role = userRoleSelect.value;
        }
        
        this.saveUserData();
        this.updateDisplay();
        this.toggleUserSettings();
    }

    resetUserSettings() {
        if (confirm('Reset all user settings? This cannot be undone.')) {
            localStorage.removeItem('cosmosUserData');
            this.userData = this.loadUserData();
            this.updateDisplay();
            
            // Reset form values
            const userNameInput = document.getElementById('userName');
            const userRoleSelect = document.getElementById('userRole');
            
            if (userNameInput) userNameInput.value = '';
            if (userRoleSelect) userRoleSelect.value = 'visitor';
        }
    }

    toggleUserSettings() {
        const panel = document.getElementById('userSettingsPanel');
        if (panel) {
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        }
    }

    toggleMobileMenu() {
        // Mobile menu implementation
        console.log('Mobile menu toggle - to be implemented');
    }

    // --- PERIODIC UPDATES ---
    
    startPeriodicUpdates() {
        // Update time-sensitive information every minute
        setInterval(() => {
            this.currentDate = new Date();
            this.updateRotationDay();
            this.updateProgressBar();
        }, 60000); // 1 minute
        
        // Update user greeting every hour
        setInterval(() => {
            this.updateUserGreeting();
        }, 3600000); // 1 hour
    }

    // --- UTILITY METHODS ---
    
    getCurrentUserCourse() {
        return {
            courseKey: this.userData.selectedCourse,
            period: this.userData.selectedPeriod,
            courseInfo: this.scheduleData?.courses[this.userData.selectedCourse] || null
        };
    }

    isUserLoggedIn() {
        return this.userData.name && this.userData.name.length > 0;
    }

    getUserRole() {
        return this.userData.role;
    }
}

// Global functions for HTML onclick handlers
function toggleUserSettings() {
    if (window.cosmosHeader) {
        window.cosmosHeader.toggleUserSettings();
    }
}

function saveUserSettings() {
    if (window.cosmosHeader) {
        window.cosmosHeader.saveUserSettings();
    }
}

function resetUserSettings() {
    if (window.cosmosHeader) {
        window.cosmosHeader.resetUserSettings();
    }
}

function toggleMobileMenu() {
    if (window.cosmosHeader) {
        window.cosmosHeader.toggleMobileMenu();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.cosmosHeader = new CosmosHeaderManager();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CosmosHeaderManager;
}
