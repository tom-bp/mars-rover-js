import express from "express";
import got from "got";
import { apiKey } from "../config"
const router = express.Router();

router.get("/:rover", (req, res) => {
    const roverName = req.params.rover;
    got.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}?api_key=${apiKey}`
    )
        .json()

        .then((nasaResponse) => {
            const cameraMap = nasaResponse.rover.cameras.map((item) => {
                return { name: item.name, fullName: item.full_name };
            });
            res.send(cameraMap);
        });
});

export default router;
