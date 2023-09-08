//modals-display.js
import { createModalElement } from "./modals-create.js";
import { modalsData } from "./config.js";
import { mainTag } from "./dom-elements.js";
import { modal1CreateContent } from "./modals-modal1.js";
import { modal2CreateContent } from "./modals-modal2.js";
import { addModalClickListener } from "./modals-logic.js";

function openModal(modalId){
    const previousModal = document.querySelector('.modal');
    if (previousModal) {
        previousModal.remove();
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
    addModalClickListener();
}

export { openModal }
