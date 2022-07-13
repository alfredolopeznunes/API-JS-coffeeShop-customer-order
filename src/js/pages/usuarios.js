import { API } from "../globals.js";
import { pintarBanner } from "../components/banner.js";
import { loggedIn, userType } from "../components/logged-in.js";
import { fechaBirthday } from "../helpers.js";

const getUsuarios = (appClase) => {

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
    const accessToken = JSON.parse(localStorage.getItem('fz-loggedIn'));

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


//Pintar datos

const mostrarUsuarios = (elementos) => {
    
    const appDom = document.querySelector('#app');

    Object.values(elementos).forEach(item => {
        const itemUser = `
            <div class="usuarios pt-4 pb-4">
                <div id="${item.id}" class="user-list" data-user-id="${item.id}">
                    <div class="item-img">
                        <img src="${item.img}" />
                    </div>
                    <div class="item-info mt-3">
                        <h4 class="item-name">${item.name}</h4>
                        <span class="item-roles">${item.roles[0] === 'admin' ? 'Administrador' : 'Usuario'}</span>
                        <span class="item-birthday">Cumpleaños: ${fechaBirthday(item.birthday)}</span>
                        <span class="item-email">${item.email}</span>
                        <span class="item-phone">${item.phone}</span>
                    </div>
                </div>
            </div>`;
        appDom.insertAdjacentHTML("beforeend", itemUser);
    });
}


export { getUsuarios }
