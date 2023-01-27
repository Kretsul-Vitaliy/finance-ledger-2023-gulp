import * as flsFunctions from "./files/isWebP.js";

window.addEventListener("load", async () => {
    if ("serviceWorker" in navigator.userAgentData) {
        try {
            const reg = await navigator.userAgentData.serviceWorker.register("sw.js");
            console.log("Service worker register success", reg);
        } catch (e) {
            console.log("Service worker register fail");
        }
    }
});

flsFunctions.isWebp();
scrollHeight();
