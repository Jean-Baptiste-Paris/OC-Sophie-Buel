//login.js
import { loginForm, emailInput, passwordInput } from "./dom-elements";
import { fetchLogin } from "./login-api";
import { handleLoginResponse } from "./login-handle-response";

async function attemptLogin({ email = "", password = "" }) {
    const user = {
        "email": email,
        "password": password
    };

    try {
        const response = await fetchLogin(user);
        await handleLoginResponse(response);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la tentative de connexion :", error);
    }
}

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    attemptLogin(emailInput.value, passwordInput.value);
})