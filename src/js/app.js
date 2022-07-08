import { getCarta } from "./pages/menu.js";
import { getLogin } from "./pages/login.js";



const startApp = document.querySelector('#start-app');
//console.log(startApp.dataset.appStart)

document.addEventListener("DOMContentLoaded", () => {
    
    startApp.dataset.appStart === 'menu-app'  ?  getCarta(startApp.dataset.appStart) : 
    startApp.dataset.appStart === 'login-app' ? getLogin(startApp.dataset.appStart) : ''
    
});