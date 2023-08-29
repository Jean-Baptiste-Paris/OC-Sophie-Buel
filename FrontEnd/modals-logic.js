//modals-logic.js
import { openModal } from "./modals-display.js";

function linkModal(linkedElement, modalId) {
    if (!(linkedElement && modalId)) return;
    linkedElement.addEventListener('click', event => {
        event.preventDefault();
        openModal(modalId);
    });
}

function addCloseEvent(iconElement, modalElement) {
    iconElement.addEventListener('click', () => modalElement.remove());
}

function addBackEvent(iconElement, modalElement) {
    iconElement.addEventListener('click', () => {
        modalElement.remove();
        openModal('modal1');
    });
}

export { 
    linkModal,
    addCloseEvent,
    addBackEvent
};
