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
const currentStatus = document.getElementById("profile-status");

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

function updateProgressStatus() {
    if (completeCounter < 4) {
        currentStatus.innerHTML = "Profile Status: Poor";
    } else if (completeCounter >= 4 && completeCounter <= 7) {
        currentStatus.innerHTML = "Profile Status: Decent";
    } else if (completeCounter > 7 && completeCounter <= 9) {
        currentStatus.innerHTML = "Profile Status: Good";
    } else if (completeCounter > 9) {
        currentStatus.innerHTML = "Profile Status: Excellent";
    }
}

// Used a lot later so made this a function
function showSkipMessage() {
    alert("SKIPPED!\nYou may do this later");
}

function isValidUsername(username) {

    if (username.length < 8) {
        return false;
    }
    
    if (username.includes(' ')) {
        return false;
    }
    
    let hasUpper = false;
    let hasLower = false;
    let hasSpecial = false;
    let hasNumber = false;
    
    const specialChars = ['!', '@', '#', '$', '%', '*'];
    
    for (let i = 0; i < username.length; i++) {
        let char = username[i];

        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        }
        else if (char >= 'a' && char <= 'z') {
            hasLower = true;
        }
        else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
        else if (specialChars.includes(char)) {
            hasSpecial = true;
        }
    }
    
    return hasUpper && hasLower && hasSpecial && hasNumber;
}


// Function to enter the value || Also checks if something was already input before
function enterValue(field) {
    const promptText = fieldConfig[field];
    if (!promptText) return;

    const existingValue = userData[field];
    let message = promptText;

    if (existingValue && existingValue !== "") {
        message = `${promptText}\n\nCurrent Value: ${existingValue}\nEnter new value to update:`;
    }

    let value = prompt(message, existingValue || defaultMessage);

    if (value === null) {
        showSkipMessage();
        return;
    }

    if (value.trim() === "" || value === defaultMessage) {
        showSkipMessage();
        return;
    }

    if (field === "username") {
        if (!isValidUsername(value.trim())) {
            alert("Invalid Username!\n\nUsername must meet ALL requirements:\n✓ At least 8 characters long\n✓ At least one uppercase letter (A-Z)\n✓ At least one lowercase letter (a-z)\n✓ At least one number (0-9)\n✓ At least one special character (! @ # $ % *)\n✗ No spaces allowed\n\nPlease try again.");
            return;
        }
    }

    const trimmedValue = value.trim();
    userData[field] = trimmedValue;

    const buttonElement = document.getElementById(field);
    if (buttonElement) {
        buttonElement.textContent = trimmedValue;
    }

    if (!existingValue || existingValue === "") {
        completeCounter++;
        updateProgressBar();
        updateProgressStatus();
    } else if (existingValue !== trimmedValue) {
        alert("Value updated successfully!");
    }
}