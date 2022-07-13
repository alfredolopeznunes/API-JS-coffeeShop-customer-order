import { API } from "../globals.js";
import { pintarBanner } from "../components/banner.js";
import { loggedIn } from "../components/logged-in.js";
import { hoursMinutes, mesFecha } from "../helpers.js";
import { takeOrder } from "../components/take-order.js";

//Access Token
const accessToken = JSON.parse(localStorage.getItem('fz-loggedIn'));
const tableList = document.querySelector('#table-list');
const productoList = document.querySelector('#producto-list');
const qty = document.querySelector('#qty');
const orderCreateButton = document.querySelector('#order-create');


const getOrders = (appClase) => {

    if(loggedIn !== '' && loggedIn !== null) {

        /* bloque banner */
        let tituloBanner = 'Pedidos';
        let msjBanner = '';
        let htmlAdicional = '';
        let claseBanner = appClase;

        pintarBanner(tituloBanner, msjBanner, htmlAdicional, claseBanner);
        /* Fin bloque banner */

            
        //break point
        const endPoint = '/api/orders';

        API.getAdmin(endPoint, {

            "Authorization": accessToken

        }).then(data => {
            
        //console.log(data)
            mostrarPedidos(data);

        }).catch(error => {
            console.log(error);
        })

        tableAvailable();
        productAvailable();
        newOrder();

    } else {
        window.location.href = "/index.html";
    }
}


//Pintar datos
const mostrarPedidos = (elementos) => {
    
    const appDom = document.querySelector('.orders');

    Object.values(elementos).forEach(item => {
        const itemOrders = `
                <div id="${item.id}" class="user-list" data-user-id="${item.id}">
                    <div class="item-waiter pb-5">
                        <img src="http://ramosmerino.cl/gen6/dua-lipa.webp" width="60px" />
                        <span class="item-name">Dua Lipa</span>
                        <span class="item-date">${mesFecha(item.created_at)}</span>
                        <span class="item-time">${hoursMinutes(item.created_at)}</span>
                        <span class="item-id">ID: ${item.id}</span>
                    </div>
                    <div class="item-info mt-3 mb-5">
                        <h4 class="item-table">Mesa ${item.table}</h4>
                        
                        <span class="item-order">Comida</span>
                    </div>
                    <div class="action mb-5 text-center">
                        <button class="btn delivery-check">Marca como entregada <img src="/assets/images/arrow-48.png" width="34px" /></button>
                    </div>
                </div>`;
        appDom.insertAdjacentHTML("beforeend", itemOrders);
    });
}


// Mesas disponibles
const tableAvailable = () => {

    //break point
    const endPoint = '/api/tables';

    API.getAdmin(endPoint, {

        "Authorization": accessToken

    }).then(data => {
        
        data.forEach(item => {
            if(item.available) {
                tableList.insertAdjacentHTML("beforeend", `
                <option value="${item.id}">${item.name}</option>
                `)
            }
        })

    }).catch(error => {
        console.log(error);
    })

}

//Productos disponibles
const productAvailable = () => {

    //break point
    const endPoint = '/api/menus';

    API.get(endPoint).then(data => {
        
    
    Object.keys(data).forEach(item => {
        
        const productos = Object.values(data[item]);
        
        productos.forEach((product) => {
            //console.log(product);

            productoList.insertAdjacentHTML("beforeend", `
                <option value="${product.id}">${product.name}</option>
            `)
        })

    })
    

    }).catch(error => {
        console.log(error);
    })
}


const newOrder = () => {
    
    const nuevoPedidoForm = document.querySelector('#nuevo-pedido-form');


    nuevoPedidoForm.addEventListener("submit", event => {
    event.preventDefault();
    let responseDiv = document.querySelector('#nuevo-pedido-form .response');

        if(tableList.value !== null && tableList.value !== '' && productoList.value !== null && productoList.value !== '') {
            orderCreateButton.setAttribute('disabled', 'disabled');
            responseDiv.classList.remove('alert', 'alert-danger', 'show');

            let table = tableList.value;

            let create_at = Date.parse(new Date());
            
            const logUser = JSON.parse(atob(loggedIn.split('.')[1]));
            const waiter = logUser.id;

            let order = [
                {
                    "product": productoList.value,
                    "quantity": qty.value
                }
            ];

            takeOrder(table, create_at, waiter, order, accessToken);
        } else {
            responseDiv.classList.add('alert', 'alert-danger', 'show');
            responseDiv.textContent = 'hay campos vacíos o sin seleccionar';
    
            setTimeout(() => {
                responseDiv.classList.remove('alert', 'alert-danger', 'show');
            }, 5000);
        }
    })
}




export { getOrders, orderCreateButton }
