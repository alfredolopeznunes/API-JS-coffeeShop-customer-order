 import { API } from "../globals.js";
 import { errorLogin } from "./error.js";
 import { successLogin } from "./success.js";
 
 //break point
 const endPoint = '/oauth/token';

 
 //Validamos el usuario que intenta logiearse
 const validateUser = (user, pass) => {
    //Pasamos el endpoint
    API.post(endPoint, {
        "Content-Type": "application/json"
    },{
        
        client_id: user,
        client_secret: pass,
        audience: "https://escalab.academy",
        grant_type: "client_credentials"

    }).then(data => {
        
        if (!data.error) {
            successLogin(data.token_type, data.access_token)

        } else {
            errorLogin(data);
            
        }

    }).catch((error) => {
        
        errorLogin(error);

    });
};

export { validateUser }
