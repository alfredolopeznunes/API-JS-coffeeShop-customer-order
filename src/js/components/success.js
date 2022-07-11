import { guardarAcceso } from "../local-storage.js";

const successLogin = (type, token) => {

    guardarAcceso(type, token);

    window.location.href = "/pages/ordenes.html";

}

export { successLogin }