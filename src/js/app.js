import { getCarta } from "./pages/menu.js";
import { getLogin } from "./pages/login.js";
import { getOrders } from "./pages/orders.js";
import { getUsuarios } from "./pages/usuarios.js";



const startApp = document.querySelector('#start-app');
//console.log(startApp.dataset.appStart)

document.addEventListener("DOMContentLoaded", () => {
    
    startApp.dataset.appStart === 'menu-app'  ?  getCarta(startApp.dataset.appStart) : 
    startApp.dataset.appStart === 'login-app' ? getLogin(startApp.dataset.appStart) :
    startApp.dataset.appStart === 'ordenes-app' ? getOrders(startApp.dataset.appStart) :
    startApp.dataset.appStart === 'usuarios-app' ? getUsuarios(startApp.dataset.appStart) : ''
    
});