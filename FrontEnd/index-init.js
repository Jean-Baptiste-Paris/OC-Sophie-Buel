//index-init.js
import { initGlobalLayout } from "./global-init.js";
import { initGalleries } from "./galleries.js";
import { displayAdminUI } from "./admin-ui.js";

let currentWorks = null;


document.addEventListener('DOMContentLoaded', () => {
    initGlobalLayout();
    initGalleries();
    if (sessionStorage.getItem('userToken')) {
        displayAdminUI();
    }
});

export {currentWorks}