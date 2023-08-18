//galleries.js
import { galleryElements } from './dom-elements.js';
import { setupFilterListeners } from './filters-logic.js';
import { createWorkCards } from './works-cards.js';
import { currentWorks } from './index-init.js';

async function initGalleries() {
    setupFilterListeners(currentWorks, galleryElements[0]);
    createWorkCards(currentWorks, galleryElements[0]);
}

export { initGalleries }
