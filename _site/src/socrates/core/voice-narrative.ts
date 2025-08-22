/**
 * Voice Narrative Generator
 * 
 * Generates navigation text and guidance using the four-voice synthesis:
 * Socrates (questioning), Burke (storytelling), Sagan (wonder), Feynman (playfulness)
 */

export interface VoiceProfile {
  primary: 'socrates' | 'burke' | 'sagan' | 'feynman';
  secondary?: ('socrates' | 'burke' | 'sagan' | 'feynman')[];
  tone: 'inquiry' | 'discovery' | 'analytical' | 'playful' | 'contemplative';
  complexity: 'middle-school' | 'high-school' | 'college' | 'graduate';
  customPhrases?: {
    welcomeMessage?: string;
    encouragementPhrases?: string[];
    transitionPhrases?: string[];
    completionMessages?: string[];
  };
}

export interface NavigationText {
  welcomeMessage: string;
  phaseIntroductions: Record<string, string>;
  elementInstructions: Record<string, string>;
  transitionGuidance: Record<string, string>;
  encouragementMessages: string[];
  reflectionPrompts: Record<string, string>;
}

export class VoiceNarrative {
  private voiceTemplates: Record<string, VoiceTemplates>;

  constructor() {
    this.voiceTemplates = {
      socrates: {
        welcomeFormats: [
          "What questions will guide our investigation today?",
          "Let us begin by examining what we think we know, and what we might discover.",
          "The unexamined phenomenon is not worth studying. What shall we question first?"
        ],
        transitionFormats: [
          "Having explored {previous}, what new questions arise about {next}?",
          "Now that we've examined {previous}, how might {next} illuminate our understanding?",
          "What connections do you see between {previous} and {next}?"
        ],
        encouragementFormats: [
          "Your questioning reveals the mind of a true inquirer.",
          "These observations show you're thinking deeply about the problem.",
          "The questions you're asking are exactly what a scientist should explore."
        ]
      },
      burke: {
        welcomeFormats: [
          "Every great discovery begins with a story. What story will your investigation tell?",
          "We are about to embark on a journey of discovery. Every step will add to your narrative.",
          "Like all good stories, our investigation has a beginning, middle, and end. Let's begin."
        ],
        transitionFormats: [
          "Our story moves from {previous} to {next}, each chapter building on the last.",
          "Having set the stage with {previous}, we now turn to the next chapter: {next}.",
          "The plot thickens as we move from {previous} to explore {next}."
        ],
        encouragementFormats: [
          "Your observations are weaving a compelling scientific narrative.",
          "You're building a story that would make any scientist proud.",
          "The details you're capturing will make this investigation memorable."
        ]
      },
      sagan: {
        welcomeFormats: [
          "We are about to explore something extraordinary. The universe has secrets to share.",
          "In this investigation, we'll witness the cosmic dance played out in the smallest details.",
          "Every observation we make connects us to the grand story of the cosmos."
        ],
        transitionFormats: [
          "From {previous}, we voyage deeper into the mysteries of {next}.",
          "Having glimpsed the wonder of {previous}, we now explore the marvels of {next}.",
          "Our journey from {previous} to {next} reveals new layers of cosmic beauty."
        ],
        encouragementFormats: [
          "Your sense of wonder is leading you to genuine scientific insights.",
          "You're seeing the extraordinary in what others might consider ordinary.",
          "Your observations capture the profound beauty of natural phenomena."
        ]
      },
      feynman: {
        welcomeFormats: [
          "Let's have some fun figuring this out! What do you think is really going on here?",
          "Time to play with some ideas and see what happens. Ready to get your hands dirty?",
          "The best way to understand something is to play around with it. Let's experiment!"
        ],
        transitionFormats: [
          "Now that we've played with {previous}, let's see what happens when we explore {next}!",
          "Having had fun with {previous}, it's time to get curious about {next}.",
          "From our explorations of {previous}, let's see what surprises {next} has in store."
        ],
        encouragementFormats: [
          "Now you're getting the hang of thinking like a physicist!",
          "That's exactly the kind of playful curiosity that leads to breakthroughs.",
          "Your approach shows you understand that science is about having fun with ideas."
        ]
      }
    };
  }

