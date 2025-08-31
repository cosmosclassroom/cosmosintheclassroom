/**
 * Portal Status Check & Diagnostics
 * Quick diagnostic tool to check portal functionality
 */

class PortalStatusChecker {
    constructor() {
        this.results = {
            scripts: {},
            data: {},
            ui: {},
            functionality: {}
        };
    }

    async runFullDiagnostic() {
        console.log('🔍 Starting Portal Diagnostic...');
        
        await this.checkScripts();
        await this.checkDataFiles();
        await this.checkUIElements();
        await this.checkFunctionality();
        
        this.displayResults();
        return this.results;
    }

    async checkScripts() {
        console.log('📋 Checking JavaScript modules...');
        
        const requiredScripts = [
            'window.logEvent',
            'window.researchBriefManager',
            'window.portalBriefIntegration',
            'window.PortalManager'
        ];

        requiredScripts.forEach(script => {
            const exists = this.checkGlobalVariable(script);
            this.results.scripts[script] = exists ? '✅' : '❌';
        });
    }

    async checkDataFiles() {
        console.log('📊 Checking data availability...');
        
        const dataFiles = [
            '/data/research-briefs-index.json',
            '/data/research-briefs-config.json',
            '/library/research-briefs/phenomena/phenomena_001.json',
            '/library/research-briefs/applications/applications_001.json'
        ];

        for (const file of dataFiles) {
            try {
                const response = await fetch(file);
                this.results.data[file] = response.ok ? '✅' : '❌';
            } catch (error) {
                this.results.data[file] = '❌';
            }
        }
    }

    checkUIElements() {
        console.log('🎨 Checking UI elements...');
        
        const requiredElements = [
            '#greeting',
            '#nameInputSection', 
            '#course-list',
            '#research-briefs-section',
            '.quick-access',
            '.nav-dropdown'
        ];

        requiredElements.forEach(selector => {
            const element = document.querySelector(selector);
            this.results.ui[selector] = element ? '✅' : '❌';
        });
    }

    async checkFunctionality() {
        console.log('⚙️ Checking functionality...');
        
        // Check research brief manager
        if (window.researchBriefManager) {
            this.results.functionality['Research Brief Manager'] = 
                window.researchBriefManager.initialized ? '✅' : '❌';
        } else {
            this.results.functionality['Research Brief Manager'] = '❌';
        }

        // Check data loading
        try {
            if (window.researchBriefManager && window.researchBriefManager.briefsIndex) {
                const briefCount = window.researchBriefManager.briefsIndex.total_briefs;
                this.results.functionality['Research Briefs Loaded'] = 
                    briefCount > 0 ? `✅ (${briefCount} briefs)` : '❌';
            } else {
                this.results.functionality['Research Briefs Loaded'] = '❌';
            }
        } catch (error) {
            this.results.functionality['Research Briefs Loaded'] = '❌';
        }

        // Check course loading
        try {
            const courseList = document.getElementById('course-list');
            const hasContent = courseList && courseList.children.length > 0;
            this.results.functionality['Course Loading'] = hasContent ? '✅' : '❌';
        } catch (error) {
            this.results.functionality['Course Loading'] = '❌';
        }
    }

    checkGlobalVariable(path) {
        const parts = path.split('.');
        let current = window;
        
        for (const part of parts) {
            if (current && typeof current === 'object' && part in current) {
                current = current[part];
            } else {
                return false;
            }
        }
        
        return current !== undefined;
    }

    displayResults() {
        console.log('\n📋 Portal Diagnostic Results');
        console.log('=====================================');
        
        console.log('\n🔧 Scripts:');
        Object.entries(this.results.scripts).forEach(([script, status]) => {
            console.log(`  ${status} ${script}`);
        });
        
        console.log('\n📊 Data Files:');
        Object.entries(this.results.data).forEach(([file, status]) => {
            console.log(`  ${status} ${file}`);
        });
        
        console.log('\n🎨 UI Elements:');
        Object.entries(this.results.ui).forEach(([element, status]) => {
            console.log(`  ${status} ${element}`);
        });
        
        console.log('\n⚙️ Functionality:');
        Object.entries(this.results.functionality).forEach(([func, status]) => {
            console.log(`  ${status} ${func}`);
        });
        
        // Summary
        const allGood = Object.values(this.results).every(category => 
            Object.values(category).every(status => status.startsWith('✅'))
        );
        
        console.log('\n📊 Overall Status: ' + (allGood ? '✅ All Systems Operational' : '⚠️ Issues Detected'));
        
        return this.results;
    }

    async quickFix() {
        console.log('🔧 Attempting quick fixes...');
        
        // Initialize missing systems
        if (!window.researchBriefManager || !window.researchBriefManager.initialized) {
            console.log('Initializing Research Brief Manager...');
            try {
                if (window.researchBriefManager) {
                    await window.researchBriefManager.init();
                }
            } catch (error) {
                console.error('Failed to initialize Research Brief Manager:', error);
            }
        }

        // Check for missing research briefs section
        if (!document.getElementById('research-briefs-section')) {
            console.log('Adding Research Briefs section...');
            if (window.portalBriefIntegration) {
                window.portalBriefIntegration.addBriefsToMainPortal();
            }
        }

        // Re-run diagnostic
        await this.runFullDiagnostic();
    }
}

// Create global status checker
window.portalStatusChecker = new PortalStatusChecker();

// Auto-run diagnostic when page loads
document.addEventListener('DOMContentLoaded', async () => {
    // Wait a moment for other scripts to load
    setTimeout(async () => {
        await window.portalStatusChecker.runFullDiagnostic();
        
        // Auto-attempt fixes if issues found
        const hasIssues = Object.values(window.portalStatusChecker.results).some(category => 
            Object.values(category).some(status => status.startsWith('❌'))
        );
        
        if (hasIssues) {
            console.log('🔧 Issues detected, attempting auto-fix...');
            await window.portalStatusChecker.quickFix();
        }
    }, 2000);
});

// Add manual diagnostic button to page
document.addEventListener('DOMContentLoaded', () => {
    const diagnosticButton = document.createElement('button');
    diagnosticButton.textContent = '🔍 Run Diagnostic';
    diagnosticButton.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 9999;
        padding: 8px 12px;
        background: #007acc;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
    `;
    diagnosticButton.onclick = () => window.portalStatusChecker.runFullDiagnostic();
    document.body.appendChild(diagnosticButton);
});
