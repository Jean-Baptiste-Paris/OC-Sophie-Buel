//admin-create.js
import { modifierElementIconClasses as iconClasses } from "./config.js";
import { createFaIcon } from "./global-create.js";

function createAdminBanner() {
    const editBanner = document.createElement('div');
    editBanner.classList.add('edit-banner');
    const modifierElement = createModifierElement('Mode édition', iconClasses)
    const buttonElement = document.createElement('button');
    buttonElement.id = 'publish';
    buttonElement.type = 'input';
    buttonElement.innerText = 'publier les changements';
  
    editBanner.appendChild(modifierElement);
    editBanner.appendChild(buttonElement);

    return editBanner;
}

function createModifierElement(text, classes) {
    const paragraphElement = document.createElement('a');
    paragraphElement.classList.add('modifier');
    paragraphElement.innerText = text;

    const faIconElement = createFaIcon(classes);
    paragraphElement.prepend(faIconElement);
    
    return paragraphElement;
}

export { 
    createAdminBanner,
    createModifierElement,
};