//login-init.js
import { initGlobalLayout } from "./global-init.js";
import { initLoginForm } from "./login.js";

function initLogin() {
    initLoginForm();

}

document.addEventListener('DOMContentLoaded', () => {
    initGlobalLayout();
    initLogin();

});