  /**
   * Generate complete navigation text for a structure
   */
  async generateNavigationText(structure: any, voiceProfile: VoiceProfile): Promise<NavigationText> {
    const primaryVoice = this.voiceTemplates[voiceProfile.primary];
    
    return {
      welcomeMessage: this.generateWelcomeMessage(structure, voiceProfile, primaryVoice),
      phaseIntroductions: this.generatePhaseIntroductions(structure, voiceProfile),
      elementInstructions: this.generateElementInstructions(structure, voiceProfile),
      transitionGuidance: this.generateTransitionGuidance(structure, voiceProfile),
      encouragementMessages: this.generateEncouragementMessages(voiceProfile, primaryVoice),
      reflectionPrompts: this.generateReflectionPrompts(structure, voiceProfile)
    };
  }

  /**
   * Generate welcome message for the structure
   */
  private generateWelcomeMessage(structure: any, profile: VoiceProfile, voice: VoiceTemplates): string {
    if (profile.customPhrases?.welcomeMessage) {
      return profile.customPhrases.welcomeMessage;
    }

    const template = this.selectRandomTemplate(voice.welcomeFormats);
    return this.adaptToComplexity(template, profile.complexity);
  }

  /**
   * Generate introduction text for each phase
   */
  private generatePhaseIntroductions(structure: any, profile: VoiceProfile): Record<string, string> {
    const introductions: Record<string, string> = {};
    const voice = this.voiceTemplates[profile.primary];

    structure.parts.forEach((part: any) => {
      const template = this.selectRandomTemplate(voice.welcomeFormats);
      introductions[part.partId] = this.adaptToComplexity(
        template.replace(/{topic}/g, part.name),
        profile.complexity
      );
    });

    return introductions;
  }

  /**
   * Generate specific instructions for each element
   */
  private generateElementInstructions(structure: any, profile: VoiceProfile): Record<string, string> {
    const instructions: Record<string, string> = {};
    const voice = this.voiceTemplates[profile.primary];

    structure.parts.forEach((part: any) => {
      part.elements.forEach((element: any) => {
        instructions[element.elementId] = this.generateElementSpecificInstruction(
          element,
          voice,
          profile
        );
      });
    });

    return instructions;
  }

  /**
   * Generate transition guidance between phases and elements
   */
  private generateTransitionGuidance(structure: any, profile: VoiceProfile): Record<string, string> {
    const transitions: Record<string, string> = {};
    const voice = this.voiceTemplates[profile.primary];

    for (let i = 0; i < structure.parts.length - 1; i++) {
      const current = structure.parts[i];
      const next = structure.parts[i + 1];
      
      const template = this.selectRandomTemplate(voice.transitionFormats);
      const transitionKey = `${current.partId}-to-${next.partId}`;
      
      transitions[transitionKey] = this.adaptToComplexity(
        template
          .replace(/{previous}/g, current.name)
          .replace(/{next}/g, next.name),
        profile.complexity
      );
    }

    return transitions;
  }

  /**
   * Generate encouragement messages
   */
  private generateEncouragementMessages(profile: VoiceProfile, voice: VoiceTemplates): string[] {
    if (profile.customPhrases?.encouragementPhrases) {
      return profile.customPhrases.encouragementPhrases;
    }

    return voice.encouragementFormats.map(format => 
      this.adaptToComplexity(format, profile.complexity)
    );
  }

  /**
   * Generate reflection prompts for metacognitive elements
   */
  private generateReflectionPrompts(structure: any, profile: VoiceProfile): Record<string, string> {
    const prompts: Record<string, string> = {};
    
    structure.parts.forEach((part: any) => {
      part.elements.forEach((element: any) => {
        if (element.ngssTag === 'metacognitive') {
          prompts[element.elementId] = this.generateMetacognitivePrompt(
            element,
            profile
          );
        }
      });
    });

    return prompts;
  }

