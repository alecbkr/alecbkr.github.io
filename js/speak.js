let dialogue;
let speaking = false;


function greet(target) {
    const choices = dialogue.greeting;
    const pick = choices[Math.floor(Math.random() * choices.length)];
    updateTextbox(target, pick, 4000);
}

function chat(target) {
    const choices = dialogue.chatter;
    const pick = choices[Math.floor(Math.random() * choices.length)];
    updateTextbox(target, pick, 2000);
}

function updateTextbox(target, phrase, duration) {
    target.textContent = phrase;
    target.style.opacity = "1";

    setTimeout(() => {
        target.style.opacity = "0";
        target.textContent = "";
        speaking = false;
    }, duration);
}

export function speak(category, target) {
    if (!speaking) {
        speaking = true;
        switch (category) {
            case 0: greet(target); break;
            case 1: chat(target); break;
        }
    }
}

export function setDialogue(data) {
    dialogue = data;
}


