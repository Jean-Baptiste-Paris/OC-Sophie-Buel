//modals-logic.js
import { openModal } from "./modals-display.js";

function linkModal(linkedElement, modalId, workInfo = null) {
    if (!(linkedElement && modalId)) return;
    linkedElement.addEventListener('click', event => {
        event.preventDefault();
        if (workInfo) {
            localStorage.setItem('workInfo', JSON.stringify(workInfo));
        }
        openModal(modalId);
    });
}

function addCloseEvent(DOMelement, modalElement) {
    DOMelement.addEventListener('click', () => {
        closeModal(modalElement);
    });
}

function addBackEvent(DOMelement, modalElement) {
    DOMelement.addEventListener('click', () => {
        closeModal(modalElement);
        openModal('modal1');
    });
}

function closeModal(modalElement) {
    modalElement.remove()
    localStorage.clear();
}

export { 
    linkModal,
    addCloseEvent,
    addBackEvent,
    closeModal
};
