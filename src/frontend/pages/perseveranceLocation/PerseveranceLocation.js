import React from "react";
import NavBar from "../../components/NavBar";
import "./PerseveranceLocation.css";

export default function perseveranceLocationPage() {
    return (
        <>
            <title>Mars Rover App</title>
            <main className="perseverance-rover-page">
                <NavBar />
                <body>
                    <h1>Perseverance Location</h1>
                    <h1>
                        <iframe
                            src="https://mars.nasa.gov/maps/location/?mission=M20&site=NOW"
                            width="1500"
                            height="800"
                            scrolling="no"
                            frameborder="0"
                            allowfullscreen = "yes"
                        ></iframe>
                    </h1>
                    <h1>More information on the perseverance rover</h1>
                    <h3>
                        <iframe
                            src="https://mars.nasa.gov/layout/embed/video/?v=458"
                            width="640"
                            height="370"
                            scrolling="no"
                            frameborder="0"
                        ></iframe>
                    </h3>
                    <h3>
                        NASA's Perseverance rover has been on the surface of Mars since February of
                        2021, joining NASA's Curiosity rover, which has been studying the Red Planet
                        since 2012. Perseverance is now beginning to ramp up its science mission on
                        Mars while preparing to collect samples that will be returned to Earth on a
                        future mission.
                    </h3>
                    <h5>
                    <iframe
                        src="https://mars.nasa.gov/layout/embed/model/?s=6"
                        width="700"
                        height="372"
                        scrolling="no"
                        frameborder="0"
                        allowfullscreen = "yes"
                    ></iframe>
                    </h5>
                </body>
            </main>
        </>
    );
}
