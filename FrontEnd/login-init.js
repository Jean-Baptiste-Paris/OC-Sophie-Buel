//login-init.js
import { initGlobalLayout } from "./global-init.js";
import { initLoginForm } from "./login-logic.js";

function initLogin() {
    initLoginForm();

}

document.addEventListener('DOMContentLoaded', () => {
    initGlobalLayout();
    initLogin();

});