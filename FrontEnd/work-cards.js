function generateWorkCards(works, galleryElement) {
    if (!galleryElement) return console.error("Erreur dans generateWorks : galleryElement n'est pas défini");
    galleryElement.innerHTML = "";

    for (const work of works) {
        const workElement = document.createElement("figure");
        const imageElement = document.createElement("img");
        imageElement.src = work.imageUrl;
        imageElement.alt = work.title;
        const captionElement = document.createElement("figcaption");
        captionElement.innerText = galleryElement.classList.contains("modal-gallery") ? "éditer" : work.title;

        // Rattachement des balises
        galleryElement.appendChild(workElement);
        workElement.appendChild(imageElement);
        workElement.appendChild(captionElement);
    }
}

export { generateWorkCards };
