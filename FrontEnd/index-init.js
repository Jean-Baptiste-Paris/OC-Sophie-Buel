//index-init.js
import { initGlobalLayout } from "./global-init.js";
import { initGalleries } from "./galleries.js";

function initIndex() {
    initGalleries();

}

document.addEventListener('DOMContentLoaded', () => {
    initGlobalLayout();
    initIndex();
});