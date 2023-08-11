//login-handle-response.js
async function handleLoginResponse(response) {
    switch (response.status) {
        case 200: // utilisateur valide
            sessionStorage.setItem('userId', response.userId);
            sessionStorage.setItem('userToken', response.token);
            window.location.href = './index.html';
            break;
        case 401: // erreur d'autorisation
        case 404: // utilisateur non trouvé
        default:
            incorrectUserMessage();
            break;
    }
}

async function incorrectUserMessage() {
    const message = document.createElement('p');
    message.innerText = 'Erreur dans l’identifiant ou le mot de passe';
    message.classList.add('error')
    loginForm.insertBefore(message, loginForm.firstChild);
}

export { handleLoginResponse }