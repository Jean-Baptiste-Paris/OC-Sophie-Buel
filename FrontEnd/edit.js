// const body = document.getElementsByTagName('body')[0];

function toggleEditBanner() {
    const iconClass = 'fa-pen-to-square';
    const editBanner = document.createElement('div');
    editBanner.classList.add('edit-banner');
    const paragraphElement = document.createElement('p');
    paragraphElement.innerText = 'Mode édition';
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa-regular', iconClass);
    const buttonElement = document.createElement('button');
    buttonElement.id = 'publish';
    buttonElement.type = 'input';
    buttonElement.innerText = 'publier les changements';
  
    document.body.insertBefore(editBanner, document.body.firstChild);
    editBanner.appendChild(paragraphElement);
    paragraphElement.prepend(iconElement);
    editBanner.appendChild(buttonElement);
}

function toggleEditIcons() {
    
}


if (sessionStorage.getItem('userToken')) {
    toggleEditBanner();
    toggleEditIcons();
};