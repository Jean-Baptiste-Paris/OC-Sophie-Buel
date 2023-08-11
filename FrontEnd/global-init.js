//init-global.js
import { storageButton } from "./dom-elements.js";

function initGlobalLayout() {
    storageButton.addEventListener('click', () => {
        sessionStorage.clear();
        location.reload();
    })

}

export { initGlobalLayout };