//modals-modal1.js
import { createWorkCards } from "./works-cards.js";

function modal1CreateContent(modalElement) {
    const galleryElement = document.createElement('div');
    galleryElement.classList.add('gallery', 'modal-gallery');

    createWorkCards(currentWorks, galleryElement);

    const modalH3 = modalElement.querySelector('h3');
    modalElement.insertAfter()
}

export { modal1CreateContent }