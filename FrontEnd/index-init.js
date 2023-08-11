//index-init.js
import { initGlobalLayout } from "./global-init.js";
import { initGalleries } from "./galleries.js";
import { displayAdminUI } from "./admin-ui.js";

function initIndex() {
    initGalleries();
}

document.addEventListener('DOMContentLoaded', () => {
    initGlobalLayout();
    initIndex();
    if (sessionStorage.getItem('userToken')) {
        displayAdminUI();
    }
});