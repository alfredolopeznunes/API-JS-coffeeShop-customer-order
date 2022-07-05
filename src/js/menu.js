import { API } from "./globals.js";
//import { errorApi } from "./error.js";
//import { successApi } from "./success.js";


//break point
const breakPoint = 'api/menus';


//metodo get de la instancia
const getCarta = () => {
    
    API.get(breakPoint).then(data => {
        mostrarCarta(data);
    }).catch(error => {
        console.log(error);
    })
};

//Pinta el menu
const mostrarCarta = (elementos) => {
    
    const menuItems = document.querySelector('.menu-items');

    Object.keys(elementos).forEach(key => {
        const keyId = `
            <div id="${key}" class="carta carta-${key} pt-5">
                <h2 class="pt-5">
                    ${ key == 'fondo' ? 'Platos de ' + key[0].toUpperCase() + key.substring(1).toLowerCase() 
                     : key == 'jugos-bebidas' ? 'Para Beber'
                     : key[0].toUpperCase() + key.substring(1).toLowerCase() 
                    }
                </h2>
                <p class="mb-5">Somos los mejores en la gastronomía Chilena y tenemos lo mejor en ${ 
                    key == 'fondo' ? 'Platos de ' + key[0].toUpperCase() + key.substring(1).toLowerCase() 
                    : key == 'jugos-bebidas' ? 'Para Beber'
                    : key[0].toUpperCase() + key.substring(1).toLowerCase() 
                    }
                .</p>
                <div id="${key}-listado" class="listado-menu"></div>
            </div>`;
        menuItems.insertAdjacentHTML("beforeend", keyId);
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
    const botones = document.querySelectorAll('.show-more .btn')
    
    botones.forEach(boton => {
        boton.addEventListener("click", event => {
            event.preventDefault();

            const elementosHijos = event.currentTarget.parentElement.parentElement.children;
            const arrHijos = [...elementosHijos];
            
            arrHijos.forEach(hijo => {
                
                if(hijo.classList.contains('d-none')) {
                    hijo.classList.remove('d-none');
                    hijo.classList.add('d-grid');
                } else if(hijo.classList.contains('d-grid')) {
                    hijo.classList.remove('d-grid');
                    hijo.classList.add('d-none');
                } 
            })
        })
    })
}



document.addEventListener("DOMContentLoaded", () => {
    getCarta();
});