  /**
   * Generate element-specific instruction based on type and NGSS tag
   */
  private generateElementSpecificInstruction(element: any, voice: VoiceTemplates, profile: VoiceProfile): string {
    const baseInstructions: Record<string, string> = {
      observation: "Examine carefully and record what you notice.",
      'question-generation': "Let your curiosity guide you to meaningful questions.",
      'hypothesis-formation': "Based on your observations, what do you predict will happen?",
      'data-collection': "Gather evidence systematically and thoughtfully.",
      analysis: "Look for patterns and connections in your data.",
      reflection: "Consider what you've learned and how your thinking has evolved.",
      prediction: "Use your understanding to forecast what might occur.",
      comparison: "Examine similarities and differences between phenomena.",
      synthesis: "Connect the pieces to form a complete understanding.",
      evaluation: "Assess the strength of your evidence and conclusions."
    };

    let instruction = baseInstructions[element.type] || "Engage with this element thoughtfully.";
    
    // Add voice-specific flavor
    if (profile.primary === 'socrates') {
      instruction = `What questions arise as you ${instruction.toLowerCase()}`;
    } else if (profile.primary === 'feynman') {
      instruction = `Let's have fun as we ${instruction.toLowerCase()}`;
    } else if (profile.primary === 'sagan') {
      instruction = `Wonder at the cosmos as you ${instruction.toLowerCase()}`;
    } else if (profile.primary === 'burke') {
      instruction = `Add to your story as you ${instruction.toLowerCase()}`;
    }

    return this.adaptToComplexity(instruction, profile.complexity);
  }

  /**
   * Generate metacognitive reflection prompt
   */
  private generateMetacognitivePrompt(element: any, profile: VoiceProfile): string {
    const prompts: Record<string, string[]> = {
      socrates: [
        "What questions has this investigation raised for you?",
        "How has your understanding changed through this process?",
        "What assumptions did you question during this investigation?"
      ],
      burke: [
        "How would you tell the story of this investigation to someone else?",
        "What were the key turning points in your understanding?",
        "How does this investigation connect to other stories you know?"
      ],
      sagan: [
        "What sense of wonder did this investigation inspire?",
        "How does this small investigation connect to larger cosmic principles?",
        "What beauty did you discover in this phenomenon?"
      ],
      feynman: [
        "What was the most fun part of figuring this out?",
        "If you had to explain this to a friend, how would you do it?",
        "What would you want to play with next to understand this better?"
      ]
    };

    const voicePrompts = prompts[profile.primary] || prompts.socrates;
    const selectedPrompt = this.selectRandomTemplate(voicePrompts);
    
    return this.adaptToComplexity(selectedPrompt, profile.complexity);
  }

  /**
   * Adapt language complexity to student level
   */
  private adaptToComplexity(text: string, complexity: string): string {
    // Simple adaptation based on complexity level
    switch (complexity) {
      case 'middle-school':
        return text
          .replace(/phenomenon/g, 'thing')
          .replace(/investigate/g, 'explore')
          .replace(/hypothesis/g, 'prediction')
          .replace(/synthesize/g, 'put together');
      
      case 'high-school':
        return text; // Keep as is
      
      case 'college':
        return text
          .replace(/thing/g, 'phenomenon')
          .replace(/look at/g, 'analyze')
          .replace(/find out/g, 'investigate');
      
      case 'graduate':
        return text
          .replace(/explore/g, 'investigate systematically')
          .replace(/understand/g, 'comprehend the underlying mechanisms');
      
      default:
        return text;
    }
  }

  /**
   * Select random template from array
   */
  private selectRandomTemplate(templates: string[]): string {
    return templates[Math.floor(Math.random() * templates.length)];
  }

  /**
   * Blend multiple voices (for secondary voice integration)
   */
  blendVoices(primary: string, secondary: string[], content: string): string {
    // Simple blending - could be more sophisticated
    let blended = content;
    
    secondary.forEach(voice => {
      if (voice === 'socrates' && !blended.includes('?')) {
        blended += " What do you think?";
      } else if (voice === 'feynman' && !blended.includes('fun')) {
        blended = blended.replace(/explore/g, 'play with');
      } else if (voice === 'sagan' && !blended.includes('wonder')) {
        blended = "Notice the wonder as " + blended.toLowerCase();
      }
    });
    
    return blended;
  }
}

interface VoiceTemplates {
  welcomeFormats: string[];
  transitionFormats: string[];
  encouragementFormats: string[];
}
