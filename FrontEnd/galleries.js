import { fetchWorks } from './api.js';
import { setupFilterListeners } from './filters-logic.js';
import { generateWorkCards } from './work-cards.js';

const galleryElements = document.querySelectorAll(".gallery");

async function initGalleries() {
    const currentWorks = await fetchWorks();
    setupFilterListeners(currentWorks, galleryElements[0]);
    generateWorkCards(currentWorks, galleryElements[0]);
    generateWorkCards(currentWorks, galleryElements[1]);
}

initGalleries();
