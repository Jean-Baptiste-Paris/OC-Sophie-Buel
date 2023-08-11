//galleries.js
import { galleryElements } from './dom-elements.js';
import { fetchWorks } from './works-api.js';
import { setupFilterListeners } from './filters-logic.js';
import { generateWorkCards } from './works-cards.js';

async function initGalleries() {
    const currentWorks = await fetchWorks();
    setupFilterListeners(currentWorks, galleryElements[0]);
    generateWorkCards(currentWorks, galleryElements[0]);
    generateWorkCards(currentWorks, galleryElements[1]);
}

export { initGalleries }
