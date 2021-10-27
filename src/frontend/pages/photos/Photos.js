
import React, { useEffect, useState } from "react";
import "./Photos.css";
const curiosityImage = "/curiosity.jpg";
const PerseveranceImage = "/perseverance.png";
const opportunityImage = "/opportunity.jpg";
const spiritImage = "/spirit.png";
import * as CameraApi from "../../api/CameraApi";


export default function Photos() {
    const [Gallery, setGallery] = useState();

    return (
        <>
            <title>Mars Rover App</title>
            <main className="photos-page">
                <h1>Mars Rover Photos</h1>
                <h2>
                    This page is currently under construction, come back soon!
                </h2>

                <div class="flex-container">
                    <div className="gallery" href="/">
                        <a className="images">
                            <img
                                src={curiosityImage}
                                alt="Curiosity Rover"
                                width="300"
                                height="300"

 //                               onClick={() => setGallery()}
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
                            />
                        </a>
                        <div className="desc">Perseverance</div>
                    </div>
                </div>
                <div className="desc">SELECT A ROVER TO SEE IMAGES</div>
            </main>
        </>
    );


//     async function getCameraList() {
//         try {
//             const response = await CameraApi.getCameraList();
//             setGallery(response);
//         } catch (e) {
//             console.error(e);
//         }
//     }
 }

