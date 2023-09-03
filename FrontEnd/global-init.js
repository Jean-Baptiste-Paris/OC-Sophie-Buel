//init-global.js
import { storageButton } from "./dom-elements.js";

function initGlobalLayout() {
    storageButton.addEventListener('click', handleClearStorageClick);
    window.addEventListener('beforeunload', handleBeforeUnload);
}

const handleClearStorageClick = () => {
    sessionStorage.clear();
    location.reload();
}

const handleBeforeUnload = () => {
    storageButton.removeEventListener('click', handleClearStorageClick);
}

export { initGlobalLayout };
