// Configuration Manager Module
class ConfigManager {
    constructor(configPath = 'demo-config.json') {
        this.configPath = configPath;
        this.config = null;
        this.subscribers = [];
        this.autoSaveTimeout = null;
    }

    // Load configuration from file
    async loadConfig() {
        try {
            const response = await fetch(this.configPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.config = await response.json();
            this.notifySubscribers('configLoaded', this.config);
            return this.config;
        } catch (error) {
            console.warn('Could not load config file, using defaults:', error);
            this.config = this.getDefaultConfig();
            return this.config;
        }
    }

    // Get default configuration
    getDefaultConfig() {
        return {
            displaySettings: {
                sortMethod: "name",
                cardSize: "medium",
                itemsPerRow: 3,
                showDescriptions: true,
                animationSpeed: "normal"
            },
            filterSettings: {
                visibleCategories: ["inquiry", "modeling", "investigation", "analysis", "mathematics", "explanation", "argumentation", "communication"],
                searchFilter: "",
                priorityRange: { min: 1, max: 8 }
            },
            uiSettings: {
                theme: "light",
                compactMode: false,
                autoSave: true,
                showStatistics: true
            },
            metadata: {
                version: "1.0",
                lastModified: new Date().toISOString(),
                configName: "Default Configuration"
            }
        };
    }

    // Update configuration
    updateConfig(path, value) {
        if (!this.config) {
            this.config = this.getDefaultConfig();
        }

        // Handle nested paths like "displaySettings.sortMethod"
        const keys = path.split('.');
        let current = this.config;
        
        for (let i = 0; i < keys.length - 1; i++) {
            if (!current[keys[i]]) {
                current[keys[i]] = {};
            }
            current = current[keys[i]];
        }
        
        current[keys[keys.length - 1]] = value;
        this.config.metadata.lastModified = new Date().toISOString();
        
        this.notifySubscribers('configUpdated', { path, value, config: this.config });
        
        // Auto-save if enabled
        if (this.config.uiSettings.autoSave) {
            this.scheduleAutoSave();
        }
    }

    // Get configuration value
    getConfig(path = null) {
        if (!this.config) {
            return null;
        }
        
        if (!path) {
            return this.config;
        }
        
        const keys = path.split('.');
        let current = this.config;
        
        for (const key of keys) {
            if (current[key] === undefined) {
                return null;
            }
            current = current[key];
        }
        
        return current;
    }

    // Subscribe to configuration changes
    subscribe(callback) {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== callback);
        };
    }

    // Notify subscribers of changes
    notifySubscribers(event, data) {
        this.subscribers.forEach(callback => {
            try {
                callback(event, data);
            } catch (error) {
                console.error('Error in config subscriber:', error);
            }
        });
    }

    // Schedule auto-save
    scheduleAutoSave() {
        if (this.autoSaveTimeout) {
            clearTimeout(this.autoSaveTimeout);
        }
        
        this.autoSaveTimeout = setTimeout(() => {
            this.saveConfig();
        }, 1000); // Save after 1 second of inactivity
    }

    // Save configuration (simulated - in real app would save to server)
    saveConfig() {
        const configData = {
            ...this.config,
            metadata: {
                ...this.config.metadata,
                lastModified: new Date().toISOString()
            }
        };
        
        // In a real application, you would send this to your server
        console.log('Saving configuration:', configData);
        localStorage.setItem('demo-config-backup', JSON.stringify(configData));
        this.notifySubscribers('configSaved', configData);
    }

    // Export configuration
    exportConfig(filename = 'exported-config.json') {
        const configData = {
            ...this.config,
            metadata: {
                ...this.config.metadata,
                exportedAt: new Date().toISOString(),
                exportedBy: "ConfigManager"
            }
        };
        
        const blob = new Blob([JSON.stringify(configData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Import configuration
    async importConfig(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const imported = JSON.parse(e.target.result);
                    this.config = imported;
                    this.config.metadata.lastModified = new Date().toISOString();
                    this.notifySubscribers('configImported', this.config);
                    resolve(this.config);
                } catch (error) {
                    reject(new Error('Invalid configuration file: ' + error.message));
                }
            };
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsText(file);
        });
    }

    // Reset to defaults
    resetToDefaults() {
        this.config = this.getDefaultConfig();
        this.notifySubscribers('configReset', this.config);
        if (this.config.uiSettings.autoSave) {
            this.saveConfig();
        }
    }

    // Validate configuration
    validateConfig(config = this.config) {
        const required = ['displaySettings', 'filterSettings', 'uiSettings', 'metadata'];
        const missing = required.filter(key => !config[key]);
        
        if (missing.length > 0) {
            throw new Error(`Missing required configuration sections: ${missing.join(', ')}`);
        }
        
        return true;
    }
}

