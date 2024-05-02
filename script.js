let courses = [];

function addCourse() {
    const gradeInput = document.getElementById('grade');
    const creditsInput = document.getElementById('credits');

    const grade = gradeInput.value.toUpperCase();
    const credits = parseInt(creditsInput.value);

    if (isNaN(credits) || credits <= 0 || grade === '') {
        alert('Please enter valid values.');
        return;
    }

    courses.push({ grade, credits });

    const historyList = document.getElementById('history');
    const listItem = document.createElement('li');
    listItem.textContent = `Grade: ${grade}, Credits: ${credits}`;
    historyList.appendChild(listItem);

    gradeInput.value = '';
    creditsInput.value = '';
}

function calculateGPA() {
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        const grade = course.grade;
        const credits = course.credits;

        let gradePoint;

        switch (grade) {
            case 'A':
                gradePoint = 4.0;
                break;
            case 'B':
                gradePoint = 3.0;
                break;
            case 'C':
                gradePoint = 2.0;
                break;
            case 'D':
                gradePoint = 1.0;
                break;
            case 'F':
                gradePoint = 0.0;
                break;
            default:
                gradePoint = 0.0;
        }

        totalGradePoints += gradePoint * credits;
        totalCredits += credits;
    }

    if (totalCredits === 0) {
        alert('Please add courses to calculate GPA.');
        return;
    }

    const gpa = totalGradePoints / totalCredits;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your GPA is: ${gpa.toFixed(2)}`;

    courses = [];
    const historyList = document.getElementById('history');
    historyList.innerHTML = '';
}
