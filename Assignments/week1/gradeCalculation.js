// Function to calculate grade using switch statement
function calculateGrade(score) {

    switch (true) {

        case (score >= 90 && score <= 100):
            return "Grade A";

        case (score >= 75 && score < 90):
            return "Grade B";

        case (score >= 50 && score < 75):
            return "Grade C";

        case (score >= 35 && score < 50):
            return "Grade D";

        case (score >= 0 && score < 35):
            return "Fail";

        default:
            return "Invalid Score";
    }
}

// Declare and initialize the variable
let studentScore = 72;

// Call the function and print the result
console.log(calculateGrade(studentScore));