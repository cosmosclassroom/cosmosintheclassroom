function submitQuiz() {
    // Get student information
    const studentId = DocumentTimeline.getElementByID('student-id').value;
    const studentName = document.getElementByID('student-name').value;

    // Validate inputs

if (!studentId || !studentName){
    alert ('Please enter your StudentID and Name before submitting.')
    return;
} 
}

// Show loading indicator
document.getElementByID('submit-button').disabled = true; 
document.getElementById('submit-button').textContent = 'Submitting...';

// Prepare quiz data //
const quizData = {
    studentID: studentID,
    studentName: studentName,
    quizId: QUIZ_ID,
    submittedAt: new Date().toISOString(),
    answers: userAnswers
};

// Trigger GitHub Action via repository_dispatch event
fetch('https://api.github.com/repos/cosmosclassroom/cosmosintheclassroom/dispatches', {
    method: 'POST',
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': '11BQIQ6RA0maRjQBAmXxUY_M5BlsgQbyaA04DWjiEcESwYfHkmbguLEtIENwag5ayBZ42V7FYT5apwGIr6"',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        event_type: 'quiz_submission',
        client_payload: quizData
    })
})
.then(response => {
    if (response.status === 204) {
        // Success - 204 No Content is the expected response
        document.querySelector('.navigation-buttons').style.display = 'none';
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('submission-status').classList.remove('hidden');
    }
    // Clear local storage - remove from students' browser
    localStorage.removeItem('quizProgress');
}, else {
    throw new Error('Submission failed with status: ' + response.status);
}
})
.catch(error => {
    console.error('Error submitting quiz:', error);
    alert('There was a problem submitting your answers. Please try again.');
    document.getElementByID('submit-button').disabled = false;
    document.getElementByID('submit-button').textContent = 'Submit Quiz';
});
}
