import { borrarAcceso } from "../local-storage.js";
import { loggedIn } from "./logged-in.js";

const loggedOut = () => {

    if(loggedIn !== '' && loggedIn !== null) {

        const botonloggedOut = document.querySelector('#boton-login');

        botonloggedOut.addEventListener("click", event => {
            event.preventDefault();

            borrarAcceso();
            window.location.href = "/index.html";
        })
    }

}


export { loggedOut }
