import * as flsFunctions from "./files/isWebP.js";
import { scrollHeight } from "./files/scrollHeight.js";
import { regexForm } from "./files/regex.js";

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
regexForm();
