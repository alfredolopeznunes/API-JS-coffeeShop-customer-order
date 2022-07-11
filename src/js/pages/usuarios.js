import { API } from "../globals.js";
import { pintarBanner } from "../components/banner.js";
import { loggedIn } from "../components/logged-in.js";

const getUsuarios = (appClase) => {

    //Obtiene el tipo de usuario desde el local storage
    let userType;
    userType = JSON.parse(localStorage.getItem('fz-type'));
    //console.log(userType);

    if(userType === 'admin' && loggedIn !== '' && loggedIn !== null) {

    /* bloque banner */
    let tituloBanner = 'Usuarios';
    let msjBanner = '';
    let htmlAdicional = '';
    let claseBanner = appClase;

    pintarBanner(tituloBanner, msjBanner, htmlAdicional, claseBanner);
    /* Fin bloque banner */
    
    //break point
    const endPoint = '/api/users';

    //Access Token
    const accessToken = userType = JSON.parse(localStorage.getItem('fz-loggedIn'));

    //console.log(accessToken)

    //api/users
    API.getAdmin(endPoint, {

        "Authorization": accessToken

    }).then(data => {
        
        mostrarUsuarios(data);

    }).catch(error => {
        console.log(error);
    })


    } else {
        window.location.href = "/index.html";
    }
}


//Pinta el menu
const mostrarUsuarios = (elementos) => {
    
    const appDom = document.querySelector('#app');

    Object.values(elementos).forEach(item => {
        const itemUser = `
            <div id="${item.id}" class="user pt-5" data-user-id="${item.id}">
            <div class="item-img">
                <img src="${item.img}" />
            </div>
            <div class="item-info mt-3">
                <h4 class="item-name">${item.name}</h4>
                <span class="item-roles">${item.roles[0]}</span>
            </div>
            </div>`;
        appDom.insertAdjacentHTML("beforeend", itemUser);
    });
}


export { getUsuarios }
