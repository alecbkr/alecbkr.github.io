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

    }
}



export function initContent() {
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
