// Récupération des travaux depuis l'API
const reponse = await fetch('http://localhost:5678/api/works');
const travaux = await reponse.json();

function genererTravaux(travaux) {
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

// Récupération de l'élément du DOM qui accueillera les travaux
const sectionTravaux = document.querySelector(".gallery");
genererTravaux(travaux);

// Récupération des filtres
const filtres = document.querySelectorAll(".btn-filtre");
const filtreTous = document.querySelector("#btn-tous");
const filtreObjets = document.querySelector("#btn-objets");
const filtreAppartements = document.querySelector("#btn-appart");
const filtreHotelsRestos = document.querySelector("#btn-hotels-restos");

// Gestion des filtres
$(filtreTous).addClass("actif");

filtreTous.addEventListener("click", function () {
    $(filtres).removeClass("actif");
    $(filtreTous).addClass("actif");
    sectionTravaux.innerHTML = "";
    genererTravaux(travaux);
});

filtreObjets.addEventListener("click", function () {
    $(filtres).removeClass("actif");
    $(filtreObjets).addClass("actif");
    const travauxFiltres = travaux.filter(function (travaux) {
        return travaux.category.id == 1
    });
    sectionTravaux.innerHTML = "";
    genererTravaux(travauxFiltres);
})

filtreAppartements.addEventListener("click", function () {
    $(filtres).removeClass("actif");
    $(filtreAppartements).addClass("actif");
    const travauxFiltres = travaux.filter(function (travaux) {
        return travaux.category.id == 2
    });
    sectionTravaux.innerHTML = "";
    genererTravaux(travauxFiltres);
})

filtreHotelsRestos.addEventListener("click", function () {
    $(filtres).removeClass("actif");
    $(filtreHotelsRestos).addClass("actif");
    const travauxFiltres = travaux.filter(function (travaux) {
        return travaux.category.id == 3
    });
    sectionTravaux.innerHTML = "";
    genererTravaux(travauxFiltres);
})