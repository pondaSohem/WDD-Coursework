// Variables and Constants

let completeCounter = 0;
const defaultMessage = "Enter Here";

let userData = {
    name: "", username: "", role: "",
    topic: "", education: "", learning: "",
    contribution: "", challenge: "", goal: "", resource: ""
};

// DOM Elements
const currentProgressBar = document.getElementById("progress-bar");
const currentProgress = document.getElementById("progress-message");

// Mapping of field IDs to their prompts
const fieldConfig = {
    // Personal Details
    "name": "What is your full name?",
    "username": "What is your username?",
    "role": "What is your role?",
    // Preferences
    "topic-pref": "What subject or topic are you most passionate about?",
    "curr-level": "What is your current education level?",
    "learning-res": "What learning resource do you use most often?",
    // Goals/Contributions
    "contribution": "How would you like to contribute to quality education?",
    "challenge": "What is one educational challenge you want to help solve?",
    "learning-goal": "What is your personal learning goal?",
    "resource": "What resource can you offer to improve education access?",
};

// Update progress bar's colour and progress
function updateProgressBar() {
    // get the number bit and then set it with the counter
    currentProgress.innerHTML = `Current Progress: ${completeCounter}/10`;
    // increasing the width of the bar
    currentProgressBar.style.width = `${completeCounter * 10}%`; // Update the progress
    currentProgressBar.style.backgroundColor = `hsl(${completeCounter * 10}, 100%, 50%)`; // Update colour from red to green
}

// Used a lot later so made this a function
function showSkipMessage() {
    alert("SKIPPED!\nYou may do this later");
}

// WIP
function isValidUsername(username) {
    const checks = {
        hasUpper : false,
        hasLower : false,
        hasSpecial : false,
        hasNumber : false,
        hasNoSpace : username.includes(' '),
    }

    // helper functions

    const isUpper = (char) => {
        return char === char.toUpperCase() && char !== char.toLowerCase();
    }

    const isLower = (char) => {
        return char === char.toLowerCase() && char !== char.toUpperCase();
    }

    const isDigit = (char) => {
        return /^\d$/.test(char);
    }

    const special = [
        '!', '@', '#', '$', '%', '*',
    ];

    for (let i = 0; i < username.length; i++) {
        let thisChar = username[i];
        switch (thisChar) {
            case isUpper(thisChar):
                checks.hasUpper = true;
                break;
            case isLower(thisChar):
                checks.hasLower = true;
                break;
            case special.includes(thisChar):
                checks.hasSpecial = true;
                break;
            case isDigit(thisChar):
                checks.hasNumber = true;
                break;
            default:
                continue;
        }
    }

    return Object.values(checks).every(value => value === true) ? true : false;
}

// Function to enter the value || Also checks if something was already input before
function enterValue(field) {
    const promptText = fieldConfig[field];
    if (!promptText) return; // Exit if there is no existing prompt

    const existingValue = userData[field];
    let message = promptText; // If there is already an existing value, the new message will be prompt

    if (existingValue && existingValue !== "") {
        message = `${promptText}\n\nEnter Value to Update:`
    }

    const value = prompt(message, existingValue || defaultMessage); // If got existing value, display else display the defaultMessage

    if (value && value.trim() !== "" && value !== defaultMessage) {
        // Storing
        userData[field] = value.trim();
        // Updating Value and Progress Bar
        document.getElementById(field).textContent = value.trim();
        if (!existingValue || existingValue === "") {
            completeCounter++;
            updateProgressBar();
        }
    } else if (value !== null && existingValue && existingValue !== "") {
        alert("Keeping original value!");
    } else {
        showSkipMessage();
    }

    if (field === "username") {
        console.log(isValidUsername(value));
    }   
}