// Content Manager Module
class ContentManager {
    constructor(dataPath = 'data/ngss_practices.json') {
        this.dataPath = dataPath;
        this.data = [];
        this.filteredData = [];
        this.subscribers = [];
    }

    // Load data from file
    async loadData() {
        try {
            const response = await fetch(this.dataPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            this.notifySubscribers('dataLoaded', this.data);
            return this.data;
        } catch (error) {
            console.warn('Could not load data file, using sample data:', error);
            this.data = this.getSampleData();
            return this.data;
        }
    }

    // Get sample data for demo
    getSampleData() {
        return [
            {
                id: "practice1",
                name: "Asking Questions & Defining Problems",
                abbreviated_name: "Questions & Problems",
                short_description: "Formulate investigable questions and define engineering problems for study.",
                definition: "Students ask scientific questions that can be investigated and define engineering problems that can be solved through design.",
                category: "inquiry",
                priority: 1,
                icon: "asking_questions.png"
            },
            {
                id: "practice2",
                name: "Developing and Using Models",
                abbreviated_name: "Models",
                short_description: "Create, use, and refine models to represent and explain systems or phenomena.",
                definition: "Students develop and use models to describe, test, and predict phenomena.",
                category: "modeling",
                priority: 2,
                icon: "developing_models.png"
            },
            {
                id: "practice3",
                name: "Planning and Carrying Out Investigations",
                abbreviated_name: "Investigations",
                short_description: "Design and conduct scientific investigations to answer questions.",
                definition: "Students plan and carry out investigations to answer questions and test hypotheses.",
                category: "investigation",
                priority: 3,
                icon: "planning_investigations.png"
            },
            {
                id: "practice4",
                name: "Analyzing and Interpreting Data",
                abbreviated_name: "Data Analysis",
                short_description: "Use tools and techniques to make sense of data and identify patterns.",
                definition: "Students analyze and interpret data to make sense of phenomena.",
                category: "analysis",
                priority: 4,
                icon: "analyzing_data.png"
            }
        ];
    }

    // Filter and sort data
    processData(config) {
        let processed = [...this.data];

        // Apply category filter
        if (config.filterSettings.visibleCategories) {
            processed = processed.filter(item => 
                config.filterSettings.visibleCategories.includes(item.category)
            );
        }

        // Apply search filter
        if (config.filterSettings.searchFilter) {
            const search = config.filterSettings.searchFilter.toLowerCase();
            processed = processed.filter(item =>
                item.name.toLowerCase().includes(search) ||
                item.short_description.toLowerCase().includes(search) ||
                item.definition.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search)
            );
        }

        // Apply priority range filter
        if (config.filterSettings.priorityRange) {
            const { min, max } = config.filterSettings.priorityRange;
            processed = processed.filter(item => 
                item.priority >= min && item.priority <= max
            );
        }

        // Apply sorting
        processed = this.sortData(processed, config.displaySettings.sortMethod);

        this.filteredData = processed;
        this.notifySubscribers('dataProcessed', this.filteredData);
        return this.filteredData;
    }

    // Sort data
    sortData(data, method) {
        const sorted = [...data];
        
        switch (method) {
            case 'name':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return sorted.sort((a, b) => b.name.localeCompare(a.name));
            case 'id':
                return sorted.sort((a, b) => a.id.localeCompare(b.id));
            case 'priority':
                return sorted.sort((a, b) => a.priority - b.priority);
            case 'category':
                return sorted.sort((a, b) => a.category.localeCompare(b.category));
            default:
                return sorted;
        }
    }

    // Subscribe to data changes
    subscribe(callback) {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== callback);
        };
    }

    // Notify subscribers
    notifySubscribers(event, data) {
        this.subscribers.forEach(callback => {
            try {
                callback(event, data);
            } catch (error) {
                console.error('Error in content subscriber:', error);
            }
        });
    }

    // Get categories
    getCategories() {
        return [...new Set(this.data.map(item => item.category))];
    }

    // Get statistics
    getStatistics() {
        return {
            total: this.data.length,
            visible: this.filteredData.length,
            categories: this.getCategories().length,
            filtered: this.data.length - this.filteredData.length
        };
    }
}

// UI Controller Module
class UIController {
    constructor(configManager, contentManager) {
        this.configManager = configManager;
        this.contentManager = contentManager;
        this.elements = {};
        this.initialized = false;
    }

