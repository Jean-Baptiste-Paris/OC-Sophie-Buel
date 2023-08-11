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

export { toggleFilterButtons };
