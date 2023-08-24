//modals-modal1.js
import { fetchWorks } from "./works-api.js";
import { createWorkCards } from "./works-cards.js";
import { linkModal } from "./modals-logic.js";

async function modal1CreateContent(modalContentWrapper) {
    const galleryElement = document.createElement('div');
    galleryElement.classList.add('gallery', 'modal-gallery');

    const currentWorks = await fetchWorks();
    createWorkCards(currentWorks, galleryElement);

    const buttonElement = document.createElement('button');
    buttonElement.id = "btn-add-work";
    buttonElement.href = "#modal2";
    buttonElement.innerText = "Ajouter une photo";
    linkModal(buttonElement, 'modal2');

    const linkElement = document.createElement('a');
    linkElement.href = '#';
    linkElement.innerText = "Supprimer la galerie";

    modalContentWrapper.appendChild(galleryElement);
    modalContentWrapper.appendChild(buttonElement);
    modalContentWrapper.appendChild(linkElement);
}

export { modal1CreateContent }