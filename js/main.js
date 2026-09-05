import {initSprites} from "./graphical/sprite.js"
import {setDialogue, speak} from "./functionality/speak.js";
import {initContent, landOnContent} from "./content/content.js";
import {initHotbar} from "./gui/hotbar.js";
// import { initWebGL } from "./webGl.js";

const batTextbox = document.querySelector(".textbox");

async function startup() {
    const response = await fetch("assets/dialogue.json");
    const dialogue = await response.json();
    setDialogue(dialogue);
    speak(0, batTextbox); //greet

    initSprites();
    initContent();
    initHotbar();
    landOnContent();
    // initWebGL();

    
}

startup();


