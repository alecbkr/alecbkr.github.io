

export function initProfile() {
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