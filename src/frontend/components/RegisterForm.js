import React, { useState } from "react";

function RegisterForm({ registration }) {
    const [details, setDetails] = useState({ name: "", email: "", username: "", password: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        registration(details);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register for Mars Rover</h2>
            <p className="login-form-message">
                New here? <span className="highlight">No problem, it is quick and easy to make an account.</span>
            </p>

            <div className="login-form-groups">
                <div>
                    <label htmlFor="name">Fullname*</label>
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
                        placeholder="Fullname"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(event) => {
                            return setDetails({
                                ...details,
                                email: event.target.value,
                            });
                        }}
                        value={details.email}
                        placeholder="Email"
                    />
                </div>

                <div>
                    <label htmlFor="username">Username*</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(event) => {
                            return setDetails({
                                ...details,
                                username: event.target.value,
                            });
                        }}
                        value={details.username}
                        placeholder="Username"
                    />
                </div>

                <div>
                    <label htmlFor="password">Password*</label>
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
                        placeholder="Password"
                    />
                </div>
                <input type="submit" value="Login" className="btn btn-cta--emphasis" />
            </div>
        </form>
    );
}

export default RegisterForm;
