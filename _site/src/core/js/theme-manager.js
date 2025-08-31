// Theme Manager for Cosmos in the Classroom
// Handles light/dark/auto theme switching and CSS custom properties

class ThemeManager {
    constructor(config) {
        this.config = config;
        this.init();
        
        // Listen for settings changes
        document.addEventListener('cosmos-settings-changed', (e) => {
            if (e.detail.path === 'ui.theme') {
                this.applyTheme();
            }
        });
    }

    init() {
        this.applyTheme();
        
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                if (this.config.get('ui.theme') === 'auto') {
                    this.applyTheme();
                }
            });
        }
    }

    applyTheme() {
        const themePreference = this.config.get('ui.theme');
        let actualTheme = themePreference;
        
        if (themePreference === 'auto') {
            actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        document.documentElement.setAttribute('data-theme', actualTheme);
        
        // Update CSS custom properties
        if (actualTheme === 'dark') {
            this.applyDarkTheme();
        } else {
            this.applyLightTheme();
        }
        
        // Notify that theme has been applied
        document.dispatchEvent(new CustomEvent('theme-applied', {
            detail: { theme: actualTheme, preference: themePreference }
        }));
    }

    applyDarkTheme() {
        const root = document.documentElement;
        
        // Background gradients
        root.style.setProperty('--bg-gradient', 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)');
        root.style.setProperty('--panel-bg', 'rgba(30, 30, 30, 0.95)');
        root.style.setProperty('--panel-bg-solid', '#1e1e1e');
        
        // Text colors
        root.style.setProperty('--text-primary', '#ffffff');
        root.style.setProperty('--text-secondary', '#b0b0b0');
        root.style.setProperty('--text-muted', '#888888');
        
        // Border and accent colors
        root.style.setProperty('--border-color', '#444444');
        root.style.setProperty('--accent-color', '#D2691E');
        root.style.setProperty('--accent-hover', '#CD853F');
        
        // Ratatoskr specific colors
        root.style.setProperty('--ratatoskr-bg', 'linear-gradient(45deg, #8B4513, #A0522D)');
        root.style.setProperty('--ratatoskr-border', '#D2691E');
        root.style.setProperty('--ratatoskr-icon', '#FFE4B5');
        
        // Chunk status colors (adjusted for dark theme)
        root.style.setProperty('--chunk-completed-bg', '#1a3d1a');
        root.style.setProperty('--chunk-completed-border', '#4CAF50');
        root.style.setProperty('--chunk-completed-text', '#81C784');
        
        root.style.setProperty('--chunk-current-bg', '#2d1f0a');
        root.style.setProperty('--chunk-current-border', '#FF9800');
        root.style.setProperty('--chunk-current-text', '#FFB74D');
        
        root.style.setProperty('--chunk-upcoming-bg', '#1a0d1a');
        root.style.setProperty('--chunk-upcoming-border', '#9C27B0');
        root.style.setProperty('--chunk-upcoming-text', '#CE93D8');
        
        // Form elements
        root.style.setProperty('--input-bg', '#333333');
        root.style.setProperty('--input-border', '#555555');
        root.style.setProperty('--input-text', '#ffffff');
        
        // Shadows
        root.style.setProperty('--shadow-light', 'rgba(0, 0, 0, 0.3)');
        root.style.setProperty('--shadow-medium', 'rgba(0, 0, 0, 0.5)');
        root.style.setProperty('--shadow-heavy', 'rgba(0, 0, 0, 0.7)');
    }

    applyLightTheme() {
        const root = document.documentElement;
        
        // Background gradients
        root.style.setProperty('--bg-gradient', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
        root.style.setProperty('--panel-bg', 'rgba(255, 255, 255, 0.95)');
        root.style.setProperty('--panel-bg-solid', '#ffffff');
        
        // Text colors
        root.style.setProperty('--text-primary', '#333333');
        root.style.setProperty('--text-secondary', '#666666');
        root.style.setProperty('--text-muted', '#999999');
        
        // Border and accent colors
        root.style.setProperty('--border-color', '#e0e0e0');
        root.style.setProperty('--accent-color', '#8B4513');
        root.style.setProperty('--accent-hover', '#A0522D');
        
        // Ratatoskr specific colors
        root.style.setProperty('--ratatoskr-bg', 'linear-gradient(45deg, #8B4513, #A0522D)');
        root.style.setProperty('--ratatoskr-border', '#D2691E');
        root.style.setProperty('--ratatoskr-icon', '#FFE4B5');
        
        // Chunk status colors (original light theme)
        root.style.setProperty('--chunk-completed-bg', '#e8f5e8');
        root.style.setProperty('--chunk-completed-border', '#4CAF50');
        root.style.setProperty('--chunk-completed-text', '#2E7D32');
        
        root.style.setProperty('--chunk-current-bg', '#fff3e0');
        root.style.setProperty('--chunk-current-border', '#FF9800');
        root.style.setProperty('--chunk-current-text', '#E65100');
        
        root.style.setProperty('--chunk-upcoming-bg', '#f3e5f5');
        root.style.setProperty('--chunk-upcoming-border', '#9C27B0');
        root.style.setProperty('--chunk-upcoming-text', '#6A1B9A');
        
        // Form elements
        root.style.setProperty('--input-bg', '#ffffff');
        root.style.setProperty('--input-border', '#dddddd');
        root.style.setProperty('--input-text', '#333333');
        
        // Shadows
        root.style.setProperty('--shadow-light', 'rgba(0, 0, 0, 0.1)');
        root.style.setProperty('--shadow-medium', 'rgba(0, 0, 0, 0.2)');
        root.style.setProperty('--shadow-heavy', 'rgba(0, 0, 0, 0.3)');
    }

    getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }

    getThemePreference() {
        return this.config.get('ui.theme');
    }

    setTheme(theme) {
        this.config.set('ui.theme', theme);
        // applyTheme() will be called automatically via event listener
    }
}

// Initialize theme manager when config is ready
document.addEventListener('DOMContentLoaded', () => {
    if (window.CosmosConfig) {
        window.ThemeManager = new ThemeManager(window.CosmosConfig);
    }
});
