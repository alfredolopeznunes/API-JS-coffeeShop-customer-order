import FetchWrapper from "./fetch-wrapper.js";
import { errorApi } from "./error.js";
import { successApi } from "./success.js";

//url API
const baseApi = "https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/";

//break point
const breakPoint = 'oauth/token';

//Instancia de la API
const API = new FetchWrapper(baseApi);

//metodo get de la instancia
const validateUser = (user, pass) => {
    //Pasamos el endpoint
    API.post(breakPoint, {
        
        client_id: user,
        client_secret: pass,
        audience: "https://escalab.academy",
        grant_type: "client_credentials"

    }).then(data => {
        
        if (!data.error) {
            console.log(`${data.token_type} ${data.access_token}` );
            successApi()
        } else {
            errorApi(data);
        }

    }).catch((error) => {
        
        //console.error(error);
        errorApi(error);

    });
};

const form = document.querySelector("#user-form");
const userLogin = document.querySelector("#login");
const userPassword = document.querySelector("#password");
let msjResponse = document.querySelector(".response");

form.addEventListener("submit", event => {
    event.preventDefault();

    validateUser(userLogin.value, userPassword.value);
});


export { form, msjResponse }
