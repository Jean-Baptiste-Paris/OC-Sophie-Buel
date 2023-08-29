//modals-display.js
import { createModalElement } from "./modals-create.js";
import { modalsData } from "./config.js";
import { mainTag, modals } from "./dom-elements.js";
import { modal1CreateContent } from "./modals-modal1.js";
import { modal2CreateContent } from "./modals-modal2.js";

function openModal(modalId){
    const closeModal = document.querySelector('.modal');
    if (closeModal) {
        closeModal.remove();
    }
    const modal = createModalElement(modalId, modalsData[modalId]);
    mainTag.appendChild(modal);
    const contentWrapper = modal.querySelector('.modal-content');
    switch (modalId){
        case 'modal1':
            modal1CreateContent(contentWrapper);
            break;
        case 'modal2':
            modal2CreateContent(contentWrapper);
            break;
        default:
            break;
    }
}

export { openModal }
