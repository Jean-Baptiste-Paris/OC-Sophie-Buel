//filters-display.js
import { allFilters } from "./dom-elements.js";

function toggleFilterButtons(activeButton) {
    allFilters.forEach(filter => {
        if (filter !== activeButton) {
            filter.classList.remove("actif");
            return;
        }
        filter.classList.add("actif");
    });
}

function removeFilters() {
    const filtersDiv = document.querySelector('.filtres');
    if (filtersDiv) filtersDiv.remove();
}

export {
    toggleFilterButtons,
    removeFilters
};
