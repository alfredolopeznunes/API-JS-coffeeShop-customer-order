//Guardar token en el local Storage
const guardarAcceso = (type, token) => {

    localStorage.setItem('fz-loggedIn', JSON.stringify(`${type} ${token}`));
}


//Obtener token si existe en el local Storage
const obtenerAcceso = () => {

    let accesos;

    // Revisamos los valores de local storage
    if(localStorage.getItem('fz-loggedIn') === null ) {
        accesos = '';
    } else {
        accesos = JSON.parse(localStorage.getItem('fz-loggedIn'));
    }

    return accesos;

}

//borrar token de acceso del local storage
const borrarAcceso = () => {
    localStorage.removeItem('fz-loggedIn');
    localStorage.removeItem('fz-type');
}

export { guardarAcceso, obtenerAcceso, borrarAcceso }