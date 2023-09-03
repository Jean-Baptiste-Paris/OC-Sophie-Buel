//modals-display.js
import { createModalElement } from "./modals-create.js";
import { modalsData } from "./config.js";
import { mainTag, modals } from "./dom-elements.js";
import { modal1CreateContent } from "./modals-modal1.js";
import { modal2CreateContent } from "./modals-modal2.js";
import { closeModal } from "./modals-logic.js";

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
    //document.addEventListener('click', closeModalOutside);
}

// function closeModalOutside(event) {
//     const modalWrapper = document.querySelector('.modal-wrapper');
//     console.log('2');
    
//     if (modalWrapper && !modalWrapper.contains(event.target)) {
//         console.log('3');
//         const openModal = document.querySelector('.modal');
//         console.log('4');
//         if (openModal){
//             console.log('5');
//             closeModal(openModal);
//         }
//     }
// }

export { openModal }
