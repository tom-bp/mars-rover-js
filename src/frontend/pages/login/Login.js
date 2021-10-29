import React from "react";
import "./Login.css";

export default function LoginInteraction() {
    return (
        <>
            <title>Mars rover app</title>
            <div className= "login-background-image"></div>
            <main className="login-page">
                <h1>Login</h1>
                <h2>
                    Username:
                    <input type="text" />
                </h2>
                <h2>
                    Password:
                    <input type="text" />
                </h2>
                <h2>
                    <button>
                        <buttontype>Submit</buttontype>
                    </button>
                </h2>
            </main>
        </>
    );
}
