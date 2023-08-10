const API_URL_WORKS = 'http://localhost:5678/api/works';

async function fetchWorks() {
    try {
        const response = await fetch(API_URL_WORKS);
        return await response.json();
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des travaux :", error);
        throw error;
    }
}

export { fetchWorks };
