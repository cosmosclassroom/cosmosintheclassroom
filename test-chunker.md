---
layout: default
title: "Chunker Configuration Test"
description: "Test page for real-time curriculum scheduling system"
---

# Chunker Configuration System Test

This page demonstrates the real-time curriculum scheduling and teacher adjustment system.

## 🎯 Features

- **Real-time adjustments**: Click +/- buttons to shift chunks by 15 minutes
- **Content editing**: Click edit button to modify chunk content and duration
- **Persistent tracking**: All changes are tracked for export and planning
- **Export functionality**: Export daily changes or planning templates

## 📅 Today's Schedule

<div id="chunkerControls">
    <div class="loading-message">Loading chunker controls...</div>
</div>

## 🛠️ Configuration Panel

<div class="config-panel">
    <h3>Active Class Configuration</h3>
    <div class="class-config">
        <div class="config-row">
            <label for="courseSelect">Course:</label>
            <select id="courseSelect">
                <option value="physics">Physics</option>
                <option value="natural-disasters">Natural Disasters</option>
            </select>
        </div>
        <div class="config-row">
            <label for="levelSelect">Level:</label>
            <select id="levelSelect">
                <option value="honors">Honors</option>
                <option value="standard">Standard</option>
            </select>
        </div>
        <div class="config-row">
            <label for="periodInput">Period:</label>
            <input type="text" id="periodInput" placeholder="e.g. 3rd, A, 1st" maxlength="10">
        </div>
        <div class="config-row">
            <label for="teacherInput">Teacher:</label>
            <input type="text" id="teacherInput" placeholder="Teacher name" maxlength="50">
        </div>
        <button onclick="updateClassConfig()" class="config-btn">Update Class</button>
    </div>
</div>

## 📊 Current Configuration

<div id="chunkerConfigDisplay" class="config-display">
    <p>Loading configuration...</p>
</div>

