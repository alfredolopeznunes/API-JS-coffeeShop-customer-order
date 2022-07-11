import { pintarBanner } from "../components/banner.js";
import { validateUser } from "../components/validate-user.js";
import { errorLogin } from "../components/error.js";
import { loggedIn } from "../components/logged-in.js";


const getLogin = (appClase) => {

    if(loggedIn === '' || loggedIn === null) {

        /* bloque banner */
        let tituloBanner = 'Iniciar Sesión';
        let msjBanner = '';
        let htmlAdicional = '';
        let claseBanner = appClase;

        pintarBanner(tituloBanner, msjBanner, htmlAdicional, claseBanner);
        /* Fin bloque banner */

        /* modal lista de usuarios */
        const addUser = document.querySelectorAll('.add-user');

        const loginInput = document.querySelector('#login');
        const passInput = document.querySelector('#password');
        
        addUser.forEach(add => {
            add.addEventListener("click", event => {
                event.preventDefault();
                
                loginInput.value = event.currentTarget.dataset.userName;
                passInput.value = event.currentTarget.dataset.userPass;
                document.querySelector('.modal-close').click();
            })
        })
        /* Fin modal lista de usuarios */
        
        /* Captura los datos del formulario */
        const userForm = document.querySelector('#user-form');

        userForm.addEventListener("submit", event => {
            event.preventDefault();

            if(loginInput != '' && passInput != '') {
                validateUser(loginInput.value, passInput.value);
            } else {
                errorLogin("error");
            }
        })
    } else {
        window.location.href = "/pages/ordenes.html";
    }
};


export { getLogin, validateUser }
