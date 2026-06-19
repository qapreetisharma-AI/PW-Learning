// Function to launch browser using if-else
function launchBrowser(browserName) {

    if (browserName.toLowerCase() == "chrome") {
        console.log("Launching Chrome Browser");
    } else {
        console.log("Launching Other Browser");
    }
}

// Function to run tests using switch case
function runTests(testType) {

    switch (testType.toLowerCase()) {

        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Smoke Tests");
    }
}

// Calling the functions
launchBrowser("chrome");

runTests("regression");