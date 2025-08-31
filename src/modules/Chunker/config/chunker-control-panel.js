// ChunkerControlPanel - UI for real-time chunk adjustments
// Provides teacher interface for +/- timing adjustments and content editing

class ChunkerControlPanel {
    constructor(configManager) {
        this.configManager = configManager;
        this.currentChunks = [];
        this.adjustmentHistory = [];
        
        this.bindEvents();
    }

    // ===== CHUNK DISPLAY =====

    renderChunkControls(chunks) {
        this.currentChunks = chunks;
        const container = document.getElementById('chunkerControls');
        
        if (!container) {
            console.warn('Chunker controls container not found');
            return;
        }

        container.innerHTML = `
            <div class="chunker-panel">
                <div class="chunker-header">
                    <h3>📅 Today's Schedule</h3>
                    <div class="chunker-date">${this.formatDate(new Date())}</div>
                </div>
                <div class="chunks-list">
                    ${chunks.map(chunk => this.renderChunk(chunk)).join('')}
                </div>
                <div class="chunker-actions">
                    ${this.renderActionButtons()}
                </div>
            </div>
        `;

        this.attachEventListeners();
    }

    renderChunk(chunk) {
        const adjustments = this.configManager.getTodayAdjustments();
        const timeShift = adjustments.timeShifts[chunk.id]?.shift || 0;
        const contentOverride = adjustments.contentOverrides[chunk.id];
        
        const adjustedTime = this.calculateAdjustedTime(chunk.time, timeShift);
        const displayContent = contentOverride?.newContent || chunk.title;
        const hasAdjustments = timeShift !== 0 || contentOverride;

        return `
            <div class="chunk-item ${chunk.status} ${hasAdjustments ? 'adjusted' : ''}" data-chunk-id="${chunk.id}">
                <div class="chunk-main">
                    <div class="chunk-time-controls">
                        <button class="time-btn minus" onclick="chunkerPanel.adjustChunk('${chunk.id}', -15)" title="Move back 15 minutes">
                            ⏪
                        </button>
                        <div class="chunk-time">
                            <span class="original-time ${timeShift !== 0 ? 'modified' : ''}">${chunk.time}</span>
                            ${timeShift !== 0 ? `<span class="adjusted-time">${adjustedTime}</span>` : ''}
                            ${timeShift !== 0 ? `<span class="shift-indicator">${timeShift > 0 ? '+' : ''}${timeShift}min</span>` : ''}
                        </div>
                        <button class="time-btn plus" onclick="chunkerPanel.adjustChunk('${chunk.id}', +15)" title="Move ahead 15 minutes">
                            ⏩
                        </button>
                    </div>
                    
                    <div class="chunk-content">
                        <div class="chunk-title ${contentOverride ? 'modified' : ''}">
                            ${displayContent}
                        </div>
                        ${contentOverride ? `<div class="original-content">Originally: ${chunk.title}</div>` : ''}
                    </div>
                    
                    <div class="chunk-controls">
                        <button class="edit-btn" onclick="chunkerPanel.editChunkContent('${chunk.id}')" title="Edit content">
                            ✏️
                        </button>
                        ${hasAdjustments ? `<button class="reset-btn" onclick="chunkerPanel.resetChunk('${chunk.id}')" title="Reset changes">↺</button>` : ''}
                    </div>
                </div>
                
                <div class="chunk-status-bar">
                    <span class="status-indicator ${chunk.status}">${this.getStatusIcon(chunk.status)}</span>
                    <span class="chunk-duration">${chunk.duration || 15}min</span>
                </div>
            </div>
        `;
    }

    renderActionButtons() {
        const hasChanges = this.configManager.changes.size > 0;
        
        return `
            <button class="action-btn primary" onclick="chunkerPanel.exportToday()" ${!hasChanges ? 'disabled' : ''}>
                📤 Export Today's Changes
            </button>
            <button class="action-btn secondary" onclick="chunkerPanel.exportForPlanning()">
                📋 Export for Next Year
            </button>
            <button class="action-btn tertiary" onclick="chunkerPanel.showAdjustmentHistory()">
                📊 View Adjustment History
            </button>
            ${hasChanges ? `<button class="action-btn danger" onclick="chunkerPanel.resetToday()">🔄 Reset Today</button>` : ''}
        `;
    }

    // ===== CHUNK ADJUSTMENTS =====

