import React, { useEffect, useState } from "react";
import * as QuotationsApi from "../../api/QuotationsApi";
import "./Home.css";

export default function Home() {
    const [quotation, setQuotation] = useState();
    useEffect(getQuotationOfTheDay, []);

    return (
        <>
            <title>Mars Rover App</title>
            <main className="home-page">
                <h1>Quotation of the day</h1>
                <p className="quotation">{quotation?.quotation}</p>
                <p className="attribution">—{quotation?.attribution}</p>
            </main>
        </>
    );

    async function getQuotationOfTheDay() {
        const quotationId = new Date().getDay() % 3;
        try {
            const response = await QuotationsApi.getQuotation(quotationId);
            setQuotation(response);
        } catch (e) {
            console.error(e);
        }
    }
}
