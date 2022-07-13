function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return (
        [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
        ].join('-') +
        ' ' +
        [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
        ].join(':')
    );
}

function fechaBirthday(birthday) {
    let fecha = new Date(birthday);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };

    return fecha.toLocaleDateString("es-ES", options)
    
}

function mesFecha(value) {
    let fechaMes = new Date(value);
    let options = { month: 'long', day: 'numeric', year: 'numeric', };

    return fechaMes.toLocaleDateString("en-EN", options)
    
}

function hoursMinutes(hora) {
    let time = new Date(hora);

    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    
}




export { formatDate, fechaBirthday, hoursMinutes, mesFecha }
