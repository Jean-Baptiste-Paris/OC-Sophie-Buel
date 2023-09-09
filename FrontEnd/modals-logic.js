//modals-logic.js
import { openModal } from "./modals-display.js";

let isModalClickListenerAdded = false;

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
        closeModals();
    });
}

function addBackEvent(DOMelement, modalElement) {
    DOMelement.addEventListener('click', () => {
        closeModals();
        openModal('modal1');
    });
}

function closeModals() {
    const activeModals = document.querySelectorAll('.modal');
    localStorage.removeItem('workInfo');
    for (const modal of activeModals){
        modal.remove();
        removeModalClickListener()
    }
}

function addModalClickListener() {
    if (!isModalClickListenerAdded) {
        document.addEventListener('click', handleModalClick);
        isModalClickListenerAdded = true;
    }
}

function removeModalClickListener() {
    if (isModalClickListenerAdded) {
        document.removeEventListener('click', handleModalClick);
        isModalClickListenerAdded = false;
    }
}

function handleModalClick(event) {
    console.log('event entered');
    const target = event.target;
    const isModal = target.classList.contains('modal');
    const isWrapper = target.classList.contains('modal-wrapper');
    if (target && isModal && !isWrapper) {
        closeModals();
    }
}

export { 
    linkModal,
    addCloseEvent,
    addBackEvent,
    closeModals,
    addModalClickListener
};
