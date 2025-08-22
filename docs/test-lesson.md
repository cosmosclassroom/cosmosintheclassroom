---
layout: default
title: "Test Lesson with Ratatoskr"
description: "Test page to verify Ratatoskr widget functionality"
unit: "test"
course: "honors"
---

# Test Lesson with Ratatoskr Widget

This page uses the `lesson` layout, so the Ratatoskr widget should appear in the top-right corner.

## Ratatoskr Widget Features

- **🐿️ Widget Icon**: Click to expand/collapse the progress panel
- **Progress Bar**: Shows daily progress with animated shimmer effect
- **Chunk Tracking**: Displays current, completed, and upcoming chunks
- **Draggable**: Hold Ctrl and drag to reposition the widget
- **Configurable**: Number of chunks shown can be adjusted in settings

## Testing Instructions

1. **Widget Visibility**: Look for the squirrel icon (🐿️) in the top-right corner
2. **Panel Toggle**: Click the widget to open/close the progress panel
3. **Settings Integration**: Open settings (⚙️) to configure Ratatoskr options
4. **Position Dragging**: Hold Ctrl and drag the widget to move it
5. **Theme Switching**: Change themes to see the widget adapt

## Time-Based Simulation

The widget simulates progress based on the current time:
- **8:00 AM - 3:00 PM**: Shows progress through a school day
- **Outside school hours**: Shows 0% or 100% progress
- **Chunks update**: Based on calculated progress percentage

## Configuration Options

The Ratatoskr widget can be configured through the global settings:

- **Enable/Disable**: Turn the widget on or off
- **Chunk Count**: Show 2-6 chunks at a time  
- **Animations**: Enable/disable transitions and effects
- **Position**: Draggable with Ctrl+drag (position saved automatically)

## Sample Physics Content

### Projectile Motion Concepts

Today we're exploring projectile motion, which combines:

1. **Horizontal velocity** (constant)
2. **Vertical acceleration** (due to gravity)
3. **Vector decomposition** of displacement

The trajectory follows a parabolic path described by:

$$y = x \tan(\theta) - \frac{g x^2}{2 v_0^2 \cos^2(\theta)}$$

Where:
- $v_0$ = initial velocity
- $\theta$ = launch angle  
- $g$ = acceleration due to gravity

This content demonstrates how the widget appears alongside actual curriculum material.

<script>
// Test script to log Ratatoskr events
document.addEventListener('DOMContentLoaded', () => {
    console.log('Test lesson page loaded');
    
    // Check if Ratatoskr loaded
    setTimeout(() => {
        if (window.RatatoskrWidget) {
            console.log('✅ Ratatoskr widget loaded successfully');
        } else {
            console.warn('❌ Ratatoskr widget not found');
        }
        
        if (window.CosmosConfig) {
            console.log('✅ CosmosConfig loaded');
            console.log('Ratatoskr enabled:', window.CosmosConfig.get('ratatoskr.enabled'));
        } else {
            console.warn('❌ CosmosConfig not found');
        }
    }, 500);
});
</script>
