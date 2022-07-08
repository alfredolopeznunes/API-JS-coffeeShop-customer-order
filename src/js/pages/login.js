import { API } from "../globals.js";
import { pintarBanner } from "../components/banner.js";

//break point
const breakPoint = 'api/menus';

//metodo get de la instancia
const getLogin = (appClase) => {

    let tituloBanner = 'Iniciar Sesión';
    let msjBanner = '';
    let htmlAdicional = '';
    let claseBanner = appClase;

    pintarBanner(tituloBanner, msjBanner, htmlAdicional, claseBanner);
    
    API.get(breakPoint).then(data => {
        //mostrarCarta(data);
    }).catch(error => {
        console.log(error);
    })
};


export { getLogin }
