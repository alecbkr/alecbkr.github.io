import {initSprites} from "./sprite.js"
import {setDialogue, speak} from "./speak.js";
import {initContent, landOnContent} from "./content.js";
import {initHotbar} from "./hotbar.js";

const batTextbox = document.querySelector(".textbox");

async function startup() {
    const response = await fetch("assets/dialogue.json");
    const dialogue = await response.json();
    setDialogue(dialogue);
    speak(0, batTextbox); //greet

    initSprites();
    initContent();
    landOnContent();
    initHotbar();
}

startup();


