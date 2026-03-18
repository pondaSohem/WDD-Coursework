let completeCounter = 0;

let nameP, usernameP, roleP;
const promptName = document.getElementById("prompt-name");
const promptUsernameName = document.getElementById("prompt-username");
const promptRole = document.getElementById("prompt-role");


function startPDPrompt() {
    nameP = prompt("What is your full name?", "Name here");
    promptName.innerHTML += nameP;
}