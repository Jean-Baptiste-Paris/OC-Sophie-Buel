// Récupération des travaux depuis l'API
const reponse = await fetch('http://localhost:5678/api/works');
const travaux = await reponse.json();

function genererTravaux(travaux) {
    // Récupération de l'élément du DOM qui accueillera les travaux
    const sectionTravaux = document.querySelector(".gallery");
    for (let i = 0 ; i < travaux.length ; i++) {

        // Récupération du travail observé dans ce passage de la boucle
        const travail = travaux[i];
        // Création d’une balise dédiée à un travail
        const travailElement = document.createElement("figure");
        // Création du contenu de la figure
        const imageElement = document.createElement("img");
        imageElement.src = travail.imageUrl;
        imageElement.alt = travail.title;
        const captionElement = document.createElement("figcaption");
        captionElement.innerText = travail.title;

        // Rattachement des balises
        sectionTravaux.appendChild(travailElement);
        travailElement.appendChild(imageElement);
        travailElement.appendChild(captionElement);
    }
}

genererTravaux(travaux);