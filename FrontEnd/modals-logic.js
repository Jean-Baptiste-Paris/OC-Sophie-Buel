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
        modalElement.remove()
        localStorage.clear();
    });
}

function addBackEvent(DOMelement, modalElement) {
    DOMelement.addEventListener('click', () => {
        modalElement.remove()
        localStorage.clear();
        openModal('modal1');
    });
}

export { 
    linkModal,
    addCloseEvent,
    addBackEvent
};
