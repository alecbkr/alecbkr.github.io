import {sendNotification} from "../gui/notificationBanner.js"

export function initContact() {
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
            sendNotification("Message failed", "bannerFail");
        }
    });

}