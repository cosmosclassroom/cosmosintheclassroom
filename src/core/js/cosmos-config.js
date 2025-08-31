/**
 * CosmosConfig: Centralized Personalization & Settings Manager
 * -----------------------------------------------------------
 * - Stores and manages all user personalization info for cosmosintheclassroom.org
 * - Handles loading, saving, updating, and event notification for user settings
 * - Uses browser localStorage for persistence
 * - Provides a cascade of settings: privacy, chunker (course/class), portal, UI, etc.
 * - All systems (Portal, Chunker, Socrates, Library) must use this class for consistency
 * - Settings are organized by category for maintainability and cross-system compatibility
 * - UI and logic should always reference CosmosConfig for personalization and progress
 */

class CosmosConfig {
    /**
     * Constructor: Initializes default settings and loads from localStorage
     * - Defines the cascade of personalization info
     * - Binds system events for UI and accessibility
     */
    constructor() {
        this.settingsKey = 'cosmos_classroom_settings';

        // Default settings cascade
        this.defaults = {
            // Privacy & Data
            privacy: {
                trackingEnabled: false,
                analyticsEnabled: false,
                sharePrefWithTeachers: false,
                storeProgress: true
            },
            // Chunker: Course/Class/Period personalization
            chunker: {
                currentClass: {
                    course: '',
                    level: '',
                    period: '',
                    semester: 'fall2025',
                    teacher: ''
                },
                preferences: {
                    autoSave: true,
                    showAdjustmentHistory: true,
                    defaultChunkDuration: 15,
                    allowOvertime: true,
                    confirmResets: true
                },
                export: {
                    includeAdjustments: true,
                    includeStats: true,
                    format: 'detailed' // 'detailed' or 'summary'
                },
                ui: {
                    showTimeShifts: true,
                    showOriginalContent: true,
                    compactMode: false
                }
            },
            // Portal: Bookmarks, recently viewed, etc. (added dynamically)
            portal: {
                bookmarkedUnits: [],
                recentlyViewed: []
            },
            // UI: Theme, accessibility, etc. (added dynamically)
            ui: {
                theme: 'auto',
                reducedMotion: false
            },
            // Ratatoskr: Widget settings (added dynamically)
            ratatoskr: {}
        };
        this.config = this.loadConfig();
        this.settings = this.mergeDeep(this.defaults, this.config);
        this.bindEvents();
        this.ensureUserCredentials();
    }

    /**
     * Set a Ratatoskr widget setting by key
     * @param {string} key - Setting key
     * @param {*} value - Value to set
     */
    setRatatoskrSetting(key, value) {
        this.set(`ratatoskr.${key}`, value);
    }

    /**
     * Get all chunker (course/class) settings
     * @returns {Object} Chunker settings object
     */
    getChunkerSettings() {
        return this.get('chunker');
    }

    /**
     * Set a chunker (course/class) setting by key
     * @param {string} key - Setting key
     * @param {*} value - Value to set
     */
    setChunkerSetting(key, value) {
        this.set(`chunker.${key}`, value);
    }

    /**
     * Set the currently active class (course, level, period, teacher)
     * @param {string} course
     * @param {string} level
     * @param {string} period
     * @param {string} [teacher]
     */
    setActiveClass(course, level, period, teacher = '') {
        this.set('chunker.currentClass', {
            course: course,
            level: level,
            period: period,
            teacher: teacher,
            semester: this.get('chunker.currentClass.semester')
        });
    }

    /**
     * Get a unique ID string for the currently active class
     * @returns {string} Unique class ID
     */
    getActiveClassId() {
        const classConfig = this.get('chunker.currentClass');
        return `${classConfig.course}-${classConfig.level}-period${classConfig.period}-${classConfig.semester}`;
    }

    /**
     * Add a unit bookmark in the portal system
     * @param {string} unitId - Unit identifier
     */
    addBookmark(unitId) {
        const bookmarks = this.get('portal.bookmarkedUnits') || [];
        if (!bookmarks.includes(unitId)) {
            bookmarks.push(unitId);
            this.set('portal.bookmarkedUnits', bookmarks);
        }
    }

