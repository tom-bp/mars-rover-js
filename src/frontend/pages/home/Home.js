import React, { useEffect, useState } from "react";
import * as QuotationsApi from "../../api/QuotationsApi";
import "./Home.css";
import LoginFrontend from "../pages/App.js"

export default function Home() {
    const [quotation, setQuotation] = useState();
    useEffect(getQuotationOfTheDay, []);

    return (
        <>
            <title>Mars Rover App</title>
            <main className="home-page">
                <h1>Mars Rover</h1>
                <h2>Quotation of the day</h2>
                <p className="quotation">{quotation?.text}</p>
                <p className="attribution">—{quotation?.attribution}</p>
                <p><LoginFrontend/></p>
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
