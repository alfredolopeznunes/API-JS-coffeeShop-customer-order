import { guardarAcceso } from "../local-storage.js";
import { orderCreateButton } from "../pages/orders.js";

const successLogin = (type, token) => {

    guardarAcceso(type, token);

    window.location.href = "/pages/ordenes.html";

}

const successOrder = (respuesta) => {

    let responseDiv = document.querySelector('#nuevo-pedido-form .response');
    responseDiv.classList.add('alert', 'alert-success', 'show');
    responseDiv.textContent = respuesta;

    setTimeout(() => {
        document.querySelector('#nuevo-pedido-form').reset();
        orderCreateButton.removeAttribute('disabled');
        responseDiv.classList.remove('alert', 'alert-success', 'show');
    }, 5000);

}

export { successLogin, successOrder }