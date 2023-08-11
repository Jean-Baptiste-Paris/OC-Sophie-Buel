//modals-logic.js
import { openModal } from "./modals-display.js";

function linkModal(linkedElement, modalId) {
    if (!(linkedElement && modalId)) return;
    linkedElement.addEventListener('click', event => {
        event.preventDefault();
        openModal(modalId);
    });
}

export { linkModal };
