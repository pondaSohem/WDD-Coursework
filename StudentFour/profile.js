// Variables and Constants

let completeCounter = 0;
const defaultMessage = "Enter Here";

let nameP, usernameP, roleP;
let topicP, educationP, learningP;
let contributionP, challengeP, goalP, resourceP;
const currentProgressBar = document.getElementById("progress-bar");
const currentProgress = document.getElementById("progress-message");
const promptName = document.getElementById("prompt-name");
const promptUsernameName = document.getElementById("prompt-username");
const promptRole = document.getElementById("prompt-role");
const promptTopic = document.getElementById("prompt-topic-pref");
const promptEducationLevel = document.getElementById("prompt-curr-level");
const promptLearningRes = document.getElementById("prompt-learning-res");
const promptContribution = document.getElementById("prompt-contribution");
const promptChallenge = document.getElementById("prompt-challenge");
const promptLearningGoal = document.getElementById("prompt-learning-goal");
const promptResource = document.getElementById("prompt-resource");


const fields = [
    [promptName, promptUsernameName, promptRole],
    [promptTopic, promptEducationLevel, promptLearningRes],
    [promptContribution, promptChallenge, promptLearningGoal, promptResource],
];

function isAlreadyInput(field) {
    return field.innerHTML.split(':')[1]?.trim() ? true : false;
}

function addChangeButton(field) {
    const newButton = document.createElement("button");
    newButton.setAttribute("class", "change-btn");
    newButton.onclick = function() {
        changeThis(field);
    };
    newButton.textContent = "Change";
    field.appendChild(newButton);
}

function checkChangeButton(fieldList) {
    fieldList.forEach(field => {
        if (isAlreadyInput(field) && !field.querySelector('.change-btn')) {
            addChangeButton(field);
        }
    });
}

function changeThis(field) {
    const newValue = prompt("Change to", defaultMessage);
    
    if (newValue && newValue.trim() !== "" && newValue !== defaultMessage) {
        const label = field.innerHTML.split(':')[0]; // Get the label part (before colon)
        field.innerHTML = `${label}: ${newValue}\t`; // Update with new value
        addChangeButton(field); // Keep the change button
        alert(`Changed to: ${newValue}`);
    } else if (newValue !== null) {
        alert("Invalid input! Keeping original value.");
    }
}

function removeEnterButton(category) {
    document.getElementById(`${category}-btn`).remove();
}

// function checkEntryButton(categoryNum) {
//     for (let i = 0; i < fields[categoryNum].length; i++) {
//         if (fields[categoryNum][i].innerHTML) {
//         }
//     }
// }

function updateProgressBar() {
    // get the number bit and then set it with the counter
    currentProgress.innerHTML = `Current Progress: ${completeCounter}/10`;
    // increasing the width of the bar
    currentProgressBar.style.width = `${completeCounter * 10}%`; // Update the progress
    currentProgressBar.style.backgroundColor = `hsl(${completeCounter * 10}, 100%, 50%)`; // Update colour from red to green
}

function showSkipMessage() {
    alert("SKIPPED!\nYou may do this later");
}

function startPDPrompt() {
    if (!isAlreadyInput(promptName)) {
        nameP = prompt("What is your full name?", defaultMessage);
        if (nameP && nameP.trim() !== "" && nameP !== defaultMessage) {
            promptName.innerHTML = `Name: ${nameP}\t`;
            completeCounter++;
        } else {
            showSkipMessage();
        }
    }
    if (!isAlreadyInput(promptUsernameName)) {
        usernameP = prompt("What is your username?", defaultMessage);
        if (usernameP && usernameP.trim() !== "" && usernameP !== defaultMessage) {
            promptUsernameName.innerHTML = `Username: ${usernameP}\t`;
            completeCounter++;
        } else {
            showSkipMessage();
        }
    }
    if (!isAlreadyInput(promptRole)) {
        roleP = prompt("What is your role?", defaultMessage);
        if (roleP && roleP.trim() !== "" && roleP !== defaultMessage) {
            promptRole.innerHTML = `Role: ${roleP}\t`;
            completeCounter++;
        } else {
            showSkipMessage();
        }
    }

    updateProgressBar();
    checkChangeButton(fields[0]);
}

function startPrefPrompt() {
    if (!isAlreadyInput(promptTopic)) {
        topicP = prompt("What subject or topic are you most passionate about?", defaultMessage);
        if (topicP && topicP.trim() !== "" && topicP !== defaultMessage) {
            promptTopic.innerHTML = `Subject/Topic Most Passionate About: ${topicP}\t`;
            completeCounter++;
        }  else {
            showSkipMessage();
        }
    }
    if (!isAlreadyInput(promptEducationLevel)) {
        educationP = prompt("What is your current education level?", defaultMessage);
        if (educationP && educationP.trim() !== "" && educationP !== defaultMessage) {
            promptEducationLevel.innerHTML = `Current Education Level: ${educationP}\t`;
            completeCounter++;
        }  else {
            showSkipMessage();
        }
    }
    if (!isAlreadyInput(promptLearningRes)) {
        learningP = prompt("What learning resource do you use most often?", defaultMessage);
        if (learningP && learningP.trim() !== "" && learningP !== defaultMessage) {
            promptLearningRes.innerHTML = `Most Used Learning Resource: ${learningP}\t`;
            completeCounter++;
        }  else {
            showSkipMessage();
        }
    }

    updateProgressBar();
    checkChangeButton(fields[1]);
}

function startGoalPrompt() {
    if (!isAlreadyInput(promptContribution)) {
        contributionP = prompt("How would you like to contribute to quality education?", defaultMessage);
        if (contributionP && contributionP.trim() !== "" && contributionP !== defaultMessage) {
            promptContribution.innerHTML = `I Wish To Contribute By: ${contributionP}\t`;
            completeCounter++;
        }  else {
            showSkipMessage();
        }
    }
    if (!isAlreadyInput(promptChallenge)) {
        challengeP = prompt("What is one educational challenge you want to help solve?", defaultMessage);
        if (challengeP && challengeP.trim() !== "" && challengeP !== defaultMessage) {
            promptChallenge.innerHTML = `Educational Challenge I Want To Solve: ${challengeP}\t`;
            completeCounter++;
        }  else {
            showSkipMessage();
        }
    }
    if (!isAlreadyInput(promptLearningGoal)) {
        goalP = prompt("What is your personal learning goal?", defaultMessage);
        if (goalP && goalP.trim() !== "" && goalP !== defaultMessage) {
            promptLearningGoal.innerHTML = `My Personal Learning Goal: ${goalP}\t`;
            completeCounter++;
        }  else {
            showSkipMessage();
        }
    }
    if (!isAlreadyInput(promptResource)) {
        resourceP = prompt("What resource can you offer to improve education access?", defaultMessage);
        if (resourceP && resourceP.trim() !== "" && resourceP !== defaultMessage) {
            promptResource.innerHTML = `Personal Resource I Am Willing To Offer: ${resourceP}\t`
            completeCounter++;
        } else {
        showSkipMessage();
        } 
    }

    updateProgressBar();
    checkChangeButton(fields[2]);
}