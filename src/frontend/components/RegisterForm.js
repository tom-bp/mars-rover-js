import React, { useState } from "react";

function RegisterForm({ registration }) {
    const [details, setDetails] = useState({ name: "", username: "", password: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        registration(details);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Register for Mars Rover</h2>

                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <div>
                        <label htmlFor="name">
                            <b>Name*</b>
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={(event) => {
                                return setDetails({
                                    ...details,
                                    name: event.target.value,
                                });
                            }}
                            value={details.name}
                            placeholder="Enter Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="username">
                            <b>Username*</b>
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            onChange={(event) => {
                                return setDetails({
                                    ...details,
                                    username: event.target.value,
                                });
                            }}
                            value={details.username}
                            placeholder="Enter a Username"
                        />
                    </div>

                    <div>
                        <label htmlFor="password">
                            <b>Password*</b>
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(event) => {
                                return setDetails({
                                    ...details,
                                    password: event.target.value,
                                });
                            }}
                            value={details.password}
                            placeholder="Enter a Password"
                        />
                    </div>
                    <div>
                        <label htmlFor="password-confirm">
                            <b>Confirm Password*</b>
                        </label>
                        <input
                            type="password"
                            name="password-confirm"
                            id="password-confirm"
                            onChange={(event) => {
                                return setDetails({
                                    ...details,
                                    password: event.target.value,
                                });
                            }}
                            value={details.password}
                            placeholder="Confirm Password"
                        />
                    </div>
                    <p>
                        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
                    </p>

                    <div>
                        <input type="submit" value="Sign Up" className="registerbtn" />
                    </div>
                    <div className="signin">
                        <p>
                            Already have an account?<a href="#">Sign in</a>.
                        </p>
                    </div>
                </div>
            </form>
        </>
    );
}

export default RegisterForm;
