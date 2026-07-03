import {sendNotification} from "./notificationBanner.js"

const allContent = document.querySelectorAll(".content");
const contentSection = document.querySelector("#contentSection");
const contentContainer = document.querySelector("#contentContainer");

export function openContent(id) {
    
    const selectedContent = [...allContent].find(el => el.id === id);
    if (selectedContent) {
        allContent.forEach((content) => {
            content.classList.remove("active");
        })
        selectedContent.classList.add("active");
        contentContainer.style.width = selectedContent.dataset.width;
        contentSection.textContent = selectedContent.dataset.title;

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



function selectImage(node) {
    const parentShowcase = node.closest(".imageShowcase");
    const imageIdx = node.dataset.imageIdx;
    const allImages = parentShowcase.querySelectorAll(".showcaseImage");
    const allNodes = parentShowcase.querySelectorAll(".imageSelectorNode");

    allImages.forEach(img => img.classList.remove("active"));
    allNodes.forEach(_node => _node.classList.remove("active"));

    allImages[imageIdx].classList.add("active");
    node.classList.add("active");
}


function initImageShowcases() {
    document.querySelectorAll(".imageShowcase").forEach((showcase) => {

        const images = showcase.querySelectorAll(".showcaseImage");
        const imageInspector = document.querySelector(".imageInspector");
        const inspectorImg = document.querySelector("#inspectorImg");
        const closebox = document.querySelector(".closeBox");

        images.forEach((image) => {
            image.addEventListener("click", () => {
                inspectorImg.src = image.src;
                imageInspector.classList.add("active");
            })
        })

        closebox.addEventListener("click", () => {
            imageInspector.classList.remove("active");
        })



        const imageCnt = images.length;
        const imageSelector = showcase.querySelector(".imageSelector");

        for (let i = 0; i < imageCnt; i++) {
            const imageNode = document.createElement("div");
            imageNode.classList.add("imageSelectorNode");
            imageNode.dataset.imageIdx = i;

            imageSelector.append(imageNode);


        }
    })

    document.querySelectorAll(".imageSelectorNode").forEach((node) => {
        node.addEventListener("click", () => {
            selectImage(node);
        })

        if (node.dataset.imageIdx == 0) {
            selectImage(node);
        }
    })

}



function initProfile() {
    document.querySelectorAll(".skillBar").forEach((skillBar) => {
        const level = Number(skillBar.style.getPropertyValue("--level"));

        for (let i = 0; i < 10; i++ ) {
            const segment = document.createElement("div");
            segment.classList.add("segment");

            if (i < level) {
                segment.classList.add("filled");
            }
            skillBar.append(segment);
        }
    });
}

function initContact() {
    const form = document.querySelector(".contactForm");
    form.addEventListener("submit", async (event) => {
        // form.reset();

        event.preventDefault();

        const response = await fetch("https://formspree.io/f/mdavaggz", {
            method: "POST",
            body: new FormData(form),
            headers: {"Accept": "application/json"}
        })

        if (response.ok) {
            form.reset();
            openContent("profileContent");
            sendNotification("Message sent! Thanks", "bannerSuccess");
        }
        else {
            sendNotification("Message not sent", "bannerFail");
        }
    })

}


export function initContent() {
    initProfile();
    initImageShowcases();
    initContact();
}


