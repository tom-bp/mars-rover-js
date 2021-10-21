import React, { useEffect, useState } from "react";
import * as QuotationsApi from "../../api/QuotationsApi";
import "./Home.css";
const curiosity = "./public/curiosity.jpg";
// import NavBar from "../../components/NavBar";

export default function Home() {
    const [quotation, setQuotation] = useState();
    useEffect(getQuotationOfTheDay, []);

    return (
        <>
            <title>Mars Rover App</title>
            <main className="home-page">
                <body>
                    {/* <NavBar /> */}
                    <h1>Mars Rover</h1>
                    <h2>Quotation of the day</h2>
                    <p className="quotation">{quotation?.text}</p>
                    <p className="attribution">—{quotation?.attribution}</p>
                    <div>
                        <h3>Curiosity Rover</h3>
                        <p1>
                            Curiosity is the largest and most capable rover ever sent to Mars. Curiosity is a car-sized Mars rover designed to explore
                            the Gale crater on Mars as part of NASA's Mars Science Laboratory (MSL) mission. Curiosity was launched from Cape
                            Canaveral (CCAFS) on 26 November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on 6 August
                            2012, 05:17:57 UTC.<br/>
                            It is exploring Gale Crater, which is near the
                            equator of Mars. The rover uses a nuclear power to operate. The MSL mission has
                            four main scientific goals: study Martian climate and geology, search for water, and find out whether Mars could have ever
                            supported life. Curiosity carries the most advanced scientific equipment ever used on the surface of Mars.
                        <img src = {{curiosity}} alt = "Curisosity Rover" width= "1200px" height ="675"/>
                        </p1>
                    </div>
                    <div>
                        <h3>Opportunity Rover</h3>
                        <p1></p1>
                    </div>
                    <div>
                        <h3>Spirit Rover</h3>
                        <p1></p1>
                    </div>
                </body>
            </main>
        </>
    );

    async function getQuotationOfTheDay() {
        try {
            const response = await QuotationsApi.getQuotationOfTheDay();
            setQuotation(response);
        } catch (e) {
            console.error(e);
        }
    }
}
