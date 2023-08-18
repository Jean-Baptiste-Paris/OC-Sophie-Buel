//index-init.js
import { initGlobalLayout } from "./global-init.js";
import { initGalleries } from "./galleries.js";
import { displayAdminUI } from "./admin-ui.js";
import { fetchWorks } from "./works-api.js";

let currentWorks = null;

async function initIndex() {
    currentWorks = await fetchWorks();
    initGalleries();
}

document.addEventListener('DOMContentLoaded', () => {
    initGlobalLayout();
    initIndex();
    if (sessionStorage.getItem('userToken')) {
        displayAdminUI();
    }
});

export {currentWorks}