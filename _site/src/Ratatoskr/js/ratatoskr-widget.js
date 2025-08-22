// Ratatoskr Widget for Cosmos in the Classroom
// Progress tracking widget that integrates with the global configuration system

class RatatoskrWidget {
    constructor() {
        this.config = window.CosmosConfig;
        this.settings = this.config ? this.config.getRatatoskrSettings() : null;
        this.panelVisible = false;
        this.currentChunkIndex = 1;
        
        // Sample chunk data - in real app this comes from WeekCentricChunkerEngine
        this.sampleChunks = [
            { id: 1, title: "Kinematic Equations Review", time: "8:15-8:30", status: "completed" },
            { id: 2, title: "Projectile Motion Lab Setup", time: "8:30-8:45", status: "current" },
            { id: 3, title: "Vector Decomposition Practice", time: "8:45-9:00", status: "upcoming" },
            { id: 4, title: "Historical Context: Cannons", time: "9:00-9:15", status: "upcoming" },
            { id: 5, title: "Problem Set 3.2", time: "9:15-9:30", status: "upcoming" },
            { id: 6, title: "Wrap-up & Questions", time: "9:30-9:45", status: "upcoming" }
        ];
        
        if (this.config) {
            this.init();
            this.bindEvents();
        } else {
            console.warn('Ratatoskr: CosmosConfig not available');
        }
    }

    init() {
        if (!this.settings || !this.settings.enabled) {
            return; // Widget disabled
        }
        
        this.createWidget();
        this.createPanel();
        this.updatePosition();
        this.makeDraggable();
        this.startTimeUpdates();
    }

    createWidget() {
        // Check if widget already exists
        if (document.querySelector('.ratatoskr-widget')) {
            return;
        }
        
        const widget = document.createElement('div');
        widget.className = 'ratatoskr-widget';
        widget.onclick = () => this.togglePanel();
        widget.innerHTML = '<div class="ratatoskr-icon">🐿️</div>';
        
        document.body.appendChild(widget);
    }

    createPanel() {
        // Check if panel already exists
        if (document.querySelector('.progress-panel')) {
            return;
        }
        
        const panel = document.createElement('div');
        panel.className = 'progress-panel';
        panel.id = 'progressPanel';
        panel.innerHTML = `
            <div class="panel-header">
                <span>🌳</span>
                <span>Ratatoskr's Journey</span>
            </div>
            <div class="panel-content">
                <div class="current-time" id="currentTime">8:42 AM</div>
                
                <div class="daily-progress">
                    <div class="progress-label">
                        <span>Daily Progress</span>
                        <span id="progressPercent">25%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="progressFill" style="width: 25%"></div>
                    </div>
                </div>

                <div class="chunks-container" id="chunksContainer">
                    <!-- Chunks will be populated by JavaScript -->
                </div>
            </div>
        `;
        
        document.body.appendChild(panel);
        this.updateChunks();
    }

