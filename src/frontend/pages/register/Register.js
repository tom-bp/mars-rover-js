import { response } from "express";
import React from "react";
import NavBar from "../../components/NavBar";
import RegisterForm from "../../components/RegisterForm";
import "./Register.css";

export default function Register(properties) {
    const handleRegistration = (details) => {
        const regDetails = {
            name: details.name,
            username: details.username,
            password: details.password,
        };
        fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(regDetails),
        }).then((response) => {
            console.log(response.status);
            if (response.status === 201) {
                window.alert("Registration Successfull \n", response.status);
                return
            }
            if (response.status === 400) {
                window.alert("Registration Unsuccessful\n", response.status);
                return
            }
        });
    };
    return (
        <>
            <title>Mars Rover App</title>
            <main className="register-page">
                <NavBar />
                <h1>Mars Rover Registration Page</h1>

                <div className="flex-container">
                    <div>
                        <RegisterForm registration={handleRegistration} />
                    </div>
                </div>
            </main>
        </>
    );
}
