// login-api.js
import { API_URLS } from "./config.js";

const POST_LOGIN_URL = API_URLS.POST_LOGIN;

async function fetchLogin(user) {
    try {
        const response = await fetch(POST_LOGIN_URL, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        return response;
    } catch (error) {
        console.error("Une erreur s'est produite lors de l'envoi des information de connexion :", error);
        throw error;
    }
}

export { fetchLogin };
