// Envoi du formulaire de connexion à l'API
const API_URL = 'http://localhost:5678/api/users/login';

//Récuperation du formulaire
const loginForm = document.getElementById('login-form');

let loggedUser = {
    "userId": null,
    "token": "",
}

// Requête de connexion sur /users/login et gestion des réponses
async function attemptLogin(user) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    switch (response.status) {
        case 401: // erreur d'autorisation
        case 404: // utilisateur non trouvé
            incorrectUserMessage();
            break;
        case 200: // utilisateur valide, reception de l'element loggedUser
            loggedUser = await response.json();
            console.log(loggedUser);
            break;
    }
}

async function incorrectUserMessage() {
    // Vérification de la présence d'un précédent message d'erreur
    const previousMessage = document.getElementsByClassName('error');
    if (previousMessage.length > 0) {
        previousMessage[0].remove();                            // Le délai après avoir éffacé le précedent message permet
        await new Promise(resolve => setTimeout(resolve, 100)); // un retour visuel indiquant une nouvelle tentative de connexion
    }

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
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Création d'un élement user contenant les inputs du formulaire
    let user = {
        email: email,
        password: password,
    };

    attemptLogin(user)
})