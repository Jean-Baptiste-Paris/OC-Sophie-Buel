//galleries.js
import { setupFilterListeners } from './filters-logic.js';
import { createWorkCards } from './works-cards.js';
import { fetchWorks } from './works-api.js';

async function initGalleries() {
    const galleryElements = document.querySelectorAll('.gallery');
    const currentWorks = await fetchWorks();

    setupFilterListeners(currentWorks, galleryElements[0]);
    for (const gallery of galleryElements) {
        createWorkCards(currentWorks, gallery);
    }
}

export { initGalleries }
