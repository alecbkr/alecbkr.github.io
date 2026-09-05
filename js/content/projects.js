const allProjects = document.querySelectorAll(".projectPageContent");
const allLinks = document.querySelectorAll(".projectSelectLink");



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

function openProject(projectLink) {

    const projectId = projectLink.getAttribute("href");
    const selectedProject = document.querySelector(projectId);
    if (selectedProject) {
        allProjects.forEach((project) => {
            project.classList.remove("active");
        })

        allLinks.forEach((link) => {
            link.classList.remove("active");
        })

        selectedProject.classList.add("active");
        projectLink.classList.add("active");
    }
}


export function initProjects() {

    allLinks.forEach((projectLink) => {
        projectLink.addEventListener("click", (event) => {
            event.preventDefault();
            openProject(projectLink);
        });
    });

    initImageShowcases();
}