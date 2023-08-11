//global-create.js

function createFaIcon(classes) {
    const iconElement = document.createElement('i');
    for (const className of classes) iconElement.classList.add(className);
    return iconElement;
}

export { createFaIcon }