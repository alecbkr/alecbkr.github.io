import {initProfile} from "./profile.js"
import {initContact} from "./contact.js"
import {initProjects} from "./projects.js"

const allContent = document.querySelectorAll(".content");
const contentTitle = document.querySelector("#contentSection");
const contentContainer = document.querySelector("#contentContainer");

export function openContent(contentId, effect) {

    const selectedContent = document.querySelector(contentId + ".content");

    if (selectedContent) {
        allContent.forEach((content) => {
            content.classList.remove("active");
        })

        selectedContent.classList.add("active");

        contentContainer.style.width = selectedContent.dataset.width;
        contentTitle.textContent = selectedContent.dataset.title;
        history.pushState(null, "", `${contentId}`);

        if (effect) {
            const contentContainer = document.querySelector("#contentContainer");
            const contentTitle = document.querySelector("#contentTitle");
            if (contentContainer.classList.contains("flash")) {
                contentContainer.classList.remove("flash");
                contentTitle.classList.remove("flash");
                void contentContainer.offsetWidth;
                void contentTitle.offsetWidth;
            }
            contentContainer.classList.add("flash");
            contentTitle.classList.add("flash");
        }
    }
}



export function landOnContent() {
    const contentString = window.location.hash.substring(1);

    switch (contentString) {
        case "projects":
            openContent("#projects");
            break;
        
        case "contact":
            openContent("#contact");
            break;
        
        default:
            openContent("#profile");
    }
}


export function initContent() {
    initProfile();
    initProjects();
    initContact();
}


