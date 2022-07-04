class Header extends HTMLElement {

    //const itemMenu = `<li><a href="#${key}" class="nav-link px-2 text-white">${key.toLowerCase}</a></li>`;

    

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
                                    <li><a href="#entradas" class="nav-link px-2 text-secondary">Entradas</a></li>
                                    <li><a href="#fondo" class="nav-link px-2 text-white">Platos de Fondo</a></li>
                                    <li><a href="#sandwichs" class="nav-link px-2 text-secondary">Sandwiches</a></li>
                                    <li><a href="#ensaladas" class="nav-link px-2 text-secondary">Ensaladas</a></li>
                                    <li><a href="#agregados" class="nav-link px-2 text-secondary">Agregados</a></li>
                                    <li><a href="#postres" class="nav-link px-2 text-secondary">Postres</a></li>
                                    <li><a href="#jugos-bebidas" class="nav-link px-2 text-white">Para Beber</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="tel:+86852346000" class="btn text-white me-2" tabindex="0" target="_blank">+86 852 346 000</a>
                        <a href="iniciar-sesion.html" class="btn button-primary">Iniciar sesión</a>
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
