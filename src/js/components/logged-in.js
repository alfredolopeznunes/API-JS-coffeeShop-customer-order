import { obtenerAcceso } from "../local-storage.js"
import { loggedOut } from "./logged-out.js";

const loggedIn = obtenerAcceso();

//Obtiene el tipo de usuario desde el local storage
const userType = JSON.parse(localStorage.getItem('fz-type'));


const crearLogin = () => {

    if(loggedIn !== '' && loggedIn !== null) {

        //Limpiar intentos del local storage
        let intentos = 0;
        // Convertir de string a arreglo para local storage y agregar intentos
        localStorage.setItem('fz-intentos', JSON.stringify(intentos));


        const logUser = JSON.parse(atob(loggedIn.split('.')[1]));
        //console.log(logUser);

        //mensaje de bienvenida
        const infoEmployee = document.querySelector('.info-employee');
        infoEmployee.insertAdjacentHTML("afterbegin", `<div class="employee-logged-in"><span>Usuario: ${logUser.name}</span></div>`);



        
        // Boton de cerrar sesión
        const botonLogin = document.querySelector('#boton-login');
        botonLogin.textContent = "Cerrar sesión";

        // Insertar en el menu link de pagina de pedidos
        const menuLi = document.querySelector('.menuppal .menu-lista');
        menuLi.insertAdjacentHTML("beforeend", `<li><a href="/pages/ordenes.html" class="ordenes-nav nav-link px-2 text-secondary">Ordenes</a></li>`);

        if(logUser.roles[0] === 'admin') {
            menuLi.insertAdjacentHTML("afterbegin", `<li><a href="/pages/lista-usuarios.html" class="usuarios-nav nav-link px-2 text-secondary">Usuarios</a></li>`);
        }

        localStorage.setItem('fz-type', JSON.stringify(logUser.roles[0]));
        
    }

    //ejecuta si se cierra la sesión
    loggedOut();
        
}
    
    export { crearLogin, loggedIn, userType }