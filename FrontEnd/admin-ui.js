// admin-ui.js
import { introFigure, titleWrapper } from './dom-elements.js';
import { createAdminBanner, createModifierElement } from './admin-create.js';
import { removeFilters } from './filters-display.js';
import { modifierElementIconClasses as iconClasses } from './config.js';

function displayAdminUI() {
    removeFilters();
    const editBanner = createAdminBanner();
    document.body.insertBefore(editBanner, document.body.firstChild);
    displayEditElements();
}

function displayEditElements() {
    const editElement1 = createModifierElement('modifier', iconClasses);
    const editElement2 = createModifierElement('modifier', iconClasses);
    //linkModal(editElement2, "#modal1");

    introFigure.appendChild(editElement1);
    titleWrapper.appendChild(editElement2);
}

export { displayAdminUI };
