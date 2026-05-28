const hoverableAnchors = document.querySelectorAll(".hoverable");
const clickableAnchors = document.querySelectorAll(".clickable");
const textbox = document.querySelector(".textbox");

let dialogue;
let speaking = false;

async function startup() {
    const response = await fetch("assets/dialogue.json");
    dialogue = await response.json();
    greet();
}

startup();


const clickActions = {
    speak: saySomething
};


hoverableAnchors.forEach((anchor) => {
    anchor.addEventListener("mouseenter", () => {

        const sprite = anchor.querySelector(".animatedSprite");
        
        const translationX = parseFloat(getComputedStyle(sprite).getPropertyValue("--translationX"));
        const translationY = parseFloat(getComputedStyle(sprite).getPropertyValue("--translationY"));
        const hoverScale = parseFloat(getComputedStyle(sprite).getPropertyValue("--hoverScale"));
        sprite.style.transform = `translate(${translationX}px, ${translationY}px) scale(${hoverScale})`;
        sprite.classList.add("animating");
    });

    anchor.addEventListener("mouseleave", () => {
        const sprite = anchor.querySelector(".animatedSprite");

        const translationX = parseFloat(getComputedStyle(sprite).getPropertyValue("--translationX"));
        const translationY = parseFloat(getComputedStyle(sprite).getPropertyValue("--translationY"));
        const baseScale = parseFloat(getComputedStyle(sprite).getPropertyValue("--baseScale"));
        sprite.style.transform = `translate(${translationX}px, ${translationY}px) scale(${baseScale})`;
        sprite.classList.remove("animating");

        
    });
});


clickableAnchors.forEach((anchor) => {
    anchor.addEventListener("pointerdown", () => {
        anchor.setPointerCapture(event.pointerId);

        const sprite = anchor.querySelector(".animatedSprite");
        const translationX = parseFloat(getComputedStyle(sprite).getPropertyValue("--translationX"));
        const translationY = parseFloat(getComputedStyle(sprite).getPropertyValue("--translationY"));
        const clickScale = parseFloat(getComputedStyle(sprite).getPropertyValue("--clickScale"));
        sprite.style.transform = `translate(${translationX}px, ${translationY}px) scale(${clickScale})`;
    });

    anchor.addEventListener("pointerup", () => {
        const actionName = anchor.dataset.action;
        const action = clickActions[actionName];
        if (action) {
            action();
        }

        const sprite = anchor.querySelector(".animatedSprite");
        const translationX = parseFloat(getComputedStyle(sprite).getPropertyValue("--translationX"));
        const translationY = parseFloat(getComputedStyle(sprite).getPropertyValue("--translationY"));
        const baseScale = parseFloat(getComputedStyle(sprite).getPropertyValue("--baseScale"));
        sprite.style.transform = `translate(${translationX}px, ${translationY}px) scale(${baseScale})`;
    })
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
        updateTextbox(choice, 2000);
    }
}



