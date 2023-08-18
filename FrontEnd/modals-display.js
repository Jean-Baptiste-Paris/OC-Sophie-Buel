//modals-display.js
import { createModalElement } from "./modals-create.js";
import { modalsData } from "./config.js";
import { mainTag } from "./dom-elements.js";
import { modal1CreateContent } from "./modals-modal1.js";

function openModal(modalId){
    const modal = createModalElement(modalId, modalsData[0].title);
    mainTag.appendChild(modal);
    const contentWrapper = modal.querySelector('.modal-content');
    modal1CreateContent(contentWrapper);
}

export { openModal }
