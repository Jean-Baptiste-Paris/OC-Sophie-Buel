//global-create.js

function createElement(tag) {
    if (!tag){
        throw new Error("Le tag n'est pas défini correctement");
    }
    try {
        const newElement = document.createElement(tag);
        return newElement;
    } catch (error) {
        throw error;
    }
}

function createFaIcon(classes) {
    const iconElement = document.createElement('i');
    for (const className of classes) iconElement.classList.add(className);
    return iconElement;
}

export { 
    createElement,
    createFaIcon
}