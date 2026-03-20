let completeCounter = 0;

let nameP, usernameP, roleP;
const currentProgressBar = document.getElementById("progress-bar");
const currentProgress = document.getElementById("progress-message");
const promptName = document.getElementById("prompt-name");
const promptUsernameName = document.getElementById("prompt-username");
const promptRole = document.getElementById("prompt-role");

function isAlreadyInput(field) {
    return field.innerHTML.split(':')[1]?.trim() ? true : false;
}

function updateProgressBar() {
    // get the number bit and then set it with the counter
    currentProgress.innerHTML = `Current Progress: ${completeCounter}/10`;
    // increasing the width of the bar
    currentProgressBar.style.width = `${completeCounter * 10}%`;

}

function startPDPrompt() {
    if (!isAlreadyInput(promptName)) {
        nameP = prompt("What is your full name?", "Name Here");
        if (nameP && nameP.trim() !== "" && nameP !== "Name Here") {
            promptName.innerHTML += nameP;
            completeCounter++;
        } else {
            alert("SKIPPED!\nYou many do this later");
        }
    }
    if (!isAlreadyInput(promptUsernameName)) {
        usernameP = prompt("What is your username?", "Username Here");
        if (usernameP && usernameP.trim() !== "" && usernameP !== "Name Here") {
            promptUsernameName.innerHTML += usernameP;
            completeCounter++;
        } else {
            alert("SKIPPED!\nYou many do this later");
        }
    }
    if (!isAlreadyInput(promptRole)) {
        roleP = prompt("What is your role?", "Role Here");
        if (roleP && roleP.trim() !== "" && roleP !== "Name Here") {
            promptRole.innerHTML += roleP;
            completeCounter++;
        } else {
            alert("SKIPPED!\nYou many do this later");
        }
    }

    updateProgressBar();
}