    adjustChunk(chunkId, minutes) {
        this.configManager.adjustChunkTiming(chunkId, minutes);
        this.showAdjustmentNotification(chunkId, minutes);
        this.refreshChunkDisplay(chunkId);
        this.addToHistory('time_adjustment', { chunkId, minutes });
    }

    editChunkContent(chunkId) {
        const chunk = this.currentChunks.find(c => c.id === chunkId);
        if (!chunk) return;

        const currentContent = this.configManager.getTodayAdjustments().contentOverrides[chunkId]?.newContent || chunk.title;
        const currentDuration = this.configManager.getTodayAdjustments().contentOverrides[chunkId]?.duration || chunk.duration || 15;

        const modal = this.createEditModal(chunkId, currentContent, currentDuration);
        document.body.appendChild(modal);
    }

    resetChunk(chunkId) {
        if (confirm('Reset all changes to this chunk?')) {
            const today = this.configManager.getCurrentDate();
            
            // Remove from live session
            if (this.configManager.liveSession.timeShifts[today]) {
                delete this.configManager.liveSession.timeShifts[today][chunkId];
            }
            if (this.configManager.liveSession.contentOverrides[today]) {
                delete this.configManager.liveSession.contentOverrides[today][chunkId];
            }
            
            // Remove from change tracking
            this.configManager.changes.delete(`${today}-${chunkId}-time`);
            this.configManager.changes.delete(`${today}-${chunkId}-content`);
            
            this.configManager.saveLiveSession();
            this.refreshChunkDisplay(chunkId);
            this.addToHistory('reset', { chunkId });
        }
    }

    // ===== UI HELPERS =====

    createEditModal(chunkId, currentContent, currentDuration) {
        const modal = document.createElement('div');
        modal.className = 'chunker-modal-overlay';
        modal.innerHTML = `
            <div class="chunker-modal">
                <div class="modal-header">
                    <h3>Edit Chunk Content</h3>
                    <button class="modal-close" onclick="this.closest('.chunker-modal-overlay').remove()">×</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="chunkContent">Content:</label>
                        <input type="text" id="chunkContent" value="${currentContent}" placeholder="Enter chunk content...">
                    </div>
                    <div class="form-group">
                        <label for="chunkDuration">Duration (minutes):</label>
                        <input type="number" id="chunkDuration" value="${currentDuration}" min="5" max="60" step="5">
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn secondary" onclick="this.closest('.chunker-modal-overlay').remove()">Cancel</button>
                    <button class="btn primary" onclick="chunkerPanel.saveChunkEdit('${chunkId}')">Save Changes</button>
                </div>
            </div>
        `;
        
        return modal;
    }

    saveChunkEdit(chunkId) {
        const modal = document.querySelector('.chunker-modal-overlay');
        const newContent = document.getElementById('chunkContent').value.trim();
        const newDuration = parseInt(document.getElementById('chunkDuration').value);
        
        if (newContent) {
            this.configManager.editChunkContent(chunkId, newContent, newDuration);
            this.refreshChunkDisplay(chunkId);
            this.addToHistory('content_edit', { chunkId, newContent, newDuration });
        }
        
        modal.remove();
    }

    refreshChunkDisplay(chunkId) {
        const chunkElement = document.querySelector(`[data-chunk-id="${chunkId}"]`);
        if (chunkElement) {
            const chunk = this.currentChunks.find(c => c.id === chunkId);
            if (chunk) {
                chunkElement.outerHTML = this.renderChunk(chunk);
                this.attachEventListeners();
            }
        }
        
        // Update action buttons
        const actionsContainer = document.querySelector('.chunker-actions');
        if (actionsContainer) {
            actionsContainer.innerHTML = this.renderActionButtons();
        }
    }