    // Initialize UI
    async initialize() {
        if (this.initialized) return;

        // Cache DOM elements
        this.cacheElements();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Subscribe to manager changes
        this.subscribeToManagers();
        
        // Load initial data and config
        await this.loadInitialData();
        
        this.initialized = true;
    }

    // Cache DOM elements
    cacheElements() {
        const elementIds = [
            'sort-method', 'card-size-select', 'items-per-row', 'search-filter',
            'category-filters', 'content-grid', 'config-preview', 'total-items',
            'visible-items', 'current-sort', 'card-size', 'show-descriptions'
        ];
        
        elementIds.forEach(id => {
            this.elements[id] = document.getElementById(id);
        });
    }

    // Set up event listeners
    setupEventListeners() {
        // Display settings
        if (this.elements['sort-method']) {
            this.elements['sort-method'].addEventListener('change', (e) => {
                this.configManager.updateConfig('displaySettings.sortMethod', e.target.value);
            });
        }

        if (this.elements['card-size-select']) {
            this.elements['card-size-select'].addEventListener('change', (e) => {
                this.configManager.updateConfig('displaySettings.cardSize', e.target.value);
            });
        }

        if (this.elements['items-per-row']) {
            this.elements['items-per-row'].addEventListener('input', (e) => {
                this.configManager.updateConfig('displaySettings.itemsPerRow', parseInt(e.target.value));
            });
        }

        if (this.elements['search-filter']) {
            this.elements['search-filter'].addEventListener('input', (e) => {
                this.configManager.updateConfig('filterSettings.searchFilter', e.target.value);
            });
        }

        if (this.elements['show-descriptions']) {
            this.elements['show-descriptions'].addEventListener('change', (e) => {
                this.configManager.updateConfig('displaySettings.showDescriptions', e.target.checked);
            });
        }
    }

    // Subscribe to manager changes
    subscribeToManagers() {
        this.configManager.subscribe((event, data) => {
            switch (event) {
                case 'configLoaded':
                case 'configUpdated':
                case 'configImported':
                    this.updateUIFromConfig(data.config || data);
                    this.updateConfigPreview();
                    this.refreshContent();
                    break;
                case 'configSaved':
                    this.showNotification('Configuration saved successfully');
                    break;
            }
        });

        this.contentManager.subscribe((event, data) => {
            switch (event) {
                case 'dataLoaded':
                    this.populateCategoryFilters();
                    this.refreshContent();
                    break;
                case 'dataProcessed':
                    this.renderContent(data);
                    this.updateStatistics();
                    break;
            }
        });
    }

    // Load initial data
    async loadInitialData() {
        try {
            await Promise.all([
                this.configManager.loadConfig(),
                this.contentManager.loadData()
            ]);
        } catch (error) {
            console.error('Error loading initial data:', error);
            this.showNotification('Error loading data: ' + error.message, 'error');
        }
    }

    // Update UI from configuration
    updateUIFromConfig(config) {
        if (!config) return;

        // Update form controls
        if (this.elements['sort-method']) {
            this.elements['sort-method'].value = config.displaySettings.sortMethod;
        }
        
        if (this.elements['card-size-select']) {
            this.elements['card-size-select'].value = config.displaySettings.cardSize;
        }
        
        if (this.elements['items-per-row']) {
            this.elements['items-per-row'].value = config.displaySettings.itemsPerRow;
        }
        
        if (this.elements['search-filter']) {
            this.elements['search-filter'].value = config.filterSettings.searchFilter;
        }

        if (this.elements['show-descriptions']) {
            this.elements['show-descriptions'].checked = config.displaySettings.showDescriptions;
        }

        // Update category checkboxes
        this.updateCategoryCheckboxes(config.filterSettings.visibleCategories);
    }

