//login.js
import { loginForm, emailInput, passwordInput } from "./dom-elements.js";
import { fetchLogin } from "./login-api.js";
import { handleLoginResponse } from "./login-handle-response.js";

async function attemptLogin(user) {

    try {
        const response = await fetchLogin(user);
        await handleLoginResponse(response);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la tentative de connexion :", error);
    }
}

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const user =
    {
        "email": emailInput.value,
        "password": passwordInput.value,
    }
    attemptLogin(user);
})