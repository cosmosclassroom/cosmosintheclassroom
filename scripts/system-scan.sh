#!/bin/bash
# System Scanning Workflow
# Systematically check Portal → Chunker → Socrates → Library

echo "🔍 Starting System Scanning Workflow..."
echo "======================================"

# Portal Check
echo "📱 1. PORTAL STATUS CHECK"
echo "Opening portal interface..."
echo "URL: file:///d:/python/Jupyter/build/cosmosintheclassroom/src/portal/index.html"
echo "- Check diagnostic button (top right)"
echo "- Verify research briefs section appears"
echo "- Test navigation links"
echo "- Check mobile responsiveness"
echo ""

# Chunker Check  
echo "🔧 2. CHUNKER STATUS CHECK"
echo "Opening chunker interface..."
echo "URL: file:///d:/python/Jupyter/build/cosmosintheclassroom/src/Chunker/ui/chunker.html"
echo "- Test content processing functionality"
echo "- Check AI integration points"
echo "- Verify output formatting"
echo "- Test error handling"
echo ""

# Socrates Check
echo "🤖 3. SOCRATES STATUS CHECK" 
echo "Opening Socrates kitchen..."
echo "URL: file:///d:/python/Jupyter/build/cosmosintheclassroom/src/socrates/socratic-kitchen.html"
echo "- Test template library access"
echo "- Check prompt building"
echo "- Verify content generation"
echo "- Test research brief workflow"
echo ""

# Library Check
echo "📚 4. LIBRARY STATUS CHECK"
echo "Opening library interface..."
echo "URL: file:///d:/python/Jupyter/build/cosmosintheclassroom/ref/index.html"
echo "- Check content organization"
echo "- Test search functionality" 
echo "- Verify research brief connections"
echo "- Check navigation structure"
echo ""

echo "🎯 SCANNING PRIORITIES:"
echo "1. Fix any broken portal navigation"
echo "2. Verify research brief integration works"
echo "3. Test chunker content processing"
echo "4. Check Socrates generation workflow"
echo "5. Assess library integration needs"
echo ""

echo "✅ COMPLETION CRITERIA:"
echo "- All UIs load without errors"
echo "- Navigation works between systems"
echo "- Research briefs display properly"
echo "- Content generation functional"
echo ""

echo "📋 Use diagnostic tools and browser console to identify specific issues"
echo "Report findings in SYSTEM_STATUS_REPORT.md"
