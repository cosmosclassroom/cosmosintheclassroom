function loadCourse(courseJsonPath, container) {
  fetch(courseJsonPath)
    .then(res => {
      if (!res.ok) throw new Error('Failed to load course JSON');
      return res.json();
    })
    .then(course => {
      container.innerHTML = ''; // clear loading text

      if (!course || !Array.isArray(course.units)) {
        container.textContent = 'Error: Course JSON is missing "units" array.';
        return;
      }

      course.units.forEach(unit => {
        const unitDiv = document.createElement('div');
        const unitHeader = document.createElement('h2');
        unitHeader.textContent = unit.name;
        unitDiv.appendChild(unitHeader);

        const chapterUl = document.createElement('ul');
        if (unit.chapters && Array.isArray(unit.chapters)) {
          unit.chapters.forEach(chapter => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${chapter.flexbookPath}" target="_blank">${chapter.title}</a>`;
            chapterUl.appendChild(li);
          });
        } else {
          const li = document.createElement('li');
          li.textContent = 'No chapters found.';
          chapterUl.appendChild(li);
        }

        unitDiv.appendChild(chapterUl);
        container.appendChild(unitDiv);
      });
    })
    .catch(err => {
      console.error(err);
      container.textContent = 'Error loading course: ' + err;
    });
}