    // Update category checkboxes
    updateCategoryCheckboxes(visibleCategories) {
        if (!this.elements['category-filters']) return;

        const checkboxes = this.elements['category-filters'].querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = visibleCategories.includes(checkbox.value);
        });
    }

    // Populate category filters
    populateCategoryFilters() {
        if (!this.elements['category-filters']) return;

        const categories = this.contentManager.getCategories();
        const visibleCategories = this.configManager.getConfig('filterSettings.visibleCategories') || [];
        
        this.elements['category-filters'].innerHTML = categories.map(category => `
            <div class="checkbox-item">
                <input type="checkbox" id="cat-${category}" value="${category}" ${visibleCategories.includes(category) ? 'checked' : ''}>
                <label for="cat-${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</label>
            </div>
        `).join('');

        // Add event listeners for new checkboxes
        this.elements['category-filters'].addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const category = e.target.value;
                const currentVisible = this.configManager.getConfig('filterSettings.visibleCategories') || [];
                let newVisible;

                if (e.target.checked) {
                    newVisible = [...currentVisible, category];
                } else {
                    newVisible = currentVisible.filter(cat => cat !== category);
                }

                this.configManager.updateConfig('filterSettings.visibleCategories', newVisible);
            }
        });
    }

    // Refresh content display
    refreshContent() {
        const config = this.configManager.getConfig();
        if (config) {
            this.contentManager.processData(config);
        }
    }

    // Render content
    renderContent(data) {
        if (!this.elements['content-grid'] || !data) return;

        const config = this.configManager.getConfig();
        const { cardSize, itemsPerRow, showDescriptions } = config.displaySettings;

        // Update grid layout
        this.elements['content-grid'].style.gridTemplateColumns = `repeat(${itemsPerRow}, 1fr)`;

        // Generate cards
        this.elements['content-grid'].innerHTML = data.map(item => `
            <div class="content-card ${cardSize}" onclick="window.uiController.selectCard('${item.id}')">
                <div class="card-icon">${item.icon ? item.name.charAt(0) : item.name.charAt(0)}</div>
                <div class="card-title">${item.name}</div>
                ${showDescriptions && cardSize !== 'small' ? `<div class="card-description">${item.short_description}</div>` : ''}
                ${cardSize === 'large' ? `<div style="margin-top: 0.5rem; font-size: 0.8rem; color: #9ca3af;">Category: ${item.category}</div>` : ''}
            </div>
        `).join('');
    }

    // Update statistics
    updateStatistics() {
        const stats = this.contentManager.getStatistics();
        const config = this.configManager.getConfig();

        if (this.elements['total-items']) {
            this.elements['total-items'].textContent = stats.total;
        }
        
        if (this.elements['visible-items']) {
            this.elements['visible-items'].textContent = stats.visible;
        }
        
        if (this.elements['current-sort']) {
            const sortSelect = this.elements['sort-method'];
            this.elements['current-sort'].textContent = sortSelect ? sortSelect.selectedOptions[0].text : 'N/A';
        }
        
        if (this.elements['card-size']) {
            const cardSize = config.displaySettings.cardSize;
            this.elements['card-size'].textContent = cardSize.charAt(0).toUpperCase() + cardSize.slice(1);
        }
    }

    // Update configuration preview
    updateConfigPreview() {
        if (!this.elements['config-preview']) return;

        const config = this.configManager.getConfig();
        this.elements['config-preview'].textContent = JSON.stringify(config, null, 2);
    }

    // Card selection handler
    selectCard(id) {
        const item = this.contentManager.data.find(item => item.id === id);
        if (item) {
            this.showNotification(`Selected: ${item.name}`, 'info');
            // You could emit a custom event here for other parts of the app to handle
            document.dispatchEvent(new CustomEvent('cardSelected', { detail: item }));
        }
    }

    // Show notification
    showNotification(message, type = 'success') {
        // Simple notification system - in a real app you'd want something more sophisticated
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'error' ? '#f56565' : type === 'info' ? '#4299e1' : '#48bb78'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Export configuration
    exportConfig() {
        this.configManager.exportConfig('content-config.json');
    }

    // Import configuration
    importConfig() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    await this.configManager.importConfig(file);
                    this.showNotification('Configuration imported successfully!');
                } catch (error) {
                    this.showNotification('Error importing configuration: ' + error.message, 'error');
                }
            }
        };
        input.click();
    }

    // Reset to defaults
    resetToDefaults() {
        if (confirm('Are you sure you want to reset all settings to default values?')) {
            this.configManager.resetToDefaults();
            this.showNotification('Configuration reset to defaults');
        }
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Global initialization
let configManager, contentManager, uiController;

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Initialize managers
        configManager = new ConfigManager('demo-config.json');
        contentManager = new ContentManager('data/ngss_practices.json');
        uiController = new UIController(configManager, contentManager);

        // Make uiController globally available for onclick handlers
        window.uiController = uiController;

        // Initialize the UI
        await uiController.initialize();

        // Add global functions for button handlers
        window.exportConfig = () => uiController.exportConfig();
        window.importConfig = () => uiController.importConfig();
        window.resetToDefaults = () => uiController.resetToDefaults();

        console.log('Dynamic Content Configuration Demo initialized successfully');
    } catch (error) {
        console.error('Error initializing demo:', error);
    }
});
