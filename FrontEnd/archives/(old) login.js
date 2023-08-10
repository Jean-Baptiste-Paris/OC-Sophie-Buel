// Envoi du formulaire de connexion à l'API
const API_URL = 'http://localhost:5678/api/users/login';

//Récuperation du formulaire
const loginForm = document.querySelector('#login-form');

let loggedUser = {
    "userId": null,
    "token": "",
}

// Requête de connexion sur /users/login et gestion des réponses
async function attemptLogin(user) {
    // Vérification de la présence d'un précédent message d'erreur
    const previousMessage = document.querySelector('.error');
    if (previousMessage) {
        previousMessage.remove();                            // Le délai après avoir éffacé le précedent message permet
        await new Promise(resolve => setTimeout(resolve, 100)); // un retour visuel indiquant une nouvelle tentative de connexion
    }

    // Requête
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    // Gestion de la réponse
    switch (response.status) {
        case 200: // utilisateur valide, reception de l'element loggedUser
            loggedUser = await response.json();
            console.log(loggedUser);
            sessionStorage.setItem('userId', loggedUser.userId);
            sessionStorage.setItem('userToken', loggedUser.token);
            window.location.href = '/index.html';
            break;
        case 401: // erreur d'autorisation
        case 404: // utilisateur non trouvé
        default :
            incorrectUserMessage();
            break;
    }
}

async function incorrectUserMessage() {
    // Création d'un nouveau message d'erreur qui s'affiche en haut du formulaire
    const message = document.createElement('p');
    message.innerText = 'Erreur dans l’identifiant ou le mot de passe';
    message.classList.add('error')
    loginForm.insertBefore(message, loginForm.firstChild);
}

// Initialisation du Listener sur le formulaire de connexion
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Récupération des inputs
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Création d'un élement user contenant les inputs du formulaire
    let user = {
        email: email,
        password: password,
    };

    attemptLogin(user)
})