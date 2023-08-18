//modals-display.js
import { createModalElement } from "./modals-create.js";
import { modalsData } from "./config.js";
import { mainTag } from "./dom-elements.js";

function openModal(modalId){
    const modal = createModalElement(modalId, modalsData[0].title);
    // modal1CreateContent(modal);
    // mainTag.appendChild(modal);
    mainTag.appendChild(modal);
}

export { openModal }
