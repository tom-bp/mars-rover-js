import { get } from "./Api.js";
 const baseUrl = "/api/cameras/";



 export async function getCameraList(roverName) {
     return await get(baseUrl + roverName)
 }