<style>
/* Page-specific styles */
.loading-message {
    text-align: center;
    padding: 40px;
    color: var(--text-secondary, #666);
    font-style: italic;
}

.config-panel {
    background: var(--panel-bg-solid, #ffffff);
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    border: 1px solid var(--border-color, #e0e0e0);
}

.config-panel h3 {
    margin-top: 0;
    color: var(--text-primary, #333);
}

.class-config {
    display: grid;
    gap: 15px;
}

.config-row {
    display: flex;
    align-items: center;
    gap: 10px;
}

.config-row label {
    min-width: 80px;
    font-weight: 600;
    color: var(--text-primary, #333);
}

.config-row select,
.config-row input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid var(--border-color, #ddd);
    border-radius: 6px;
    font-size: 14px;
}

.config-btn {
    background: var(--accent-color, #8B4513);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.2s ease;
}

.config-btn:hover {
    background: var(--accent-hover, #A0522D);
}

.config-display {
    background: var(--panel-bg, #f5f5f5);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid var(--border-color, #ddd);
    margin: 20px 0;
}

.config-display pre {
    background: var(--input-bg, #fff);
    padding: 15px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 12px;
    border: 1px solid var(--border-color, #ddd);
}

@media (max-width: 768px) {
    .config-row {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .config-row label {
        min-width: auto;
    }
    
    .config-row select,
    .config-row input {
        width: 100%;
    }
}
</style>

<script>
// Sample chunk data for testing
const sampleChunks = [
    {
        id: "chunk03_review",
        title: "1D Kinematics Review", 
        time: "8:15-8:30",
        duration: 15,
        status: "completed",
        type: "review"
    },
    {
        id: "chunk03_vectors",
        title: "Vector Decomposition",
        time: "8:30-8:50", 
        duration: 20,
        status: "current",
        type: "lecture"
    },
    {
        id: "chunk03_practice",
        title: "Vector Practice Problems",
        time: "8:50-9:05",
        duration: 15, 
        status: "upcoming",
        type: "practice"
    },
    {
        id: "chunk03_lab_setup",
        title: "Lab Setup & Safety",
        time: "9:05-9:15",
        duration: 10,
        status: "upcoming", 
        type: "lab_prep"
    },
    {
        id: "chunk03_lab_procedure", 
        title: "Projectile Motion Data Collection",
        time: "9:15-9:40",
        duration: 25,
        status: "upcoming",
        type: "lab"
    },
    {
        id: "chunk03_lab_analysis",
        title: "Initial Data Analysis", 
        time: "9:40-9:55",
        duration: 15,
        status: "upcoming",
        type: "analysis"
    }
];

// Initialize chunker test
function initializeChunkerTest() {
    console.log('Initializing Chunker test...');
    
    // Check if ChunkerConfigManager is available
    if (window.ChunkerConfigManager && window.chunkerPanel) {
        console.log('✅ Chunker system loaded');
        
        // Load sample data
        window.chunkerPanel.renderChunkControls(sampleChunks);
        
        // Load current class config
        loadClassConfig();
        
        // Display current configuration
        displayChunkerConfig();
        
    } else {
        console.warn('❌ Chunker system not loaded');
        document.getElementById('chunkerControls').innerHTML = `
            <div class="error-message" style="text-align: center; padding: 40px; color: #f44336;">
                <h4>Chunker System Not Available</h4>
                <p>The chunker configuration system requires the supporting JavaScript files.</p>
                <p>Expected files:</p>
                <ul style="text-align: left; display: inline-block;">
                    <li>/src/Chunker/config/chunker-config-manager.js</li>
                    <li>/src/Chunker/config/chunker-control-panel.js</li>
                    <li>/src/Chunker/css/chunker-controls.css</li>
                </ul>
            </div>
        `;
    }
}

function loadClassConfig() {
    if (!window.CosmosConfig) return;
    
    const classConfig = window.CosmosConfig.getChunkerSettings().currentClass;
    
    document.getElementById('courseSelect').value = classConfig.course || 'physics';
    document.getElementById('levelSelect').value = classConfig.level || 'honors';
    document.getElementById('periodInput').value = classConfig.period || '';
    document.getElementById('teacherInput').value = classConfig.teacher || '';
}

function updateClassConfig() {
    if (!window.CosmosConfig) return;
    
    const course = document.getElementById('courseSelect').value;
    const level = document.getElementById('levelSelect').value; 
    const period = document.getElementById('periodInput').value.trim();
    const teacher = document.getElementById('teacherInput').value.trim();
    
    window.CosmosConfig.setActiveClass(course, level, period, teacher);
    
    console.log('Class configuration updated:', { course, level, period, teacher });
    
    // Show notification
    if (window.chunkerPanel) {
        window.chunkerPanel.showNotification('Class configuration updated!', 'success');
    }
    
    displayChunkerConfig();
}

function displayChunkerConfig() {
    const display = document.getElementById('chunkerConfigDisplay');
    
    if (window.CosmosConfig && window.ChunkerConfigManager) {
        const cosmosConfig = window.CosmosConfig.getChunkerSettings();
        const chunkerConfig = {
            cosmos: cosmosConfig,
            activeClassId: window.CosmosConfig.getActiveClassId(),
            liveSession: window.ChunkerConfigManager.liveSession,
            totalChanges: window.ChunkerConfigManager.changes.size
        };
        
        display.innerHTML = `
            <h4>Configuration Status</h4>
            <pre>${JSON.stringify(chunkerConfig, null, 2)}</pre>
            <div style="margin-top: 15px;">
                <strong>Status:</strong> Chunker system operational<br>
                <strong>Active Class:</strong> ${chunkerConfig.activeClassId || 'Not configured'}<br>
                <strong>Live Changes:</strong> ${chunkerConfig.totalChanges} adjustments tracked
            </div>
        `;
    } else {
        display.innerHTML = `
            <h4>Configuration Not Available</h4>
            <p style="color: #f44336;">CosmosConfig or ChunkerConfigManager not loaded.</p>
        `;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Delay to ensure all scripts are loaded
    setTimeout(initializeChunkerTest, 300);
});

// Listen for configuration changes
document.addEventListener('cosmos-settings-changed', (e) => {
    if (e.detail.path.startsWith('chunker.')) {
        console.log('Chunker config changed:', e.detail);
        displayChunkerConfig();
    }
});

document.addEventListener('chunker-config-changed', (e) => {
    console.log('Chunker internal change:', e.detail);
    displayChunkerConfig();
});

// Refresh display every 10 seconds for testing
setInterval(displayChunkerConfig, 10000);
</script>

<!-- Include Chunker CSS -->
<link rel="stylesheet" href="{{ '/src/Chunker/css/chunker-controls.css' | relative_url }}">

<!-- Include Chunker JavaScript -->
<script src="{{ '/src/Chunker/config/chunker-config-manager.js' | relative_url }}" defer></script>
<script src="{{ '/src/Chunker/config/chunker-control-panel.js' | relative_url }}" defer></script>
