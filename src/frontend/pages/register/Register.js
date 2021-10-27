import React from "react";
import NavBar from "../../components/NavBar";
import "./Register.css";
const curiosity = "/curiosity.jpg";
const opportunity = "/opportunity.jpg";
const spirit = "/spirit.jpg";
// Get the modal

export default function Register() {
    return (
        <>
            <title>Mars Rover App</title>
            <main className="register-page">
                <NavBar />
                <h1>Mars Rover Registration Page</h1>

                <div className ="flex-container">

                    <form action="/action_page.php">
                        <div className="container">
                            <h1>Sign Up</h1>
                            <p>Please fill in this form to create an account.</p>
                            <hr />

                            <label for="name">
                                <b>Name</b>
                            </label>
                            <input type="text" placeholder="Enter Name" name="name" required />

                            <label for="username">
                                <b>Username</b>
                            </label>
                            <input type="text" placeholder="Enter a Username" name="username" required />

                            <label for="psw">
                                <b>Password</b>
                            </label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <label for="psw-confirm">
                                <b>Confirm Password</b>
                            </label>
                            <input type="password" placeholder="Confirm Password" name="psw-confirm" required />

                            <p>
                                By creating an account you agree to our <a href="#">Terms & Privacy</a>.
                            </p>

                            <div>
                                <button type="submit" className="registerbtn">
                                    Sign Up
                                </button>
                            </div>
                            <div className="signin">
                                <p>
                                    Already have an account? <a href="#">Sign in</a>.
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
