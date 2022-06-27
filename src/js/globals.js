import FetchWrapper from "./fetch-wrapper.js";

//url API
const baseApi = "https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/";

//Instancia de la API
export const API = new FetchWrapper(baseApi);