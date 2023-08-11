//filters-logic.js
import { toggleFilterButtons } from "./filters-display.js";
import { createWorkCards } from "./works-cards.js";

const filtersCategory = [
    { button: document.querySelector("#btn-tous"), categoryId: null },
    { button: document.querySelector("#btn-objets"), categoryId: 1 },
    { button: document.querySelector("#btn-appart"), categoryId: 2 },
    { button: document.querySelector("#btn-hotels-restos"), categoryId: 3 }
];

function setupFilterListeners(works, galleryElement) {
    filtersCategory.forEach(filter => {
        const filterButton = filter.button;
        if (!filterButton) return console.error("Erreur dans setupFilterListeners : élément de filtre manquant.");
        filterButton.addEventListener("click", () => {
            toggleFilterButtons(filterButton);
            const filteredWorks = filter.categoryId ? filterWorksByCategory(works, filter.categoryId) : works;
            createWorkCards(filteredWorks, galleryElement);
        });
    });
}

function filterWorksByCategory(works, categoryId) {
    return works.filter(work => work.category.id === categoryId);
}

export { setupFilterListeners };
