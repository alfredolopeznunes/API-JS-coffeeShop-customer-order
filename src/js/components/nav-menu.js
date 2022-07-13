import { API } from "../globals.js";


//break point
const endPoint = '/api/menus';


//metodo get de la instancia
export const getLiMenu = () => {
    
    API.get(endPoint).then(data => {
        mostrarCarta(data);
    }).catch(error => {
        console.log(error);
    })
};

//Pinta el nav menu
const mostrarCarta = (elementos) => {
    
    const menuLi = document.querySelector('.menuppal .menu-lista');
    Object.keys(elementos).forEach(key => {
        
        menuLi.insertAdjacentHTML("beforeend", `<li><a href="/#${key}" class="nav-link px-2 text-secondary">${ key == 'fondo' ? 'Platos de ' + key[0].toUpperCase() + key.substring(1).toLowerCase() 
        : key == 'jugos-bebidas' ? 'Para Beber'
        : key[0].toUpperCase() + key.substring(1).toLowerCase() 
       }</a></li>`);
    })

}
