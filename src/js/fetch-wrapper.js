import { errorLogin } from "./components/error.js";
export default class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }

    getAdmin(endpoint, headers) {
        return fetch(this.baseURL + endpoint, {
            headers
        })
        .then(response => response.json())
    }

    put(endpoint, headers, body) {
        return this._send("put", endpoint, headers, body);
    }

    post(endpoint, headers, body) {
        return this._send("post", endpoint, headers, body);
    }

    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }

    _send(method, endpoint, headers, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers,
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch((error) => {
           errorLogin(error);
        });
    }
}
