const hotbarContainer = document.querySelector(".hotbarContainer");
const hotbar = document.querySelector(".hotbar");

export function initHotbar() {
    

    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
            hotbar.classList.remove("fixed");
        } else {
            hotbar.classList.add("fixed");
        }
    });

    observer.observe(hotbarAnchor);
}