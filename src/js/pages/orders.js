import { pintarBanner } from "../components/banner.js";
import { loggedIn } from "../components/logged-in.js";

const getOrders = (appClase) => {

    if(loggedIn !== '' && loggedIn !== null) {

    /* bloque banner */
    let tituloBanner = 'Pedidos';
    let msjBanner = '';
    let htmlAdicional = '';
    let claseBanner = appClase;

    pintarBanner(tituloBanner, msjBanner, htmlAdicional, claseBanner);
    /* Fin bloque banner */

    } else {
        window.location.href = "/index.html";
    }
}


export { getOrders }
