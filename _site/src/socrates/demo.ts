/**
 * Example usage of Socrates Research Brief Generator
 */

import { ResearchBriefGenerator } from './core/structure-manager';
import { TeacherInput } from './types/index';

// Example teacher input
const exampleInput: TeacherInput = {
  topic: "Electromagnetic Induction and Energy Transfer",
  grade: "10",
  duration: 90, // 90 minutes
  ngssStandards: [
    "HS-PS3-3", // Apply scientific principles to design and evaluate a device that minimizes energy transfer
    "HS-PS3-5"  // Develop and use a model of two objects interacting through electric or magnetic fields
  ],
  selectedPractices: [
    "asking-questions",
    "developing-models", 
    "planning-investigations",
    "analyzing-data"
  ],
  voicePreferences: {
    socrates: 30,
    burke: 20,
    sagan: 25,
    feynman: 25
  },
  specialRequirements: "Focus on hands-on experimentation with simple materials",
  studentPopulation: {
    totalStudents: 24,
    englishLearners: 3,
    specialNeeds: 2,
    advancedLearners: 4,
    notes: "Mixed ability class with strong interest in practical applications"
  }
};

// Usage example
async function demonstrateSocrates() {
  console.log("🧠 Socrates Research Brief Generator Demo");
  console.log("========================================");
  
  const generator = new ResearchBriefGenerator();
  
  try {
    // Generate AI prompt for external processing
    console.log("\n1. Generating AI Prompt...");
    const aiPrompt = await generator.generateAIPrompt(exampleInput);
    
    console.log("✅ AI Prompt Generated Successfully!");
    console.log(`   Model: ${aiPrompt.model}`);
    console.log(`   Temperature: ${aiPrompt.temperature}`);
    console.log(`   Chunks: ${aiPrompt.chunkAllocation.length}`);
    
    // Generate complete research brief structure
    console.log("\n2. Generating Research Brief Structure...");
    const researchBrief = await generator.generateResearchBrief(exampleInput);
    
    console.log("✅ Research Brief Generated Successfully!");
    console.log(`   Title: ${researchBrief.title}`);
    console.log(`   Duration: ${researchBrief.duration} minutes`);
    console.log(`   Chunks: ${researchBrief.chunks.length}`);
    console.log(`   NGSS Practices: ${researchBrief.ngssAlignment.practices.join(', ')}`);
    
    // Export prompt for Claude
    console.log("\n3. Exporting Prompt for Claude...");
    const claudePrompt = await generator.exportPromptForAI(exampleInput, 'claude');
    
    console.log("✅ Claude Prompt Ready!");
    console.log(`   Length: ${claudePrompt.length} characters`);
    
    // Show processing status
    console.log("\n4. Final Status:");
    const status = generator.getStatus();
    console.log(`   Stage: ${status.stage}`);
    console.log(`   Progress: ${status.progress}%`);
    console.log(`   Message: ${status.message}`);
    
    return {
      aiPrompt,
      researchBrief,
      claudePrompt,
      status
    };
    
  } catch (error) {
    console.error("❌ Error:", error instanceof Error ? error.message : error);
    throw error;
  }
}

// Export for testing
export { demonstrateSocrates, exampleInput };

// Self-executing demo (commented out for safety)
// demonstrateSocrates().then(() => {
//   console.log("\n🎉 Demo completed successfully!");
// }).catch(error => {
//   console.error("\n💥 Demo failed:", error);
// });
