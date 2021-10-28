import { get } from "./Api.js";
 const baseUrl = "/api/pictures/rovers/";
const cameras = "/cameras/"
const sol = "/sol/"


 export async function getPictures(roverName, cameraName, solDate) {
     return await get(baseUrl + roverName + cameras + cameraName + sol + solDate)
 }