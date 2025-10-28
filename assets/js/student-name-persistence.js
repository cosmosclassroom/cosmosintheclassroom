/**
 * Persistent Student Name - localStorage
 * Saves and retrieves student name across sessions
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get student name input field
    const studentNameInput = document.getElementById('student-name-quick');
    
    if (studentNameInput) {
        // Retrieve name from localStorage if available
        const savedName = localStorage.getItem('studentName');
        if (savedName) {
            studentNameInput.value = savedName;
        }
        
        // Save name to localStorage when changed
        studentNameInput.addEventListener('change', function() {
            const name = studentNameInput.value.trim();
            if (name) {
                localStorage.setItem('studentName', name);
                console.log('Student name saved:', name);
                
                // Update any other name fields on the page
                const otherNameFields = document.querySelectorAll('input[name="StudentName"]:not(#student-name-quick)');
                otherNameFields.forEach(field => {
                    field.value = name;
                });
            }
        });
        
        // Also update when field loses focus (better UX)
        studentNameInput.addEventListener('blur', function() {
            const name = studentNameInput.value.trim();
            if (name) {
                localStorage.setItem('studentName', name);
            }
        });
        
        console.log('Student name persistence initialized');
    }
});