// Global variable
const browserVersion = "Chrome";

function getBrowserVersion() {

    if (browserVersion == "Chrome") {

        // Local variable using var
        var browserVersion = "Firefox";

        console.log("Inside block:", browserVersion);
    }

    // Accessible outside block because of var
    console.log("Outside block:", browserVersion);
}

getBrowserVersion();

//replace var with let
// Global variable
// Global variable
const browserName = "Chrome";

function getBrowserVersion() {

    let browserName = "Firefox";

    console.log("Inside block:", browserName);
}

getBrowserVersion();