import React, { useEffect, useState } from "react";
import "./Photos.css";
const curiosityImage = "/curiosity2.jpg";
const PerseveranceImage = "/perseverance.png";
const opportunityImage = "/opportunity2.jpg";
const spiritImage = "/spirit.png";
import * as CamerasApi from "../../api/CamerasApi";
import * as PicturesApi from "../../api/PicturesApi";


export default function Photos() {
    const [Gallery, setGallery] = useState();
    const [roverName, setRoverName] = useState("SELECT A ROVER TO SEE IMAGES");
    const [camera, setCamera] = useState();
    const [solNumber, setSolNumber] = useState();
    const [ImgUrls, setImgUrls] = useState();

    if (roverName === "SELECT A ROVER TO SEE IMAGES") {
        return (
            <>
                <title>Mars Rover App</title>
                <main className="photos-page">
                    <h1>Mars Rover Photos</h1>
                    <h2>
                        This page is currently under construction, come back
                        soon!
                    </h2>
                    <div className="flex-container">
                        <div className="gallery" href="/">
                            <a className="images">
                                <img
                                    src={curiosityImage}
                                    alt="Curiosity Rover"
                                    width="300"
                                    height="300"
                                    onClick={() => selectRover("curiosity")}
                                />
                            </a>
                            <div className="desc">Curiosity</div>
                        </div>

                        <div className="gallery" href="/">
                            <a className="images">
                                <img
                                    src={spiritImage}
                                    alt="Spirit Rover"
                                    width="300"
                                    height="300"
                                    onClick={() => selectRover("spirit")}
                                />
                            </a>
                            <div className="desc">Spirit</div>
                        </div>

                        <div className="gallery" href="/">
                            <a className="images">
                                <img
                                    src={opportunityImage}
                                    alt="Opportunity Rover"
                                    width="300"
                                    height="300"
                                    onClick={() => selectRover("opportunity")}
                                />
                            </a>
                            <div className="desc">Opportunity</div>
                        </div>

                        <div className="gallery" href="/">
                            <a className="images">
                                <img
                                    src={PerseveranceImage}
                                    alt="Perseverance Rover"
                                    width="300"
                                    height="300"
                                    onClick={() => selectRover("perseverance")}
                                />
                            </a>
                            <div className="desc">Perseverance</div>
                        </div>
                    </div>
                    <div className="desc"> {roverName}</div>
                </main>
            </>
        );
    } else {
        return (
            <>
                <title>Mars Rover App</title>
                <main className="photos-page">
                    <h1>Mars Rover Photos</h1>
                    <h2>
                        This page is currently under construction, come back
                        soon!
                    </h2>
                    {Gallery?.map((camera) => {
                        return (
                            <button
                                key={camera.name}
                                onClick={() => {
                                    setCamera(camera.name);
                                }}
                            >
                                {camera.fullName}
                            </button>
                        );
                    })}

                    <div className="desc"> {roverName}</div>
                    <h2>
                        {" "}
                        Enter SOL date
                        <input type="number" id="solInput" />
                        <button
                            onClick={() => {
                                solFunction();
                            }}
                        >
                            Submit
                        </button>
                    </h2>

                    <div className="URLS">
                        {ImgUrls?.map((Url, index) => {
                            return <img key={index} src={Url} />;
                        })}
                    </div>
                </main>
            </>
        );
    }
    function selectRover(selectedRoverName) {
        setRoverName(selectedRoverName);
        getCameraList(selectedRoverName).then(function response(cameraList) {
            setGallery(cameraList);
        });
    }

    function solFunction() {
        setSolNumber(document.getElementById("solInput").value);
        settingImgUrls(
            roverName,
            camera,
            document.getElementById("solInput").value
        );
    }

    async function getCameraList(roverName) {
        try {
            return await CamerasApi.getCameraList(roverName);
        } catch (e) {
            console.error(e);
        }
    }

    async function settingImgUrls(roverName, cameraName, solDate) {
        try {
            setImgUrls(
                await PicturesApi.getPictures(roverName, cameraName, solDate)
            );
        } catch (e) {
            console.error(e);
        }
    }
}
