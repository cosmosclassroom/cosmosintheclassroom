# Ratatoskr Widget

## Purpose
Ratatoskr is a modular progress tracking widget for Cosmos in the Classroom. It visualizes curriculum chunks, tracks completion, and integrates with user preferences and curriculum data.

## Architecture
- **ratatoskr-widget.js**: Main widget logic, data integration, event handling
- **ratatoskr.css**: Theme-aware styling for widget UI
- **index.html**: Demo/prototype for development and testing

## Integration Points
- **CosmosConfig**: Central settings and user preferences (theme, accessibility, bookmarks)
- **ChunkerConfigManager**: Curriculum chunk data, schedule, completion status

## Setup & Usage
1. Include `ratatoskr-widget.js` and `ratatoskr.css` in your page or module.
2. Initialize the widget with curriculum and user data sources.
3. Widget updates automatically on data or preference changes.

## Extension & Customization
- Supports drag-and-drop positioning
- Responsive design for classroom devices
- Accessibility modes (high contrast, screen reader labels)
- Customizable via settings panel

## Development Sequence
1. Define requirements and data sources
2. Build core widget logic and UI
3. Integrate with CosmosConfig and ChunkerConfigManager
4. Implement event handling and real-time updates
5. Test in classroom scenarios
6. Document API and integration steps


## Public API

### getSchoolDayStatus()
Returns the current school day status for integration with other systems (e.g., Chunker).

**Signature:**
```js
window.RatatoskrWidget.getSchoolDayStatus()
```
**Returns:**
```
{
	time: string,           // Current time (e.g. '8:42 AM')
	progressPercent: number,// School day progress (0-100)
	currentChunk: object    // Current period/chunk info (id, title, time, status)
}
```

**Example Usage:**
```js
if (window.RatatoskrWidget) {
	const status = window.RatatoskrWidget.getSchoolDayStatus();
	console.log('Current time:', status.time);
	console.log('Progress:', status.progressPercent + '%');
	console.log('Current chunk:', status.currentChunk.title);
}
```

## Contact & Feedback
For issues or feature requests, please use the main project repository or contact the development team.
