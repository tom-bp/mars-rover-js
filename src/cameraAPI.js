//const { request } = require("express");
import express from "express";
import got from "got";
const router = express.Router();


router.get("/:rover", async (req, res) => {
    const roverName = req.params.rover;
    got.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}?api_key=OCfdYPdyuR6d1YMfyE5aQ8ckacGD3TV9k4Ki9KH5`
    )
        .json()

        .then((nasaResponse) => {
            const listRovers = nasaResponse.rovers;
            let listylist = listRovers.lowercase.map;

            res.send(listylist);
            console.log(listylist);
        });
});
