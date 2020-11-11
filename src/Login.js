import React, { useState } from 'react'
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { store } from 'react-notifications-component';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                store.addNotification({
                    title: "Success!",
                    message: "Login successful!",
                    type: "success",
                    insert: "top",
                    container: "bottom-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: true
                    }
                });
                history.push('/')
            })
            .catch(error => {
                setEmail('');
                setPassword('');
                store.addNotification({
                    title: "Error!",
                    message: error.message,
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: true
                    }
                })
            });
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully created a new user with email and password
                if (auth) {
                    setEmail('');
                    setPassword('');
                    store.addNotification({
                        title: "Registration successful",
                        message: "Please login to continue",
                        type: "success",
                        insert: "top",
                        container: "top-center",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 4000,
                            onScreen: true
                        }
                    });
                    history.push('/login')
                }
            })
            .catch(error => {
                setEmail('');
                setPassword('');
                store.addNotification({
                    title: "Error!",
                    message: error.message,
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: true
                    }
                })
            });
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""
                />
                {/* <img
                    className="login__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
                /> */}
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn}
                        className="login__signInButton"> Sign in</button>

                    <p className="login__agreement">
                        By sigining-in you agree to AMAZON FAKE CLONE conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
                    </p>

                    <button onClick={register}
                        className="login__registerButton"> Create your Amazon Account </button>

                    <button onClick={e => { history.push('/') }}
                        className="login__registerButton"> Continue using guest </button>
                </form>
            </div>
        </div>
    )
}

export default Login
