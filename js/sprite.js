import {speak} from "./speak.js"
import {openContent} from "./content.js"

const hoverableAnchors = document.querySelectorAll(".hoverable");
const clickableAnchors = document.querySelectorAll(".clickable");
const batTextbox = document.querySelector(".textbox");

const clickActions = {
    speak: speak,
    openContent: openContent
};

const spriteToContent = {
    spriteAnchor_profile: profileContent,
    spriteAnchor_chest: projectContent,
    spriteAnchor_email: contactContent
}

export function initSprites() {

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
                if (action == speak) {
                    action(1, batTextbox);
                }
                if (action == openContent) {
                    const contentID = spriteToContent[anchor.id].id;
                    console.log(contentID);
                    action(contentID);
                }
            }

            const sprite = anchor.querySelector(".animatedSprite");
            const translationX = parseFloat(getComputedStyle(sprite).getPropertyValue("--translationX"));
            const translationY = parseFloat(getComputedStyle(sprite).getPropertyValue("--translationY"));
            const baseScale = parseFloat(getComputedStyle(sprite).getPropertyValue("--baseScale"));
            sprite.style.transform = `translate(${translationX}px, ${translationY}px) scale(${baseScale})`;
        })
    })

}



