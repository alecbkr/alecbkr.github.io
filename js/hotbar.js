const hotbarContainer = document.querySelector(".hotbarContainer");
const hotbar = document.querySelector(".hotbar");

export function initHotbar() {
    hotbar.classList.add("fixed");

    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
            hotbar.classList.remove("fixed");
            console.log("unfixed");
        } else {
            hotbar.classList.add("fixed");
            console.log("fixin");
        }
    });

    observer.observe(hotbarContainer);
}