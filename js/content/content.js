import {initProfile} from "./profile.js"
import {initContact} from "./contact.js"
import {initProjects} from "./projects.js"

const allContent = document.querySelectorAll(".content");
const contentTitle = document.querySelector("#contentSection");
const contentContainer = document.querySelector("#contentContainer");

export function openContent(id) {
    
    const selectedContent = [...allContent].find(el => el.id === id);
    if (selectedContent) {
        allContent.forEach((content) => {
            content.classList.remove("active");
        })
        selectedContent.classList.add("active");
        contentContainer.style.width = selectedContent.dataset.width;
        contentTitle.textContent = selectedContent.dataset.title;

        const contentId = selectedContent.id;
        const sectionName = contentId.replace("Content", "");
        window.location.hash = sectionName;
    }
}



export function landOnContent() {
    const contentString = window.location.hash.substring(1);

    switch (contentString) {
        case "projects":
            openContent("projectsContent");
            document.querySelector("#spriteAnchor_chest").classList.add("active");
            break;
        
        case "contact":
            openContent("contactContent");
            document.querySelector("#spriteAnchor_email").classList.add("active");
            break;
        
        default:
            openContent("profileContent");
            document.querySelector("#spriteAnchor_profile").classList.add("active");
    }
}


export function initContent() {
    initProfile();
    initProjects();
    initContact();
}


