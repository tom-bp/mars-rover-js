import express from "express";
import got from "got";
import {apiKey} from "../config"
import { NotFoundErrorName } from "../errors/NotFoundError";
const router = express.Router();

router.get("/rovers/:rover/cameras/:camera/sol/:sol/", async (req, res) => {
    const possibleNames = [
        "curiosity",
        "perseverance",
        "spirit",
        "opportunity",
    ];
    const possibleCameraNames = [
        "FHAZ",
        "RHAZ",
        "MAST",
        "CHEMCAM",
        "MAHLI",
        "MARDI",
        "NAVCAM",
        "PANCAM",
        "MINITES",
    ]
    const roverName = req.params.rover;
    const solDate = req.params.sol;
    if (solDate > 3550){
        res.status(404).send({ errors: "Invalid Sol Date" });
    }
    const cameraName = req.params.camera;
    const resultingName = possibleNames.find((item) => item === roverName);
    if (resultingName === undefined) {
        res.status(404).send({ errors: "No rover with that name" });
    }
    const resultingCameraName = possibleCameraNames.find((item) => item === cameraName);
    if (resultingCameraName === undefined) {
        res.status(404).send({ errors: "Name of camera does not exist" });
    }
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
});

export default router;