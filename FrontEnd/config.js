// config.js
const API_URLS = {
    WORKS: 'http://localhost:5678/api/works',
    POST_LOGIN: 'http://localhost:5678/api/users/login'
};
const filtersCategory = [
    { button: document.querySelector("#btn-tous"), categoryId: null },
    { button: document.querySelector("#btn-objets"), categoryId: 1 },
    { button: document.querySelector("#btn-appart"), categoryId: 2 },
    { button: document.querySelector("#btn-hotels-restos"), categoryId: 3 }
];
const categoryIds = [
    { 'Objets' : 1 },
    { 'Appartements' : 2 },
    { 'Hôtels & restaurants' : 3 }
];
const modalsData = {
    "modal1" : "Galerie photo",
    "modal2" : "Ajout photo"
}
const workCategories = [ '','Objets', 'Appartements', 'Hotels & restaurants'];
const modifierElementIconClasses = ['fa-sharp', 'fa-regular', 'fa-pen-to-square'];
const closeIconClasses = ['fa-solid', 'fa-xmark'];
const backIconClasses = ['fa-solid', 'fa-arrow-left'];

export {
    API_URLS,
    filtersCategory,
    categoryIds,
    modalsData,
    workCategories,
    modifierElementIconClasses,
    closeIconClasses,
    backIconClasses
};
