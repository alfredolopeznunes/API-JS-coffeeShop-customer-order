import { formatDate } from "../helpers.js";

const responseDiv = document.querySelector('.error');

const errorLogin = (error) => {
    responseDiv.classList.add('alert', 'alert-danger', 'show');
    responseDiv.textContent = 'Usuario y/o contraseña invalidos';
    
    Object.values(error).forEach(e => {
        console.log(e)
    })

    setTimeout(() => {
        responseDiv.classList.remove('alert', 'alert-danger', 'show');
    }, 5000);

    agregarIntentosLogin(1);
}

//Agrega intentos al localstorage
const agregarIntentosLogin = (intento) => {
    
    let intentos;
    intentos = obtenerIntentosLogin(); // para obtener intentos

    let minutesLocked;
    minutesLocked = obtenerMinutesLocked(); // para obtener tiempo bloqueado

    const sendLogin = document.querySelector('#send-login');
    const blockedUser = document.querySelector('.blocked-user');
    let intentosTotal = intento + intentos;

    //fecha actual
    let currentDate = new Date();

    // verificar intentos, si es mayor a 3 entra por aqui
    if(intentosTotal >= 3) {
        
        sendLogin.setAttribute('disabled', 'disabled');
        blockedUser.classList.add('alert', 'alert-danger', 'show');

        //aqui se agregan 15 minutos de bloqueo
        if( minutesLocked === 'desbloqueado' ) {
            // cantidad de minutos que se bloqueara al usuario
            let minutesLocked = 15;
            let lockUp = new Date(currentDate.getTime() + minutesLocked * 60000);
            console.log(formatDate(lockUp));
            localStorage.setItem('fz-intentos-time', JSON.stringify(formatDate(lockUp)));
            blockedUser.innerHTML = `Usuario bloqueado temporalmente por ${intentosTotal} intentos fallidos, intente de nuevo en la siguiente fecha y hora:&nbsp;<strong>${formatDate(lockUp)}</strong>`;

        //si pasan los 15 min de bloqueo, se elimina el bloqueo y se formatean los intentos y minutesLocked se cambia a desbloqueado
        } else if( minutesLocked !== 'desbloqueado' && formatDate(currentDate) > minutesLocked ) {

            sendLogin.removeAttribute('disabled');
            blockedUser.classList.remove('alert', 'alert-warning', 'show');
            intentosTotal = 0;
            minutesLocked = 'desbloqueado';
            localStorage.setItem('fz-intentos-time', JSON.stringify(minutesLocked));

        // si se recarga la pagina y aún no pasan los 15 min
        } else {
            blockedUser.innerHTML = `Usuario bloqueado temporalmente por ${intentosTotal} intentos fallidos, intente de nuevo en la siguiente fecha y hora:&nbsp;<strong>${minutesLocked}</strong>`;
        }
    
    //si intentos es mayor a 0 se muetras los intentos restantes en alertas
    } else if(intentosTotal > 0 && minutesLocked === 'desbloqueado') {

        blockedUser.classList.add('alert', 'alert-warning', 'show');
        blockedUser.textContent = `${3 - intentosTotal == 2 ? 'Te quedan ' + (3 - intentosTotal) + ' intentos' : 'Te queda ' + (3 - intentosTotal) + ' intento'}`;

    } else {
        localStorage.setItem('fz-intentos-time', JSON.stringify(minutesLocked));
    }

    // Convertir de string a arreglo para local storage y agregar intentos
    localStorage.setItem('fz-intentos', JSON.stringify(intentosTotal));
}


const obtenerIntentosLogin = () => {

    let intentos;

    // Revisamos los valores de local storage
    if(localStorage.getItem('fz-intentos') === null ) {
        intentos = 0;
    } else {
        intentos = JSON.parse(localStorage.getItem('fz-intentos'));
    }

    return intentos;

}

const obtenerMinutesLocked = () => {

    let minutesLocked;

    if(localStorage.getItem('fz-intentos-time') === null ) {
        minutesLocked = 'desbloqueado';
    } else {
        minutesLocked = JSON.parse(localStorage.getItem('fz-intentos-time'));
    }

    return minutesLocked;

}


export { errorLogin, agregarIntentosLogin, obtenerIntentosLogin }