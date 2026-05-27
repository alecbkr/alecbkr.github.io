const hoverSprites = document.querySelectorAll(".hover");
const interactiveSprites = document.querySelectorAll(".interactive");
const textbox = document.querySelector(".textbox");

let dialogue;
let speaking = false;

async function startup() {
    const response = await fetch("assets/dialogue.json");
    dialogue = await response.json();
    greet();
}

startup();

hoverSprites.forEach((sprite) => {
    sprite.addEventListener("mouseenter", () => {
        sprite.classList.add("animating");
    });

    sprite.addEventListener("mouseleave", () => {
        sprite.classList.remove("animating");
    });
});

interactiveSprites.forEach((sprite) => {
    sprite.addEventListener("click", () => {
        saySomething();
    });
})

function updateTextbox(phrase, duration) {
    textbox.textContent = phrase;
    textbox.style.opacity = "1";

    setTimeout(() => {
        textbox.style.opacity = "0";
        textbox.textContent = "";
        speaking = false;
    }, duration);
}

function greet() {
    
    if (!speaking) {
        speaking = true;
        const greetings = dialogue.greeting;
        const choice = greetings[Math.floor(Math.random() * greetings.length)];
        updateTextbox(choice, 4000);
    }
}

function saySomething() {

    if (!speaking) {
        speaking = true;
        const chatter = dialogue.chatter;
        const choice = chatter[Math.floor(Math.random() * chatter.length)];
        updateTextbox(choice, 4000);
    }
}



