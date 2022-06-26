import { msjResponse } from "./app.js";

function successApi() {
    
    msjResponse.classList.add('alert-success', 'show');
    msjResponse.innerHTML = `Usuario autenticado correctamente`;
    
    setTimeout(() => {
        msjResponse.classList.remove('alert-success', 'show');
    }, 4000);
}

export { successApi }