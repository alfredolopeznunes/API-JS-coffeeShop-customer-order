import { API } from "../globals.js";
import { pintarBanner } from "../components/banner.js";


const getCarta = (appClase) => {

    let tituloBanner = 'MENÚ';
    let msjBanner = 'Conoce nuestra variada carta';
    let htmlAdicional = `
    <div class="texto-banner text-white d-flex flex-column align-items-end">
        <div class="horarios pb-5">
            <strong>OPEN Time</strong>
            <span>Sunday - Friday</span>
        </div>
        <ul class="horarios-comidas text-white pt-5">
            <li><span>Brunch</span><span>11:00-12:00</span></li>
            <li><span>Lunch</span><span>13:00-17:00</span></li>
            <li><span>Dinner</span><span>18:00-20:00</span></li>
        </ul>
    </div>`;
    let claseBanner = appClase;

    pintarBanner(tituloBanner, msjBanner, htmlAdicional, claseBanner);
    
    
    //break point
    const breakPoint = '/api/menus';

    //metodo get de la instancia
    API.get(breakPoint).then(data => {

        mostrarCarta(data);
        
    }).catch(error => {
        console.log(error);
    })
};

//Pinta el menu
const mostrarCarta = (elementos) => {
    
    const appDom = document.querySelector('#app');

    Object.keys(elementos).forEach(key => {
        const keyId = `
            <div id="${key}" class="carta carta-${key} pt-5">
                <h2 class="pt-5">
                    ${ key == 'fondo' ? 'Platos de ' + key[0].toUpperCase() + key.substring(1).toLowerCase() 
                     : key == 'jugos-bebidas' ? 'Para Beber'
                     : key[0].toUpperCase() + key.substring(1).toLowerCase() 
                    }
                </h2>
                <p class="mb-5">Somos los mejores en gastronomía Chilena y tenemos lo mejor en ${ 
                    key == 'fondo' ? 'Platos de ' + key[0].toUpperCase() + key.substring(1).toLowerCase() + '.' 
                    : key == 'jugos-bebidas' ? 'Bebestibles.'
                    : key[0].toUpperCase() + key.substring(1).toLowerCase() + '.' 
                    }
                </p>
                <div id="${key}-listado" class="listado-menu"></div>
            </div>`;
        appDom.insertAdjacentHTML("beforeend", keyId);
        listadoMenu(key);
    });
    

    function listadoMenu(articulo) {

        const items = Object.values(elementos[articulo]);
        
        items.forEach((item, index, arrItems) => {

            return document.querySelector(`#${articulo}-listado`).insertAdjacentHTML("beforeend", `
                <div class="item-lista mt-5 mb-5 ${ index <= 2 ? '' : 'd-none' }">
                    <div class="item-img">
                        <img src="${item.img}" />
                    </div>
                    <div class="item-info mt-3">
                        <h5 class="item-price">$${item.price}</h5>
                        <h4 class="item-name">${item.name}</h4>
                        <span class="item-description">${item.description}</span>
                    </div>
                </div>
                ${index === (arrItems.length -1) && index >= 3 ? "<div class='show-more mb-3'><button class='btn button-primary'>Ver más</button></div>" : ''}
            `);
        });
    }

    
    //funcionalidad del boton ver mas
    const botones = document.querySelectorAll('.show-more .btn');
    
    botones.forEach(boton => {
        boton.addEventListener("click", event => {
            event.preventDefault();

            const elementosHijos = event.currentTarget.parentElement.parentElement.children;
            const arrHijos = [...elementosHijos];
            
            arrHijos.forEach(hijo => {
                
                if(hijo.classList.contains('d-none')) {
                    hijo?.classList.remove('d-none',);
                    hijo?.classList.add('d-grid', 'fadeIn');
                    event.currentTarget.textContent = 'Ver menos';
                } else if(hijo.classList.contains('d-grid')) {
                    hijo.classList.remove('d-grid', 'fadeIn');
                    hijo?.classList.add('d-none');
                    event.currentTarget.textContent = 'Ver más';
                } 
            })
        })
    })
}



export { getCarta }