    /**
     * Add a page to the recently viewed list in the portal system
     * @param {string} pageId - Page identifier
     */
    addToRecentlyViewed(pageId) {
        const recent = this.get('portal.recentlyViewed') || [];
        const filtered = recent.filter(id => id !== pageId);
        filtered.unshift(pageId);
        // Keep only last 10 items
        if (filtered.length > 10) {
            filtered.splice(10);
        }
        this.set('portal.recentlyViewed', filtered);
    }

    /**
     * Utility: Get a nested value from an object by dot-path
     * @param {Object} obj
     * @param {string} path - Dot-separated path
     * @returns {*} Value at path
     */
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    /**
     * Utility: Set a nested value in an object by dot-path
     * @param {Object} obj
     * @param {string} path - Dot-separated path
     * @param {*} value - Value to set
     */
    setNestedValue(obj, path, value) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        const target = keys.reduce((current, key) => {
            if (!current[key] || typeof current[key] !== 'object') {
                current[key] = {};
            }
            return current[key];
        }, obj);
        target[lastKey] = value;
    }

    /**
     * Utility: Deep merge two objects (target, source)
     * @param {Object} target
     * @param {Object} source
     * @returns {Object} Merged result
     */
    mergeDeep(target, source) {
        const result = JSON.parse(JSON.stringify(target)); // Deep copy
        function merge(dest, src) {
            for (const key in src) {
                if (src[key] && typeof src[key] === 'object' && !Array.isArray(src[key])) {
                    if (!dest[key] || typeof dest[key] !== 'object') {
                        dest[key] = {};
                    }
                    merge(dest[key], src[key]);
                } else {
                    dest[key] = src[key];
                }
            }
        }
        merge(result, source);
        return result;
    }

    /**
     * Bind system events for UI and accessibility (theme, motion)
     */
    bindEvents() {
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                if (this.get('ui.theme') === 'auto') {
                    this.notifyChange('ui.theme', 'auto');
                }
            });
        }
        
        // Listen for reduced motion preference
        if (window.matchMedia) {
            window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
                this.set('ui.reducedMotion', e.matches);
            });
        }
    }

    notifyChange(path, value) {
        document.dispatchEvent(new CustomEvent('cosmos-settings-changed', {
            detail: { path, value, settings: this.settings }
        }));
    }

    reset() {
        this.settings = JSON.parse(JSON.stringify(this.defaults));
        this.save();
        this.notifyChange('reset', this.settings);
    }

    // Export/import for backup or transfer
    export() {
        return JSON.stringify(this.settings, null, 2);
    }

    import(settingsJson) {
        try {
            const imported = JSON.parse(settingsJson);
            this.settings = this.mergeDeep(this.defaults, imported);
            this.save();
            this.notifyChange('imported', this.settings);
            return true;
        } catch (error) {
            console.error('Failed to import settings:', error);
            return false;
        }
    }

    loadConfig() {
        const raw = localStorage.getItem(this.settingsKey);
        return raw ? JSON.parse(raw) : {};
    }

    saveConfig() {
        localStorage.setItem(this.settingsKey, JSON.stringify(this.config));
    }

    ensureUserCredentials() {
        if (!this.config.username || !this.config.pin) {
            this.promptForCredentials();
        }
    }

    promptForCredentials() {
        // Simple prompt (replace with modal/UI in production)
        const username = prompt('Enter your name:');
        const pin = prompt('Set a 4-digit PIN:');
        if (username && pin && /^\d{4}$/.test(pin)) {
            this.config.username = username;
            this.config.pin = pin;
            this.saveConfig();
        } else {
            alert('Invalid input. Please try again.');
            this.promptForCredentials();
        }
    }
}

// Global instance
window.CosmosConfig = new CosmosConfig();

function doPost(e) {
  var data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService.createTextOutput("Error: Invalid JSON")
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders({ "Access-Control-Allow-Origin": "*" });
  }
  // ... handle data ...
  return ContentService.createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({ "Access-Control-Allow-Origin": "*" });
}
function doGet(e) {
  return ContentService.createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({ "Access-Control-Allow-Origin": "*" });
}

