import {speak} from "../functionality/speak.js"
import {openContent} from "../content/content.js"

const spriteButtons = document.querySelectorAll(".spriteButton");


export function initSprites() {

    spriteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            if (button.getAttribute("data-action") == "openPage") {
                openContent(button.getAttribute("href"), 1);
            }
            else if (button.getAttribute("data-action") == "speak") {
                const speechbox = document.querySelector('#' + button.id + ".speechbox");
                speak(1, speechbox);
            }
        })
    })
}




