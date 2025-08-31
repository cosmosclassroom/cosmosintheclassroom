/**
 * Simple JSON Validation Tool for Teachers
 * Validates AI-generated Chunker configurations without requiring technical expertise
 */

class ChunkerConfigValidator {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.info = [];
    }

    validate(jsonString) {
        this.errors = [];
        this.warnings = [];
        this.info = [];

        try {
            const config = JSON.parse(jsonString);
            
            this.validateBasicStructure(config);
            this.validateMetadata(config.metadata);
            this.validateSchedule(config.schedule);
            this.validateWeeks(config.weeks);
            this.validateEducationalLogic(config);
            
            return {
                isValid: this.errors.length === 0,
                errors: this.errors,
                warnings: this.warnings,
                info: this.info,
                config: config
            };
        } catch (error) {
            this.errors.push(`Invalid JSON format: ${error.message}`);
            return {
                isValid: false,
                errors: this.errors,
                warnings: this.warnings,
                info: this.info,
                config: null
            };
        }
    }

    validateBasicStructure(config) {
        const required = ['metadata', 'schedule', 'weeks'];
        required.forEach(field => {
            if (!config[field]) {
                this.errors.push(`Missing required section: ${field}`);
            }
        });

        if (typeof config.weeks !== 'object') {
            this.errors.push('Weeks section must be an object');
        }
    }

    validateMetadata(metadata) {
        if (!metadata) return;

        const required = ['courseName', 'academicYear', 'totalWeeks'];
        required.forEach(field => {
            if (!metadata[field]) {
                this.errors.push(`Missing required metadata: ${field}`);
            }
        });

        // Validate academic year format
        if (metadata.academicYear && !metadata.academicYear.match(/^\d{4}-\d{4}$/)) {
            this.errors.push('Academic year must be in format "2024-2025"');
        }

        // Validate total weeks is reasonable
        if (metadata.totalWeeks) {
            if (metadata.totalWeeks < 8 || metadata.totalWeeks > 52) {
                this.warnings.push(`Total weeks (${metadata.totalWeeks}) seems unusual for a typical course`);
            }
        }

        // Check for reasonable course structure
        if (metadata.instructionalDaysPerWeek > 5) {
            this.warnings.push('More than 5 instructional days per week is unusual');
        }

        if (metadata.minutesPerPeriod && (metadata.minutesPerPeriod < 30 || metadata.minutesPerPeriod > 120)) {
            this.warnings.push(`Period length (${metadata.minutesPerPeriod} minutes) seems unusual`);
        }
    }

    validateSchedule(schedule) {
        if (!schedule) return;

        if (!schedule.startDate || !schedule.endDate) {
            this.errors.push('Schedule must include startDate and endDate');
            return;
        }

        // Validate date formats
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!schedule.startDate.match(dateRegex)) {
            this.errors.push('Start date must be in YYYY-MM-DD format');
        }
        if (!schedule.endDate.match(dateRegex)) {
            this.errors.push('End date must be in YYYY-MM-DD format');
        }

        // Check date logic
        if (schedule.startDate && schedule.endDate) {
            const start = new Date(schedule.startDate);
            const end = new Date(schedule.endDate);
            
            if (start >= end) {
                this.errors.push('Start date must be before end date');
            }

            // Check if academic year length is reasonable
            const diffWeeks = Math.ceil((end - start) / (7 * 24 * 60 * 60 * 1000));
            if (diffWeeks < 20 || diffWeeks > 45) {
                this.warnings.push(`Academic year length (${diffWeeks} weeks) seems unusual`);
            }
        }

        // Validate holidays format
        if (schedule.holidays) {
            schedule.holidays.forEach((holiday, index) => {
                if (!holiday.date || !holiday.name) {
                    this.errors.push(`Holiday ${index + 1} missing date or name`);
                }
                if (holiday.date && !holiday.date.match(dateRegex)) {
                    this.errors.push(`Holiday "${holiday.name}" has invalid date format`);
                }
            });
        }
    }

    validateWeeks(weeks) {
        if (!weeks) return;

        const weekKeys = Object.keys(weeks);
        if (weekKeys.length === 0) {
            this.errors.push('No weeks defined in configuration');
            return;
        }

        // Check week key format
        weekKeys.forEach(key => {
            if (!key.match(/^week_\d+$/)) {
                this.errors.push(`Invalid week key format: ${key} (should be week_1, week_2, etc.)`);
            }
        });

        // Validate individual weeks
        Object.entries(weeks).forEach(([weekKey, week]) => {
            this.validateWeek(weekKey, week);
        });

        // Check sequential numbering
        const weekNumbers = weekKeys
            .map(key => parseInt(key.replace('week_', '')))
            .filter(num => !isNaN(num))
            .sort((a, b) => a - b);

        for (let i = 0; i < weekNumbers.length; i++) {
            if (weekNumbers[i] !== i + 1) {
                this.warnings.push(`Week numbering gap detected: missing week_${i + 1}`);
                break;
            }
        }

        this.info.push(`Configuration includes ${weekKeys.length} weeks`);
    }

    validateWeek(weekKey, week) {
        if (!week) return;

        // Required fields
        const required = ['weekNumber', 'startDate', 'endDate', 'chunks'];
        required.forEach(field => {
            if (week[field] === undefined || week[field] === null) {
                this.errors.push(`Week ${weekKey} missing required field: ${field}`);
            }
        });

        // Validate dates
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (week.startDate && !week.startDate.match(dateRegex)) {
            this.errors.push(`Week ${weekKey} has invalid startDate format`);
        }
        if (week.endDate && !week.endDate.match(dateRegex)) {
            this.errors.push(`Week ${weekKey} has invalid endDate format`);
        }

        // Check date logic
        if (week.startDate && week.endDate) {
            const start = new Date(week.startDate);
            const end = new Date(week.endDate);
            
            if (start >= end) {
                this.errors.push(`Week ${weekKey}: start date must be before end date`);
            }

            // Check if it's actually a week
            const diffDays = Math.ceil((end - start) / (24 * 60 * 60 * 1000));
            if (diffDays < 4 || diffDays > 7) {
                this.warnings.push(`Week ${weekKey} spans ${diffDays} days (unusual for a school week)`);
            }
        }

        // Validate chunks
        if (week.chunks) {
            if (!Array.isArray(week.chunks)) {
                this.errors.push(`Week ${weekKey} chunks must be an array`);
            } else {
                week.chunks.forEach((chunk, index) => {
                    this.validateChunk(weekKey, index, chunk);
                });

                if (week.chunks.length === 0) {
                    this.warnings.push(`Week ${weekKey} has no learning chunks`);
                }
            }
        }

        // Educational content checks
        if (!week.theme && !week.unit) {
            this.warnings.push(`Week ${weekKey} missing theme or unit designation`);
        }

        if (!week.learningObjectives || week.learningObjectives.length === 0) {
            this.warnings.push(`Week ${weekKey} has no learning objectives`);
        }
    }

    validateChunk(weekKey, index, chunk) {
        if (!chunk) return;

        const chunkId = chunk.id || `chunk_${index}`;

        // Required fields
        const required = ['id', 'title', 'day', 'objectives'];
        required.forEach(field => {
            if (!chunk[field]) {
                this.errors.push(`${weekKey} ${chunkId} missing required field: ${field}`);
            }
        });

        // Validate chunk ID format
        if (chunk.id && !chunk.id.match(/^[a-zA-Z0-9_-]+$/)) {
            this.errors.push(`${weekKey} ${chunkId} has invalid ID format (use only letters, numbers, hyphens, underscores)`);
        }

        // Validate day
        const validDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        if (chunk.day && !validDays.includes(chunk.day.toLowerCase())) {
            this.errors.push(`${weekKey} ${chunkId} has invalid day: ${chunk.day}`);
        }

        // Validate duration
        if (chunk.duration) {
            if (chunk.duration < 10 || chunk.duration > 180) {
                this.warnings.push(`${weekKey} ${chunkId} duration (${chunk.duration} min) seems unusual`);
            }
        }

        // Check learning objectives
        if (chunk.objectives) {
            if (!Array.isArray(chunk.objectives)) {
                this.errors.push(`${weekKey} ${chunkId} objectives must be an array`);
            } else if (chunk.objectives.length === 0) {
                this.warnings.push(`${weekKey} ${chunkId} has no learning objectives`);
            } else {
                // Check for measurable objectives
                const measurableVerbs = [
                    'analyze', 'calculate', 'compare', 'create', 'define', 'demonstrate',
                    'describe', 'evaluate', 'explain', 'identify', 'interpret', 'solve'
                ];
                
                const hasMeasurable = chunk.objectives.some(obj => 
                    measurableVerbs.some(verb => obj.toLowerCase().includes(verb))
                );
                
                if (!hasMeasurable) {
                    this.warnings.push(`${weekKey} ${chunkId} objectives may not be measurable (consider using action verbs)`);
                }
            }
        }

        // Validate cognitive load and difficulty
        const validDifficulty = ['introduction', 'practice', 'application', 'synthesis', 'assessment'];
        if (chunk.difficulty && !validDifficulty.includes(chunk.difficulty)) {
            this.errors.push(`${weekKey} ${chunkId} has invalid difficulty level: ${chunk.difficulty}`);
        }

        const validCognitiveLoad = ['low', 'medium', 'high'];
        if (chunk.cognitiveLoad && !validCognitiveLoad.includes(chunk.cognitiveLoad)) {
            this.errors.push(`${weekKey} ${chunkId} has invalid cognitive load: ${chunk.cognitiveLoad}`);
        }
    }

    validateEducationalLogic(config) {
        if (!config.weeks || !config.metadata) return;

        const weeks = Object.values(config.weeks);
        let totalChunks = 0;
        const chunkIds = new Set();
        const dailyChunkCounts = {};
        const dailyCognitiveLoad = {};

        weeks.forEach(week => {
            if (week.chunks) {
                totalChunks += week.chunks.length;
                
                week.chunks.forEach(chunk => {
                    // Check for duplicate chunk IDs
                    if (chunk.id) {
                        if (chunkIds.has(chunk.id)) {
                            this.errors.push(`Duplicate chunk ID: ${chunk.id}`);
                        } else {
                            chunkIds.add(chunk.id);
                        }
                    }

                    // Count chunks per day
                    if (chunk.day) {
                        const dayKey = `${week.weekNumber}_${chunk.day}`;
                        dailyChunkCounts[dayKey] = (dailyChunkCounts[dayKey] || 0) + 1;
                        
                        // Track cognitive load distribution
                        if (chunk.cognitiveLoad) {
                            if (!dailyCognitiveLoad[dayKey]) {
                                dailyCognitiveLoad[dayKey] = { low: 0, medium: 0, high: 0 };
                            }
                            dailyCognitiveLoad[dayKey][chunk.cognitiveLoad]++;
                        }
                    }
                });
            }
        });

        // Check for reasonable chunk distribution
        const avgChunksPerWeek = totalChunks / weeks.length;
        if (avgChunksPerWeek < 3) {
            this.warnings.push(`Low average chunks per week (${avgChunksPerWeek.toFixed(1)}). Consider adding more content.`);
        } else if (avgChunksPerWeek > 10) {
            this.warnings.push(`High average chunks per week (${avgChunksPerWeek.toFixed(1)}). Consider consolidating content.`);
        }

        // Check for days with too many chunks
        Object.entries(dailyChunkCounts).forEach(([dayKey, count]) => {
            if (count > 3) {
                this.warnings.push(`${dayKey} has ${count} chunks (may be too much for one day)`);
            }
        });

        // Validate cognitive load distribution per day
        Object.entries(dailyCognitiveLoad).forEach(([dayKey, loads]) => {
            const totalLoadUnits = loads.low * 1 + loads.medium * 2 + loads.high * 3;
            const highLoadChunks = loads.high;
            
            // Warn about cognitive overload (guideline: max 4-5 cognitive load units per day)
            if (totalLoadUnits > 5) {
                this.warnings.push(`${dayKey} has high cognitive load (${totalLoadUnits} units: ${loads.low} low + ${loads.medium} medium + ${loads.high} high). Consider redistributing content.`);
            }
            
            // Warn about multiple high-load chunks in one day
            if (highLoadChunks > 1) {
                this.warnings.push(`${dayKey} has ${highLoadChunks} high-cognitive-load chunks. Consider spacing these across different days.`);
            }
            
            // Info about balanced days
            if (totalLoadUnits >= 2 && totalLoadUnits <= 4 && highLoadChunks <= 1) {
                this.info.push(`${dayKey} has well-balanced cognitive load (${totalLoadUnits} units)`);
            }
        });

        this.info.push(`Total learning chunks: ${totalChunks}`);
        this.info.push(`Average chunks per week: ${avgChunksPerWeek.toFixed(1)}`);
    }

    generateReport(result) {
        let report = "# Chunker Configuration Validation Report\n\n";

        if (result.isValid) {
            report += "✅ **Configuration is valid and ready to use!**\n\n";
        } else {
            report += "❌ **Configuration has errors that need to be fixed.**\n\n";
        }

        if (result.errors.length > 0) {
            report += "## 🚨 Errors (Must Fix)\n";
            result.errors.forEach(error => {
                report += `- ${error}\n`;
            });
            report += "\n";
        }

        if (result.warnings.length > 0) {
            report += "## ⚠️  Warnings (Recommended to Review)\n";
            result.warnings.forEach(warning => {
                report += `- ${warning}\n`;
            });
            report += "\n";
        }

        if (result.info.length > 0) {
            report += "## ℹ️  Information\n";
            result.info.forEach(info => {
                report += `- ${info}\n`;
            });
            report += "\n";
        }

        if (result.config) {
            report += "## 📊 Configuration Summary\n";
            report += `- **Course**: ${result.config.metadata?.courseName || 'Unknown'}\n`;
            report += `- **Academic Year**: ${result.config.metadata?.academicYear || 'Unknown'}\n`;
            report += `- **Total Weeks**: ${result.config.metadata?.totalWeeks || 'Unknown'}\n`;
            report += `- **Weeks Defined**: ${Object.keys(result.config.weeks || {}).length}\n`;
            
            const totalChunks = Object.values(result.config.weeks || {})
                .reduce((sum, week) => sum + (week.chunks?.length || 0), 0);
            report += `- **Total Learning Chunks**: ${totalChunks}\n`;
        }

        return report;
    }
}

// Export for use in web interface
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChunkerConfigValidator;
} else if (typeof window !== 'undefined') {
    window.ChunkerConfigValidator = ChunkerConfigValidator;
}
