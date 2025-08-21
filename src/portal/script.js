function loadCourse(courseJsonPath, container) {
  // If no container provided, try to find it
  if (!container) {
    container = document.getElementById('units-container') || document.body;
  }

  fetch(courseJsonPath)
    .then(res => {
      if (!res.ok) throw new Error('Failed to load course JSON');
      return res.json();
    })
    .then(course => {
      container.innerHTML = ''; // clear loading text

      // Update page title if element exists
      const titleElement = document.getElementById('course-title');
      if (titleElement && course.curriculumTitle) {
        titleElement.textContent = course.curriculumTitle;
      }

      if (!course || !Array.isArray(course.parts)) {
        container.textContent = 'Error: Course JSON is missing "parts" array.';
        return;
      }

      // Create course overview
      const overview = document.createElement('div');
      overview.className = 'course-overview';
      
      // Check if this is standard physics with different data structure
      const isStandardPhysics = courseJsonPath.includes('osephysics');
      
      let overviewHTML = `
        <h2>Course Overview</h2>
        <p><strong>Total Units:</strong> ${course.academic_year.total_core_units}</p>
        <p><strong>Total Days:</strong> ${course.academic_year.total_instructional_days}</p>
        <p><strong>Quarters:</strong> ${course.academic_year.total_marking_quarters}</p>
      `;
      
      // Add schedule info for standard physics if available
      if (isStandardPhysics && course.academic_year.schedule_type) {
        const scheduleInfo = `
          <div class="schedule-info">
            <h3>Schedule Information</h3>
            <p><strong>Schedule Type:</strong> ${course.academic_year.schedule_type}</p>
            <p><strong>Class Meetings:</strong> ${course.academic_year.total_class_meetings || 'N/A'}</p>
            <p><strong>Academic Year:</strong> ${course.academic_year.academic_year || 'Current Year'}</p>
            ${course.academic_year.scheduling_notes ? `
              <p><strong>Notes:</strong> ${course.academic_year.scheduling_notes.rotation_cycle}</p>
              <p><strong>Frequency:</strong> ${course.academic_year.scheduling_notes.class_frequency}</p>
            ` : ''}
          </div>
        `;
        overviewHTML += scheduleInfo;
      }
      
      overview.innerHTML = overviewHTML;
      container.appendChild(overview);

      // Process each part
      course.parts.forEach(part => {
        const partDiv = document.createElement('div');
        partDiv.className = 'course-part';
        
        const partHeader = document.createElement('h2');
        partHeader.textContent = `Part ${part.partNumber}: ${part.partTitle}`;
        partDiv.appendChild(partHeader);

        const partSubtitle = document.createElement('p');
        partSubtitle.textContent = part.partSubtitle;
        partSubtitle.style.fontStyle = 'italic';
        partDiv.appendChild(partSubtitle);

        const unitsContainer = document.createElement('div');
        unitsContainer.className = 'units-container';

        if (part.units && Array.isArray(part.units)) {
          part.units.forEach(unit => {
            const unitDiv = document.createElement('div');
            unitDiv.className = 'unit-card';
            
            // Handle different unit numbering systems (P.1, P.2 vs 1, 2)
            const unitDisplayNumber = isStandardPhysics ? 
              `P.${unit.unitNumber}` : unit.unitNumber;
            
            unitDiv.innerHTML = `
              <h3>Unit ${unitDisplayNumber}: ${unit.title}</h3>
              <p><strong>Core Idea:</strong> ${unit.coreIdea}</p>
              <p><strong>Key Skills:</strong> ${unit.keySkills.join(', ')}</p>
              <p><strong>Phenomenon:</strong> ${unit.anchoringPhenomenon}</p>
              <p><strong>Cross-cutting Concepts:</strong> ${unit.crosscuttingLenses.join(', ')}</p>
              <div class="unit-actions">
                <button onclick="startUnit(${unit.unitNumber})">Start Unit</button>
                <button onclick="viewUnitDetails(${unit.unitNumber})">View Details</button>
              </div>
            `;
            
            unitsContainer.appendChild(unitDiv);
          });
        } else {
          const noUnits = document.createElement('p');
          noUnits.textContent = 'No units found for this part.';
          unitsContainer.appendChild(noUnits);
        }

        partDiv.appendChild(unitsContainer);
        container.appendChild(partDiv);
      });

      // Add quarterly breakdown if available
      if (course.quarterly_breakdown) {
        const quarterlyDiv = document.createElement('div');
        quarterlyDiv.className = 'quarterly-breakdown';
        quarterlyDiv.innerHTML = '<h2>Quarterly Breakdown</h2>';
        
        course.quarterly_breakdown.forEach(quarter => {
          const quarterCard = document.createElement('div');
          quarterCard.className = 'quarter-card';
          
          // Handle different data structures for quarterly info
          let daysInfo;
          if (quarter.instructional_days && quarter.class_meetings) {
            daysInfo = `${quarter.instructional_days} instructional days, ${quarter.class_meetings} class meetings`;
          } else {
            daysInfo = `${quarter.days} days`;
          }
            
          quarterCard.innerHTML = `
            <h3>${quarter.quarter} (${daysInfo})</h3>
            <ul>
              ${quarter.units_covered.map(unit => `<li>${unit.unit_name}</li>`).join('')}
            </ul>
          `;
          quarterlyDiv.appendChild(quarterCard);
        });
        
        container.appendChild(quarterlyDiv);
      }

    })
    .catch(err => {
      console.error(err);
      container.textContent = 'Error loading course: ' + err.message;
    });
}

function startUnit(unitNumber) {
  alert(`Starting Unit ${unitNumber}. This would navigate to the unit content page.`);
  // TODO: Navigate to actual unit page
  // window.location.href = `./units/unit${unitNumber}/index.html`;
}

function viewUnitDetails(unitNumber) {
  alert(`Viewing details for Unit ${unitNumber}. This would show expanded unit information.`);
  // TODO: Show detailed unit information modal or page
}

// Component loading system
class ComponentLoader {
  constructor() {
    this.cache = new Map();
  }

  async loadComponent(componentPath, targetSelector, useCache = true) {
    try {
      let html;
      
      if (useCache && this.cache.has(componentPath)) {
        html = this.cache.get(componentPath);
      } else {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
        html = await response.text();
        
        if (useCache) {
          this.cache.set(componentPath, html);
        }
      }
      
      const target = document.querySelector(targetSelector);
      if (target) {
        target.innerHTML = html;
        this.initializeComponentScripts(target);
      }
    } catch (error) {
      console.error(`Error loading component ${componentPath}:`, error);
    }
  }

  initializeComponentScripts(container) {
    // Re-run any scripts in the loaded component
    const scripts = container.querySelectorAll('script');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      newScript.textContent = script.textContent;
      script.parentNode.replaceChild(newScript, script);
    });
  }

  async loadSharedComponents() {
    const basePath = './shared';
    await Promise.all([
      this.loadComponent(`${basePath}/header.html`, '#header-placeholder'),
      this.loadComponent(`${basePath}/navigation.html`, '#nav-placeholder'),
      this.loadComponent(`${basePath}/footer.html`, '#footer-placeholder')
    ]);
  }
}

// Initialize component loader
const componentLoader = new ComponentLoader();

// Update existing DOMContentLoaded handler
document.addEventListener('DOMContentLoaded', async function() {
  // Load shared components first
  await componentLoader.loadSharedComponents();
  
  // Then load course-specific content
  loadCourse('./admin/physics.json');
});

