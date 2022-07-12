import { API } from "../globals.js";
import { successOrder } from "./success.js";

const takeOrder = (table, create_at, waiter, order, accessToken) => {

    const orderEntered = {
        "id": 1,
        "waiter": parseInt(waiter, 10),
        create_at,
        "table": parseInt(table, 10),
        order
    };

     //break point
     const endPoint = '/api/orders';

     API.put(endPoint, {
        "Content-Type": "application/json",
        "Authorization": accessToken
    },orderEntered).then(data => {
        
        successOrder(data.message);

    }).catch(error => {
        console.log(error);
    })

}


export { takeOrder }
