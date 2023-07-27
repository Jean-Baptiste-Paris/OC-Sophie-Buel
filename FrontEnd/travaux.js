// Récupération des travaux depuis l'API
const API_URL = 'http://localhost:5678/api/works';

async function getWorks() {
    const response = await fetch(API_URL);
    return await response.json();
}

// Récupération des éléments du DOM
const galleryElements = document.querySelectorAll(".gallery");
const allFilters = document.querySelectorAll(".btn-filtre");
const filterTous = document.querySelector("#btn-tous");
const filterObjets = document.querySelector("#btn-objets");
const filterAppartements = document.querySelector("#btn-appart");
const filterHotelsRestos = document.querySelector("#btn-hotels-restos");
const filtersCategory = [
    { button: filterTous, categoryId: null },
    { button: filterObjets, categoryId: 1 },
    { button: filterAppartements, categoryId: 2 },
    { button: filterHotelsRestos, categoryId: 3 }
];

let currentWorks = [];

// Initialisation
async function initGallery() {
    currentWorks = await getWorks();
    setupFilterListeners();
    generateWorks(currentWorks, galleryElements[0]);
    generateModalWorks(currentWorks, galleryElements[1])
    toggle(filterTous);
}

// Affichage de la grille des travaux
function generateWorks(works, galleryElement) {
    // Reinitialisation gallerie
    galleryElement.innerHTML = "";
    for (const work of works) {
        // Création des balises et de leurs attributs
        const workElement = document.createElement("figure");
        const imageElement = document.createElement("img");
        imageElement.src = work.imageUrl;
        imageElement.alt = work.title;
        const captionElement = document.createElement("figcaption");
        captionElement.innerText = work.title;

        // Rattachement des balises
        galleryElement.appendChild(workElement);
        workElement.appendChild(imageElement);
        workElement.appendChild(captionElement);
    }
}

// Affichage de la grille des travaux
function generateModalWorks(works, galleryElement) {
    // Reinitialisation gallerie
    galleryElement.innerHTML = "";
    for (const work of works) {
        // Création des balises et de leurs attributs
        const workElement = document.createElement("figure");
        const imageElement = document.createElement("img");
        imageElement.src = work.imageUrl;
        imageElement.alt = work.title;
        const captionElement = document.createElement("figcaption");
        captionElement.innerText = 'éditer';

        // Rattachement des balises
        galleryElement.appendChild(workElement);
        workElement.appendChild(imageElement);
        workElement.appendChild(captionElement);
    }
}

// Initialisation des Events Listeners des filtres
function setupFilterListeners() {
    filtersCategory.forEach(filter => {
        filter.button.addEventListener("click", function () {
            toggle(filter.button);
            const filteredWorks = filter.categoryId ? filterWorksByCategory(filter.categoryId) : currentWorks;
            generateWorks(filteredWorks)
        });
    });
}

// Gestion de l'apparence des filtres
function toggle(filterElement) {
    allFilters.forEach(filter => filter.classList.remove("actif"));
    filterElement.classList.add("actif");
}

// Filtrage des travaux par catégorie
function filterWorksByCategory(categoryId) {
    return currentWorks.filter(work => work.category.id === categoryId);
}

// Appel de la fonction d'initialisation pour charger les travaux au démarrage
initGallery();