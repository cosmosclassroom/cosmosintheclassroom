---
layout: default
title: "Configuration System Test"
description: "Test page for Cosmos client-side configuration system"
---

# Configuration System Test

This page tests the Cosmos in the Classroom client-side configuration system including:

- **CosmosConfig**: Global settings management
- **ThemeManager**: Light/dark/auto theme switching  
- **Settings Panel**: User interface for customization
- **Ratatoskr Widget**: Progress tracking widget (only shows on lesson/unit pages)

## Instructions

1. **Settings Panel**: Click the ⚙️ icon in the top-left to open settings
2. **Theme Testing**: Try switching between Light, Dark, and Auto themes
3. **Configuration Persistence**: Refresh the page to verify settings persist
4. **Ratatoskr Widget**: This widget only appears on lesson/unit pages (not this test page)

## Current Configuration

<div id="configDisplay" style="background: var(--panel-bg, #f5f5f5); padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid var(--border-color, #ddd);">
    <h3>Loading configuration...</h3>
</div>

## Theme Test Elements

<div style="margin: 20px 0;">
    <h3 style="color: var(--text-primary, #333);">Primary Text Color</h3>
    <p style="color: var(--text-secondary, #666);">Secondary text color for descriptions and less important content.</p>
    <p style="color: var(--text-muted, #999);">Muted text color for hints and placeholder text.</p>
</div>

<div style="background: var(--panel-bg, #fff); padding: 15px; border-radius: 8px; border: 1px solid var(--border-color, #ddd); margin: 20px 0;">
    <h4>Panel Background Test</h4>
    <p>This panel should change background and text colors based on the selected theme.</p>
    <button style="background: var(--accent-color, #8B4513); color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Accent Color Button</button>
</div>

## JavaScript Console

Open the browser console (F12) to see configuration loading and change events. You should see:
- Configuration initialization messages
- Theme change events when switching themes
- Setting change events when modifying preferences

<script>
// Display current configuration
function displayConfig() {
    const configElement = document.getElementById('configDisplay');
    
    if (window.CosmosConfig) {
        const settings = window.CosmosConfig.settings;
        configElement.innerHTML = `
            <h3>Current Configuration</h3>
            <pre style="background: var(--input-bg, #fff); padding: 10px; border-radius: 4px; overflow-x: auto; font-size: 12px;">
${JSON.stringify(settings, null, 2)}
            </pre>
            <p><strong>Storage Key:</strong> ${window.CosmosConfig.storageKey}</p>
            <p><strong>Theme Manager:</strong> ${window.ThemeManager ? 'Loaded' : 'Not Loaded'}</p>
        `;
    } else {
        configElement.innerHTML = `
            <h3>Configuration Not Available</h3>
            <p style="color: red;">CosmosConfig not found. Check console for errors.</p>
        `;
    }
}

// Listen for configuration changes
document.addEventListener('cosmos-settings-changed', (e) => {
    console.log('Configuration changed:', e.detail);
    displayConfig();
});

// Listen for theme changes
document.addEventListener('theme-applied', (e) => {
    console.log('Theme applied:', e.detail);
});

// Display config when loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(displayConfig, 200);
});

// Refresh display every 5 seconds for testing
setInterval(displayConfig, 5000);
</script>
