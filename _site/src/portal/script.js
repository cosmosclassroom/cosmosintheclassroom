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
      overview.innerHTML = `
        <h2>Course Overview</h2>
        <p><strong>Total Units:</strong> ${course.academic_year.total_core_units}</p>
        <p><strong>Total Days:</strong> ${course.academic_year.total_instructional_days}</p>
        <p><strong>Quarters:</strong> ${course.academic_year.total_marking_quarters}</p>
      `;
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
            
            unitDiv.innerHTML = `
              <h3>Unit ${unit.unitNumber}: ${unit.title}</h3>
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
          quarterCard.innerHTML = `
            <h3>${quarter.quarter} (${quarter.days} days)</h3>
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

