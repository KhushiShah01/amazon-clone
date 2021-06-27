import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {

    const history = useHistory(); // helps to programmatically change the url
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  const register = (e) => {
    e.preventDefault();
    // firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      // if it successfuly creates a new user with email and password
      .then((auth) => {
        if(auth) {
            // redirecting
            history.push('/');
        }
    })
    .catch(error => alert(error.message))
  };


  const signIn = (e) => {
    // this will prevent page from refreshing
    e.preventDefault();

    // firebase login
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
        if(auth) {
            history.push('/');
        }
    })
    .catch(error => alert(error.message))
  };


  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form action="">
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's (CLONE) Conditions of Use and
          Privacy Notice.{" "}
        </p>

        <div className="login__register">
        <p>New to Amazon?</p>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
      
      </div>

      
    </div>
  );
}

export default Login;
