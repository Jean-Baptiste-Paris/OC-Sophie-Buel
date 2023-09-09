//api.js
import { API_URLS, categoryIds } from './config.js';
import { initGalleries } from './galleries.js';
import { closeModals } from './modals-logic.js';

const WORKS_URL = API_URLS.WORKS;

async function fetchWorks() {
    try {
        const response = await fetch(WORKS_URL);
        return await response.json();
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des travaux :", error);
        throw error;
    }
}

async function postWork(workObject) {
    try {
        const formData = new FormData();
        formData.append('image', workObject.image, workObject.image.name);
        formData.append('title', workObject.title);
        
        const categoryId = categoryIds.find(category => category[workObject.category]);
        if (categoryId) {
            formData.append('category', categoryId[workObject.category]);
        } else {
            throw new Error("Catégorie non trouvée dans la table de correspondance.");
        }

        const response = await fetch(WORKS_URL, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${sessionStorage['userToken']}`,
            },
            body: formData,
        });

        if (!response.ok) {
            console.error("Erreur HTTP lors de l'envoi des informations du projet :", response.status, response.statusText);
            throw new Error("Erreur lors de l'envoi du projet.");
        }

        return response;
    } catch (error) {
        console.error("Une erreur s'est produite lors de l'envoi des informations du projet :", error);
        throw error;
    }
}

async function handlePostWorkResponse(response) {
    switch (response.status) {
        case 201: // Créé avec succès
            const data = await response.json();
            console.log("Projet créé avec succès. ID du projet :", data.id);
            closeModals();
            initGalleries();
            break;
        case 401: // Erreur d'autorisation
            console.error("Erreur d'autorisation : L'utilisateur n'est pas authentifié.");
            break;
        case 404: // Ressource non trouvée
            console.error("Ressource non trouvée : L'URL de l'API est incorrecte ou la ressource n'existe pas.");
            break;
        case 500: // Erreur serveur
            console.error("Erreur serveur : Une erreur interne du serveur s'est produite.");
            break;
        default:
            console.error("Réponse inattendue du serveur avec le code :", response.status);
    }
}

async function deleteWork(workObject){
    try {
        const workId = workObject.id;
        const DELETE_URL = WORKS_URL + '/' + workId;
        const response = await fetch(DELETE_URL, {
            method: 'DELETE',
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${sessionStorage['userToken']}`,
            }
        });

        if (!response.ok) {
            console.error("Erreur HTTP lors de l'envoi des informations du projet :", response.status, response.statusText);
            throw new Error("Erreur lors de l'envoi du projet.");
        }

        handleDeleteWorkResponse(response);
    } catch (error) {
        console.error("Une erreur s'est produite lors de l'envoi des informations du projet :", error);
        throw error;
    }
}

async function handleDeleteWorkResponse(response) {
    switch (response.status) {
        case 204:
        case 200: // Succès
            console.log("Projet supprimé avec succès.");
            initGalleries();
            break;
        case 401: // Erreur d'autorisation
            console.error("Erreur d'autorisation : L'utilisateur n'est pas authentifié.");
            break;
        case 500: // Erreur serveur
            console.error("Erreur serveur : Une erreur interne du serveur s'est produite.");
            break;
        default:
            console.error("Réponse inattendue du serveur avec le code :", response.status);
    }
}

export {
    fetchWorks,
    postWork,
    handlePostWorkResponse,
    deleteWork
};