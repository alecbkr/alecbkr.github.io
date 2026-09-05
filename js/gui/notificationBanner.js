const notificationBanner = document.querySelector(".notificationBanner");
let active = false;

export function initNotificationBanner() {
    // notificationBanner.
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function sendNotification(msg, typeID) {
    if (active)

    notificationBanner.id = typeID;
    const bannerMsg = notificationBanner.querySelector("#msg");
    bannerMsg.textContent = msg;

    notificationBanner.classList.add("show");

    active = true;
    await delay(5000);
    active = false;

    notificationBanner.classList.remove("show");
}

