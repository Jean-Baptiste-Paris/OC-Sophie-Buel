// dom-elements.js
const galleryElements = document.querySelectorAll(".gallery");
const allFilters = document.querySelectorAll(".btn-filtre");
const loginForm = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const storageButton = document.querySelector('#clear-storage');
const introSection = document.querySelector('#introduction');
const introFigure = introSection ? introSection.firstElementChild : null;
const titleWrapper = document.querySelector('.title-wrapper');
const modals = document.querySelectorAll('.modal');

export {
    storageButton,
    galleryElements,
    allFilters,
    loginForm,
    emailInput,
    passwordInput,
    introFigure,
    titleWrapper,
    modals
};
