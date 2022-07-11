export class Header extends HTMLElement {    

    connectedCallback() {
        this.innerHTML = `
        <header class="header p-4">
            <div class="container-fluid mt-4">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-end">
                        <a href="/" class="logo mb-2 mb-lg-0 text-decoration-none">
                            <img src="/assets/images/FoodZero.png" class="logo-img" alt="FoodZero" title="FoodZero">
                        </a>
                        <nav class="nav-menu ms-5">
                            <div class="hamburger">
                                <div class="_layer -top"></div>
                                <div class="_layer -mid"></div>
                                <div class="_layer -bottom"></div>
                            </div>
                            <div class="menuppal">
                                <ul class="menu-lista">
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="info-employee d-flex align-items-center">
                        <a href="tel:+86852346000" class="btn text-white me-2" tabindex="0" target="_blank">+86 852 346 000</a>
                        <a href="../../../pages/iniciar-sesion.html" id="boton-login" class="btn button-primary">Iniciar sesión</a>
                    </div>
                </div>
            </div>
        </header>`;
    }
}

customElements.define('header-template', Header);


//si hay scroll despues de cargar el dom, aplica "toggle" en el header
const header = document.querySelector('header');

window.addEventListener('scroll', (e) => {
    //console.log(e.currentTarget.scrollY);
    header.classList[e.currentTarget.scrollY > 100 ? 'add' : 'remove']('scroll-active');
});
/* ------------------------------------------------------------------------------------- */

//evento para abrir/cerrar el menu
let menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

/* ------------------------------------------------------------------------------------- */
// importar y mostrar items del nav menu
import { getLiMenu } from "./nav-menu.js";
import { crearLogin } from "./logged-in.js";
import { agregarIntentosLogin } from "../components/error.js"

document.addEventListener("DOMContentLoaded", () => {
    getLiMenu();
    crearLogin();
    
     // Verificar intentos login y bloqueo por tiempo
     agregarIntentosLogin(0);
});