    bindEvents() {
        // Listen for config changes
        document.addEventListener('cosmos-settings-changed', (e) => {
            if (e.detail.path.startsWith('ratatoskr')) {
                this.settings = this.config.getRatatoskrSettings();
                this.handleSettingChange(e.detail.path, e.detail.value);
            }
            
            if (e.detail.path.startsWith('ui.theme')) {
                this.updateTheme();
            }
        });
        
        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            const panel = document.querySelector('.progress-panel');
            const widget = document.querySelector('.ratatoskr-widget');
            
            if (this.panelVisible && panel && widget && 
                !panel.contains(e.target) && !widget.contains(e.target)) {
                this.togglePanel();
            }
        });
    }

    handleSettingChange(path, value) {
        const setting = path.split('.').pop();
        
        switch (setting) {
            case 'enabled':
                if (value) {
                    this.show();
                    if (!document.querySelector('.ratatoskr-widget')) {
                        this.init();
                    }
                } else {
                    this.hide();
                }
                break;
            case 'position':
                this.updatePosition();
                break;
            case 'chunkDisplayCount':
                this.updateChunks();
                break;
            case 'animationsEnabled':
                this.toggleAnimations(value);
                break;
        }
    }

    updatePosition() {
        const widget = document.querySelector('.ratatoskr-widget');
        if (widget && this.settings) {
            widget.style.right = `${this.settings.position.x}px`;
            widget.style.top = `${this.settings.position.y}px`;
        }
    }

    togglePanel() {
        const panel = document.querySelector('.progress-panel');
        if (!panel) return;
        
        this.panelVisible = !this.panelVisible;
        
        if (this.panelVisible) {
            panel.classList.add('visible');
            this.updateChunks();
        } else {
            panel.classList.remove('visible');
        }
    }

    updateChunks() {
        const container = document.getElementById('chunksContainer');
        if (!container) return;
        
        container.innerHTML = '';
        
        const chunkCount = this.settings ? this.settings.chunkDisplayCount : 4;
        const chunksToShow = this.sampleChunks.slice(0, chunkCount);
        
        chunksToShow.forEach(chunk => {
            const chunkElement = document.createElement('div');
            chunkElement.className = `chunk ${chunk.status}`;
            chunkElement.innerHTML = `
                <div class="chunk-time">${chunk.time}</div>
                <div class="chunk-title">${chunk.title}</div>
                <div class="chunk-status">${this.getStatusIcon(chunk.status)}</div>
            `;
            container.appendChild(chunkElement);
        });
    }

    getStatusIcon(status) {
        switch (status) {
            case 'completed': return '✅';
            case 'current': return '🔄';
            case 'upcoming': return '⏳';
            default: return '❓';
        }
    }

    startTimeUpdates() {
        this.updateTime();
        this.updateProgress();
        
        // Update every minute
        setInterval(() => {
            this.updateTime();
            this.updateProgress();
        }, 60000);
        
        // Update time more frequently for smooth display
        setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        const timeElement = document.getElementById('currentTime');
        if (!timeElement) return;
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: true,
            hour: 'numeric',
            minute: '2-digit'
        });
        timeElement.textContent = timeString;
    }

    updateProgress() {
        // Simulate progress based on time of day
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const totalMinutes = (hours * 60) + minutes;
        
        // School day from 8:00 AM to 3:00 PM (7 hours = 420 minutes)
        const schoolStart = 8 * 60; // 8:00 AM in minutes
        const schoolEnd = 15 * 60;   // 3:00 PM in minutes
        
        let progressPercent = 0;
        if (totalMinutes >= schoolStart && totalMinutes <= schoolEnd) {
            progressPercent = Math.round(((totalMinutes - schoolStart) / (schoolEnd - schoolStart)) * 100);
        } else if (totalMinutes > schoolEnd) {
            progressPercent = 100;
        }
        
        progressPercent = Math.min(Math.max(progressPercent, 0), 100);
        
        const progressPercentElement = document.getElementById('progressPercent');
        const progressFillElement = document.getElementById('progressFill');
        
        if (progressPercentElement) {
            progressPercentElement.textContent = `${progressPercent}%`;
        }
        if (progressFillElement) {
            progressFillElement.style.width = `${progressPercent}%`;
        }
        
        // Update current chunk based on progress
        const chunkIndex = Math.floor((progressPercent / 100) * this.sampleChunks.length);
        this.updateCurrentChunk(chunkIndex);
    }

    updateCurrentChunk(newIndex) {
        if (newIndex !== this.currentChunkIndex && newIndex < this.sampleChunks.length) {
            // Update chunk statuses
            this.sampleChunks.forEach((chunk, index) => {
                if (index < newIndex) {
                    chunk.status = 'completed';
                } else if (index === newIndex) {
                    chunk.status = 'current';
                } else {
                    chunk.status = 'upcoming';
                }
            });
            
            this.currentChunkIndex = newIndex;
            this.updateChunks();
        }
    }

    makeDraggable() {
        const widget = document.querySelector('.ratatoskr-widget');
        if (!widget) return;
        
        let isDragging = false;
        let startX, startY, startRight, startTop;

        widget.addEventListener('mousedown', (e) => {
            if (e.ctrlKey) { // Only drag with Ctrl held
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                startRight = parseInt(widget.style.right) || this.settings.position.x;
                startTop = parseInt(widget.style.top) || this.settings.position.y;
                widget.style.cursor = 'grabbing';
                e.preventDefault();
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = startX - e.clientX;
                const deltaY = e.clientY - startY;
                
                const newRight = Math.max(10, startRight + deltaX);
                const newTop = Math.max(10, startTop + deltaY);
                
                widget.style.right = `${newRight}px`;
                widget.style.top = `${newTop}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                widget.style.cursor = 'pointer';
                
                // Save new position
                if (this.config) {
                    this.config.setRatatoskrSetting('position', {
                        x: parseInt(widget.style.right),
                        y: parseInt(widget.style.top)
                    });
                }
            }
        });
    }

    show() {
        const widget = document.querySelector('.ratatoskr-widget');
        const panel = document.querySelector('.progress-panel');
        if (widget) widget.style.display = 'flex';
        if (panel) panel.style.display = 'block';
    }

    hide() {
        const widget = document.querySelector('.ratatoskr-widget');
        const panel = document.querySelector('.progress-panel');
        if (widget) widget.style.display = 'none';
        if (panel) panel.style.display = 'none';
        this.panelVisible = false;
    }

    toggleAnimations(enabled) {
        const widget = document.querySelector('.ratatoskr-widget');
        const panel = document.querySelector('.progress-panel');
        
        if (enabled) {
            if (widget) widget.style.transition = 'all 0.3s ease';
            if (panel) panel.style.transition = 'transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)';
        } else {
            if (widget) widget.style.transition = 'none';
            if (panel) panel.style.transition = 'none';
        }
    }

    updateTheme() {
        // Theme updates are handled by CSS custom properties
        // This method can be used for theme-specific JavaScript updates if needed
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure CosmosConfig is initialized
    setTimeout(() => {
        if (window.CosmosConfig) {
            window.RatatoskrWidget = new RatatoskrWidget();
        }
    }, 100);
});
