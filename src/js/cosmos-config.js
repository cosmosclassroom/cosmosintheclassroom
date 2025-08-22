// Cosmos Configuration Class
// This document stores local user data for personalization across cosmosintheclassroom.org
// It handles loading, saving, and updating user settings.
// The configuration is stored in the browser's local storage.
// The UI allows the user to select current (course)(period)(calendar date) etc as needed by the system
// The settings are organized into categories for easy access and management.
// All scripts reviewing this configuration should use the CosmosConfig class to ensure consistency.

class CosmosConfig {
            },
            
            // Privacy & Data
            privacy: {
                trackingEnabled: false,
                analyticsEnabled: false,
                sharePrefWithTeachers: false,
                storeProgress: true
            },
            
            // Chunker Configuration
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
            }
        };
        
        this.settings = this.load();
        this.bindEvents();
    }

    load() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                const parsed = JSON.parse(stored);
                return this.mergeDeep(this.defaults, parsed);
            }
        } catch (error) {
            console.warn('Failed to load Cosmos settings:', error);
        }
        return JSON.parse(JSON.stringify(this.defaults)); // Deep copy
    }

    save() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.settings));
            this.notifyChange('saved', this.settings);
            return true;
        } catch (error) {
            console.error('Failed to save Cosmos settings:', error);
            return false;
        }
    }

    get(path) {
        return this.getNestedValue(this.settings, path);
    }

    set(path, value) {
        this.setNestedValue(this.settings, path, value);
        this.save();
        this.notifyChange(path, value);
    }

    // Ratatoskr-specific convenience methods
    getRatatoskrSettings() {
        return this.get('ratatoskr');
    }

    setRatatoskrSetting(key, value) {
        this.set(`ratatoskr.${key}`, value);
    }

    // Chunker-specific convenience methods
    getChunkerSettings() {
        return this.get('chunker');
    }

    setChunkerSetting(key, value) {
        this.set(`chunker.${key}`, value);
    }

    setActiveClass(course, level, period, teacher = '') {
        this.set('chunker.currentClass', {
            course: course,
            level: level,
            period: period,
            teacher: teacher,
            semester: this.get('chunker.currentClass.semester')
        });
    }

    getActiveClassId() {
        const classConfig = this.get('chunker.currentClass');
        return `${classConfig.course}-${classConfig.level}-period${classConfig.period}-${classConfig.semester}`;
    }

    // Portal-specific methods
    addBookmark(unitId) {
        const bookmarks = this.get('portal.bookmarkedUnits') || [];
        if (!bookmarks.includes(unitId)) {
            bookmarks.push(unitId);
            this.set('portal.bookmarkedUnits', bookmarks);
        }
    }

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

    // Utility methods
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

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
}

// Global instance
window.CosmosConfig = new CosmosConfig();

