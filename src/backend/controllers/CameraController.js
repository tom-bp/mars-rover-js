import express from "express";
import got from "got";
import { apiKey } from "../config";
const router = express.Router();
import { NotFoundErrorName } from "../errors/NotFoundError.js";

router.get("/:rover", (req, res) => {
    const roverName = req.params.rover;
    const possibleNames = [
        "curiosity",
        "perseverance",
        "spirit",
        "opportunity",
    ];

    const resulting = possibleNames.find((item) => item === roverName);
    if (resulting === undefined) {
        res.status(404).send({ errors: "No rover with that name" });
    }

    got.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${resulting}?api_key=${apiKey}`
    )
        .json()

        .then((nasaResponse) => {
            const cameraMap = nasaResponse.rover.cameras.map((item) => {
                return { name: item.name, fullName: item.full_name };
            });
            res.send(cameraMap);
        })
        .catch((err) => {
            console.log(err);
            if (err.name === NotFoundErrorName) {
                res.sendStatus(404);
            } else {
                console.error(err);
                res.sendStatus(500);
            }
        });
});

export default router;