    showAdjustmentNotification(chunkId, minutes) {
        const direction = minutes > 0 ? 'ahead' : 'behind';
        const amount = Math.abs(minutes);
        const message = `Moved ${direction} ${amount} minutes`;
        
        this.showNotification(message, 'success');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `chunker-notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // ===== EXPORT FUNCTIONS =====

    exportToday() {
        const exportData = this.configManager.exportUpdatedCurriculum('detailed');
        this.downloadFile(exportData, `curriculum-adjustments-${this.configManager.getCurrentDate()}.json`);
        this.showNotification('Today\'s changes exported successfully!', 'success');
    }

    exportForPlanning() {
        const planningData = this.configManager.exportForNextYear();
        this.downloadFile(planningData, `planning-template-${this.configManager.classConfig.classId}.json`);
        this.showNotification('Planning template exported successfully!', 'success');
    }

    showAdjustmentHistory() {
        const historyModal = this.createHistoryModal();
        document.body.appendChild(historyModal);
    }

    createHistoryModal() {
        const modal = document.createElement('div');
        modal.className = 'chunker-modal-overlay';
        
        const summary = this.configManager.getAdjustmentsSummary();
        const weeklyStats = this.configManager.calculateWeeklyStats();
        
        modal.innerHTML = `
            <div class="chunker-modal large">
                <div class="modal-header">
                    <h3>📊 Adjustment History</h3>
                    <button class="modal-close" onclick="this.closest('.chunker-modal-overlay').remove()">×</button>
                </div>
                <div class="modal-body">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-number">${summary.totalAdjustments}</div>
                            <div class="stat-label">Total Adjustments</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">${summary.timeShifts}</div>
                            <div class="stat-label">Time Shifts</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">${summary.contentChanges}</div>
                            <div class="stat-label">Content Changes</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">${summary.datesModified.length}</div>
                            <div class="stat-label">Days Modified</div>
                        </div>
                    </div>
                    <div class="history-details">
                        <h4>Recent Adjustments</h4>
                        <div class="history-list">
                            ${this.adjustmentHistory.slice(-10).reverse().map(item => `
                                <div class="history-item">
                                    <span class="history-time">${this.formatTime(item.timestamp)}</span>
                                    <span class="history-action">${item.action}</span>
                                    <span class="history-details">${item.details}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn primary" onclick="this.closest('.chunker-modal-overlay').remove()">Close</button>
                </div>
            </div>
        `;
        
        return modal;
    }

    resetToday() {
        if (confirm('Reset all changes made today? This cannot be undone.')) {
            const today = this.configManager.getCurrentDate();
            
            // Clear today's adjustments
            delete this.configManager.liveSession.timeShifts[today];
            delete this.configManager.liveSession.contentOverrides[today];
            
            // Remove from change tracking
            for (const [key] of this.configManager.changes) {
                if (key.startsWith(today)) {
                    this.configManager.changes.delete(key);
                }
            }
            
            this.configManager.saveLiveSession();
            this.renderChunkControls(this.currentChunks);
            this.addToHistory('reset_day', { date: today });
            this.showNotification('All today\'s changes have been reset', 'success');
        }
    }

    // ===== UTILITY FUNCTIONS =====

    calculateAdjustedTime(originalTime, shiftMinutes) {
        if (shiftMinutes === 0) return originalTime;
        
        const [start, end] = originalTime.split('-');
        const adjustedStart = this.addMinutesToTime(start, shiftMinutes);
        const adjustedEnd = this.addMinutesToTime(end, shiftMinutes);
        
        return `${adjustedStart}-${adjustedEnd}`;
    }

    addMinutesToTime(timeStr, minutes) {
        const [hours, mins] = timeStr.split(':').map(Number);
        const totalMinutes = hours * 60 + mins + minutes;
        
        const newHours = Math.floor(totalMinutes / 60);
        const newMins = totalMinutes % 60;
        
        return `${newHours}:${newMins.toString().padStart(2, '0')}`;
    }

    getStatusIcon(status) {
        switch (status) {
            case 'completed': return '✅';
            case 'current': return '🔄';
            case 'upcoming': return '⏳';
            default: return '❓';
        }
    }

    formatDate(date) {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric', 
            month: 'long',
            day: 'numeric'
        });
    }

    formatTime(timestamp) {
        return new Date(timestamp).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    downloadFile(content, filename) {
        const blob = new Blob([content], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    addToHistory(action, details) {
        this.adjustmentHistory.push({
            timestamp: Date.now(),
            action: action,
            details: JSON.stringify(details)
        });
        
        // Keep only last 50 items
        if (this.adjustmentHistory.length > 50) {
            this.adjustmentHistory = this.adjustmentHistory.slice(-50);
        }
    }

    // ===== EVENT BINDING =====

    bindEvents() {
        document.addEventListener('chunker-config-changed', (e) => {
            console.log('Chunker config changed:', e.detail);
            // Handle config changes if needed
        });
        
        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('chunker-modal-overlay')) {
                e.target.remove();
            }
        });
    }

    attachEventListeners() {
        // Event listeners are attached via onclick attributes in HTML
        // This method can be used for additional event binding if needed
    }
}

// Initialize when ChunkerConfigManager is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (window.ChunkerConfigManager) {
            window.chunkerPanel = new ChunkerControlPanel(window.ChunkerConfigManager);
            console.log('ChunkerControlPanel initialized');
        }
    }, 200);
});
