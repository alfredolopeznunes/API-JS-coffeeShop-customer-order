import { API } from "./globals.js";
//import { errorApi } from "./error.js";
//import { successApi } from "./success.js";


//break point
const breakPoint = 'api/menus';


//metodo get de la instancia
const getCarta = () => {
    
    API.get(breakPoint).then(data => {
        //console.log(data);
        //successApi()
        mostrarCarta(data)
    }).catch(error => {
        //errorApi(error);
    })
};

const mostrarCarta = (elementos) => {
    console.log(elementos);
}



document.addEventListener("DOMContentLoaded", () => {
    getCarta();
});