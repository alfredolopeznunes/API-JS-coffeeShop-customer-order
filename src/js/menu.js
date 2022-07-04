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

const mostrarCarta = (elementos) => {
    
    //console.log(elementos);
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

        //console.log( Object.values(elementos[articulo]) );
        const items = Object.values(elementos[articulo]);
        console.log(items);
        
        items.forEach(item => {
           
            //console.log( item );
            //console.log(articulo);
                       
            return document.querySelector(`#${articulo}-listado`).insertAdjacentHTML("beforeend", `
                <div class="item-lista mt-5 mb-5">
                    <div class="item-img">
                        <img src="${item.img}" />
                    </div>
                    <div class="item-info mt-3">
                        <h5 class="item-price">$${item.price}</h5>
                        <h4 class="item-name">${item.name}</h4>
                        <span class="item-description">${item.description}</span>
                    </div>
                </div>
            `);

        });

        
        
    }

 
 
 /*
    //Mostrar entradas
    elementos.entradas.forEach(item => {

        let listadoMenu = document.querySelector('#entradas .listado-menu');
        
        listadoMenu.insertAdjacentHTML("beforeend", `
            <div class="item-img">
                <img src="${item.img}" />
            </div>
            <div class="item-info mt-3">
                <h5 class="item-price">$${item.price}</h5>
                <h4 class="item-name">${item.name}</h4>
                <span class="item-description">${item.description}</span>
            </div>
        `);
    });

    //Mostrar fondo
    elementos.fondo.forEach(item => {

        let listadoMenu = document.querySelector('#fondo .listado-menu');
        
        listadoMenu.insertAdjacentHTML("beforeend", `
            <div class="item-img">
                <img src="${item.img}" />
            </div>
            <div class="item-info mt-3">
                <h5 class="item-price">$${item.price}</h5>
                <h4 class="item-name">${item.name}</h4>
                <span class="item-description">${item.description}</span>
            </div>
        `);
    });

*/

}



document.addEventListener("DOMContentLoaded", () => {
    getCarta();
});