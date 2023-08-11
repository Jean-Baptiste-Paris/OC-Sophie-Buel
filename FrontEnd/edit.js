const introSection = document.querySelector('#introduction');
const titleWrapper = document.querySelector('.title-wrapper');
const modals = document.querySelectorAll('.modal');

const iconClasses = ['fa-sharp', 'fa-regular', 'fa-pen-to-square'];

function initEditUI() {
    removeFilters();
    toggleEditBanner();
    toggleEditIcons();
}

// Retire les filtres des travaux de la page html
function removeFilters() {
    const filtersDiv = document.querySelector('.filtres');
    if (filtersDiv) filtersDiv.remove();
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
    const paragraphElement = document.createElement('a');
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
    linkModal(paragraphElement2, "#modal1");

    introFigure.appendChild(paragraphElement1);
    titleWrapper.appendChild(paragraphElement2);
}

function linkModal(element, modal) {
    if (!(element && modal)) return;
    element.href = modal;
    element.addEventListener('click', function (event) {
        event.preventDefault();
        if (element.tagName === "button") element.style.display = 'none';
        const target = document.querySelector(modal);
        console.log("target : "+ target);
        target.style.display = null;
    });
    
}

function createModalEvents() {
    const modal1 = modals[0];
    const modal2 = document.querySelector("#modal2");
    const addWorkButton = document.querySelector('#btn-add-work');
    
    addCloseEvent(modal1);
    linkModal(addWorkButton, "modal2");
    addCloseEvent(modal2);
    //addBackEvent(modal2);
}

function addCloseEvent(modal) {
    const xMarkIcon = modal.firstElementChild.firstElementChild.lastElementChild;
    xMarkIcon.addEventListener('click', function () {
        modal.style.display = "none";
    });
}

window.addEventListener('load', () => {
    if (sessionStorage.getItem('userToken')) {
        initEditUI();
        createModalEvents();
    }
});
