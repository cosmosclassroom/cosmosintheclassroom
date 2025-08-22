Ratatoskr.md is a widget that lives at cosmosintheclassroom.org
It provides real-time updates and monitoring of the progression of the day as a blok

The squirrel pops up in the main window, but begins closed. tapping presents the user with a beautiful and simple frame that shows the current date, the current time, rotational day and progress through the school day. each daily class is represented by blok consisting of 4 chunks, with the chunks showing progress through the day. It is a simple version of community.html.

there is a tiny widget on the popup that, when clicked, tells a brief story of ratatoskr from norse mythology and how it connects to time. The whole purpose of ratatoskr is to keep an eye on the time so students and teachers don't have to.

Ratatoskr Widget Development Sequence
1. Requirements & Planning
Define widget purpose: progress tracking, chunk visualization, curriculum integration.
Identify data sources: CosmosConfig, ChunkerConfigManager, curriculum JSON.
2. Core Architecture
Create ratatoskr-widget.js for main logic.
Structure widget for modularity: initialization, data fetch, rendering, event handling.
3. Data Integration
Implement methods to fetch current chunk, completed chunks, and schedule from ChunkerConfigManager.
Connect to CosmosConfig for user preferences (theme, accessibility, progress).
4. UI/UX Implementation
Build widget UI in HTML/CSS (ratatoskr.css), ensuring theme compatibility.
Visualize chunks: current, completed, upcoming.
Add drag-and-drop positioning and responsive design.
5. Event Handling
Listen for changes in CosmosConfig (settings, bookmarks).
Update widget in real-time as curriculum or user data changes.
6. Accessibility & Personalization
Support accessibility modes (high contrast, screen reader labels).
Allow user customization via settings panel.
7. Testing & Validation
Unit test data integration and UI rendering.
Validate widget in various classroom scenarios (different schedules, user roles).
8. Documentation & Deployment
Document API, configuration, and integration steps.
Update README and integration roadmap.
Deploy widget and collect user feedback for future improvements.
