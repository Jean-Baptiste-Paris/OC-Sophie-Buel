// Récupération des éléments du DOM
const introSection = document.getElementById('introduction');

const iconClasses = ['fa-sharp', 'fa-regular', 'fa-pen-to-square'];

// Retire les filtres des travaux de la page html
function toggleFilters() {
    const allFilters = document.getElementsByClassName('btn-filtre');
    const filtersArray = Array.from(allFilters);
    for (const filter of filtersArray) {
        filter.remove();
    }
}

// Affiche la bannière du mode édition en haut de page
function toggleEditBanner() {
    const editBanner = document.createElement('div');
    editBanner.classList.add('edit-banner');
    const paragraphElement = createModifyElement('Mode édition', iconClasses)
    const buttonElement = document.createElement('button');
    buttonElement.id = 'publish';
    buttonElement.type = 'input';
    buttonElement.innerText = 'publier les changements';
  
    document.body.insertBefore(editBanner, document.body.firstChild);
    editBanner.appendChild(paragraphElement);
    editBanner.appendChild(buttonElement);
}

function createModifyElement(text, classes) {
    const paragraphElement = document.createElement('p');
    paragraphElement.classList.add('modifier');
    paragraphElement.innerText = text;
    const iconElement = createFaIcon(classes);
    paragraphElement.prepend(iconElement);
    return paragraphElement;
}

function createFaIcon(classes) {
    const faIcon = document.createElement('i');
    for (const faClass of classes) {
        faIcon.classList.add(faClass);
    }
    return faIcon;
}

// Affiche les invites de modifications
function toggleEditIcons() {
    // Récupération des éléments du DOM
    const introFigure = introSection.firstElementChild;
    const titleWrapper = document.querySelector('.title-wrapper');

    const paragraphElement1 = createModifyElement('modifier', iconClasses);
    const paragraphElement2 = createModifyElement('modifier', iconClasses);

    introFigure.appendChild(paragraphElement1);
    titleWrapper.appendChild(paragraphElement2);
}


if (sessionStorage.getItem('userToken')) {
    toggleFilters();
    toggleEditBanner();
    toggleEditIcons();
};