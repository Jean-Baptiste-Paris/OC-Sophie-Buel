// Récupération des éléments du DOM
const introSection = document.querySelector('#introduction');
const titleWrapper = document.querySelector('.title-wrapper');

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
    const paragraphElement = createModifierElement('Mode édition', iconClasses)
    const buttonElement = document.createElement('button');
    buttonElement.id = 'publish';
    buttonElement.type = 'input';
    buttonElement.innerText = 'publier les changements';
  
    document.body.insertBefore(editBanner, document.body.firstChild);
    editBanner.appendChild(paragraphElement);
    editBanner.appendChild(buttonElement);
}

function createModifierElement(text, classes) {
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

    const paragraphElement1 = createModifierElement('modifier', iconClasses);
    const paragraphElement2 = createModifierElement('modifier', iconClasses);

    introFigure.appendChild(paragraphElement1);
    titleWrapper.appendChild(paragraphElement2);
}

async function adjustPositions() {
    const introArticle = introSection.lastElementChild;
    const worksTitle = titleWrapper.firstElementChild;
    const modifierElements = document.querySelectorAll('.modifier');

    if (modifierElements.length != 3) return;

    let offset = modifierElements[1].offsetHeight;
    introArticle.style.paddingBottom = offset + "px";
    let offset2 = titleWrapper.lastElementChild.offsetWidth;
    console.log(offset2);
    console.log(modifierElements[2].offsetWidth);
    worksTitle.style.paddingLeft = offset2 + "px";
}

window.addEventListener('load', () => {
    if (sessionStorage.getItem('userToken')) {
        toggleFilters();
        toggleEditBanner();
        toggleEditIcons();
        setTimeout(adjustPositions, 100);
    }
});
