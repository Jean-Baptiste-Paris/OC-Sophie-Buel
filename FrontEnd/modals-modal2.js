//modals-modal.js
import { createElement, createFaIcon } from "./global-create.js";
import { workCategories } from "./config.js";
import { postWork, handlePostWorkResponse } from "./works-api.js";

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
    submitButton.id = 'submit-work';
    submitButton.value = 'submit';
    submitButton.innerText = 'Valider';

    photoForm.addEventListener('change', () => {
        isFormComplete() ? submitButton.classList.add('ready') : submitButton.classList.remove('ready');
    });

    submitButton.addEventListener('click', (event) => {
        event.preventDefault()
        sendWorkData(submitButton);
    })

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
        isInputFilled(fileInputElement);
    });

    fileInputElement.addEventListener('change', () => {
        const [file] = fileInputElement.files;
        if (!file) {
            return;
        }
        imageElement.src = URL.createObjectURL(file);
        imageElement.style = '';
        const toHide = [iconElement, labelElement, paragraphElement];
        for (const e of toHide) {
            e.style = 'display:none';
        }
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

    titleInput.addEventListener('change', () => {
        isInputFilled(titleInput);
    });

    const categoryLabel = createElement('label');
    categoryLabel.for = 'category';
    categoryLabel.innerText = 'Catégorie';
    const categorySelect = createElement('select');
    for (const cat of workCategories) {
        selectAddOption(cat, categorySelect);
    }

    categorySelect.addEventListener('change', () => {
        isInputFilled(categorySelect);
    });

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

function isFormComplete() {
    const filledInputs = document.querySelectorAll('.filled');

    return (filledInputs.length === 3);
}

function isInputFilled(formInputElement) {
    const hasFilledClass = formInputElement.classList.contains('filled');
    const isEmpty = formInputElement.value === '' && !formInputElement.files;

    if (isEmpty && hasFilledClass) {
        toggleFilledClass(formInputElement);
        return
    }
    if (!isEmpty && !hasFilledClass) {
        toggleFilledClass(formInputElement);
    }
}


function toggleFilledClass(domElement) {
    const classList = domElement.classList;
    if (classList.contains('filled')) {
        classList.remove('filled');
        return
    }
    classList.add('filled');
}

async function sendWorkData(DOMButton) {
    if (! DOMButton.classList.contains('ready')) {
        return
    }
    const imageInput = document.querySelector('#file-input');
    const titleInput = document.querySelector('#title');
    const catInput = document.querySelector('select');
    const newWork = {
        'image': imageInput.files[0],
        'title': titleInput.value,
        'category': catInput.value
    };
    try {
        const response = await postWork(newWork);
        handlePostWorkResponse(response);
    } catch (error) {
        console.error("Une erreur s'est produite lors de l'envoi des informations du projet :", error);
    }

}

export { modal2CreateContent }
