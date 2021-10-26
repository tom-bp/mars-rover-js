import express from "express";
import got from "got";
import {apiKey} from "../config"
import { NotFoundErrorName } from "../errors/NotFoundError";
const router = express.Router();

router.get("/rovers/:rover/cameras/:camera/sol/:sol/", async (req, res) => {
    const roverName = req.params.rover;
    const solDate = req.params.sol;
    const cameraName = req.params.camera;
    got.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${solDate}&camera=${cameraName}&api_key=${apiKey}`
    )
        .json()
        
        .then((nasaResponse) => {
            const imageLink = nasaResponse.photos.map((item) => {
                return item.img_src;     
            })
            res.send(imageLink);
        })
        .catch(function(error) {
            if (error.roverName !== NotFoundErrorName){
            res.sendStatus(404);
            } else{
                console.error(error);
                res.sendStatus(500);
            }
        })
});

export default router;