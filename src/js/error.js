import { msjResponse } from "./app.js";

function errorApi(error) {
    
    msjResponse.classList.add('error', 'alert-danger', 'show');
    msjResponse.innerHTML = `Usuario y/o contraseña invalidos`;
    console.error(error);
    
    setTimeout(() => {
        msjResponse.classList.remove('error', 'alert-danger', 'show');
    }, 4000);
}


export { errorApi }