import React from "react";
import NavBar from "../../components/NavBar";
import "./PerseveranceLocation.css"

export default function perseveranceLocationPage() {
    return (
        <>
            <title>Mars Rover App</title>
            <main className="perseverance-rover-page">
            <NavBar />
                <body>
                <h1>Perseverance Location</h1>
                <h1>
                <iframe src='https://mars.nasa.gov/maps/location/?mission=M20&site=NOW' width='1800' height='1000' scrolling='no' frameborder='0' allowfullscreen></iframe>
                </h1>
                </body>
            </main>
        </>
    );
}

