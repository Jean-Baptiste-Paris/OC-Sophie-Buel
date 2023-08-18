//modals-create.js
import { createFaIcon } from "./global-create.js";
import { closeIconClasses } from "./config.js";
import { addCloseEvent } from "./modals-logic.js";

function createModalElement(modalId, title) {
    const modal = document.createElement('aside');
    modal.id = modalId;
    modal.classList.add('modal');
    modal.setAttribute('role', 'dialog');

    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');

    const modalNav = document.createElement('div');
    modalNav.classList.add('modal-nav');
    const closeButton = createFaIcon(closeIconClasses);
    modalNav.appendChild(closeButton);
    addCloseEvent(closeButton, modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalTitle = document.createElement('h3');
    modalTitle.id = `${modalId}-title`;
    modalTitle.innerText = title;

    modalContent.appendChild(modalTitle);    
    modalWrapper.appendChild(modalNav);
    modalWrapper.appendChild(modalContent);
    modal.appendChild(modalWrapper);

    return modal;
}

export { createModalElement }