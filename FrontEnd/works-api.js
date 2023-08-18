//api.js
import { API_URLS } from './config.js';

const GET_WORKS_URL = API_URLS.GET_WORKS;

async function fetchWorks() {
    try {
        const response = await fetch(GET_WORKS_URL);
        return await response.json();
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des travaux :", error);
        throw error;
    }
}

export {
    fetchWorks,
};
