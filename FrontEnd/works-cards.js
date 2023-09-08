//work-cards.js
import { deleteIconClasses } from "./config.js";
import { createElement, createFaIcon } from "./global-create.js";
import { linkModal, addCloseEvent } from "./modals-logic.js";

function createWorkCards(works, galleryElement) {
    if (!galleryElement) return console.error("Erreur dans generateWorks : galleryElement n'est pas défini");
    galleryElement.innerHTML = "";

    for (const work of works) {
        const workElement = createElement("figure");
        const imageElement = createElement("img");
        imageElement.src = work.imageUrl;
        imageElement.alt = work.title;
        const captionElement = createElement("figcaption");
        captionElement.innerText = galleryElement.classList.contains('modal-gallery') ? 'éditer' : work.title;

        // Rattachement des balises
        galleryElement.appendChild(workElement);
        workElement.appendChild(imageElement);
        workElement.appendChild(captionElement);
        
        if (galleryElement.classList.contains('modal-gallery')){
            const iconElement = createFaIcon(deleteIconClasses);
            workElement.insertBefore(iconElement, imageElement);
            linkModal(captionElement, 'modal2', work);
        }
    }
}

export { createWorkCards };
