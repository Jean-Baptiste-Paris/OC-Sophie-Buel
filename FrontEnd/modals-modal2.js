//modals-modal.js
import { createElement, createFaIcon } from "./global-create.js";
import { workCategories } from "./config.js";

const photoFrameIconClasses = ['fa-regular', 'fa-image'];


function modal2CreateContent(modalContentWrapper){
    if (!modalContentWrapper) {
        throw new Error("Paramètre non défini");
    }

    const photoFrame = createElement('div');
    photoFrame.id = 'photo-frame';
    photoFrameContent(photoFrame);

    const photoForm = createElement('form');
    photoForm.action = '#';
    photoForm.method = 'post';
    photoForm.id = 'photo-form';
    photoFormContent(photoForm);

    const submitButton = createElement("button");
    submitButton.type = 'submit';
    submitButton.setAttribute('form', 'photo-form');
    submitButton.value = 'submit';
    submitButton.innerText = 'Valider';

    modalContentWrapper.appendChild(photoFrame);
    modalContentWrapper.appendChild(photoForm);
    modalContentWrapper.appendChild(submitButton);
}

function photoFrameContent(domElement) {
    if (!domElement) {
        throw new Error("Paramètre non défini");
    }

    const storedWorkInfo = localStorage.getItem('workInfo');
    if (storedWorkInfo) {
        const parsedWorkInfo = JSON.parse(storedWorkInfo);
        const imageElement = createElement('img');
        console.log(parsedWorkInfo);
        imageElement.src = parsedWorkInfo.imageUrl;

        domElement.appendChild(imageElement);
        return
    }

    const imageElement = createElement('img');
    imageElement.id = 'img-preview';
    imageElement.src = '#';
    imageElement.style = 'display:none';
    const iconElement = createFaIcon(photoFrameIconClasses);
    const labelElement = createElement('label');
    labelElement.id = 'btn-add-photo'
    labelElement.for = 'file-input';
    labelElement.innerText = '+ Ajouter photo';
    const fileInputElement = createElement('input');
    fileInputElement.type = 'file';
    fileInputElement.accept = 'image/*';
    fileInputElement.id = 'file-input';
    const paragraphElement = createElement('p');
    paragraphElement.innerText = 'jpg, png : 4mo max';

    labelElement.addEventListener('click', () => {
        fileInputElement.click()
    });

    fileInputElement.addEventListener('change', () => {
        const [file] = fileInputElement.files;
        if (!file) {
            return;
        }
        imageElement.src = URL.createObjectURL(file);
        imageElement.style = '';
        iconElement.remove();
        labelElement.remove();
        paragraphElement.remove();
    })
    
    domElement.appendChild(imageElement);
    domElement.appendChild(iconElement);
    domElement.appendChild(labelElement);
    domElement.appendChild(fileInputElement);
    domElement.appendChild(paragraphElement);
   
}

function photoFormContent(domElement) {
    if (!domElement) {
        throw new Error("Paramètre non défini");
    }

    const titleLabel = createElement('label');
    titleLabel.for = 'title';
    titleLabel.innerText = 'Titre';
    const titleInput = createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.id = 'title';

    const categoryLabel = createElement('label');
    categoryLabel.for = 'category';
    categoryLabel.innerText = 'Catégorie';
    const categorySelect = createElement('select');
    for (const cat of workCategories) {
        selectAddOption(cat, categorySelect);
    }

    const storedWorkInfo = localStorage.getItem('workInfo');
    if (storedWorkInfo) {
        const parsedWorkInfo = JSON.parse(storedWorkInfo);
        titleInput.value = parsedWorkInfo.title;
        categorySelect.value = parsedWorkInfo.category.name;
    }

    domElement.appendChild(titleLabel);
    domElement.appendChild(titleInput);
    domElement.appendChild(categoryLabel);
    domElement.appendChild(categorySelect);
}

function selectAddOption(optValue, selectElement) {
    const option = createElement('option');
    option.value = optValue;
    option.text = optValue;

    selectElement.add(option, null);
}

export { modal2CreateContent }
