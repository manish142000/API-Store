import React from "react";
import styles from "./Login.module.scss";
import { Button } from "../components/Button";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export const Login = () => {
  const [SignUp, setSignUp] = useState(false);

  const [SignUpdata, setSignUpdata] = useState({
    username: "",
    email_id: "",
    password: "",
    confirm_password: "",
  });

  const [SignIndata, setSignIndata] = useState(
    {
      email_id: "",
      password: "",
    }
  );

  function handleSignUpChange(e) {
    const newData = { ...SignUpdata };

    newData[e.target.id] = e.target.value;

    setSignUpdata(newData);

    console.log(newData);
  }
  
  function handleSignInChange(e){
    const newData = { ...SignIndata };

    newData[e.target.id] = e.target.value;

    setSignIndata(newData);

    console.log(newData);
  }

  function handleSignUpSubmit(e){
    e.preventDefault();
    
    axios(
      {
        method: 'POST',
        url: 'http://localhost:4001/login',
        data: {
          username: SignUpdata.username,
          email_id: SignUpdata.email_id,
          password: SignUpdata.password,
          confirm_password: SignUpdata.confirm_password,
          is_signup: true,
          is_login: false,
        }
      }
    );
  }

  function handleSignInSubmit(e){
    e.preventDefault();

    axios(
      {
        method: 'POST',
        url: 'http://localhost:4001/login',
        data:{
          email_id: SignIndata.email_id,
          password: SignIndata.password,
          is_login: true,
          is_signup: false,
        }
      }
    );
  }

  return (
    <div>
      <div className={styles.entire}>
        <div className={styles.welcome}>
          <p></p>
          <h1 id={styles.welcomeH1}>Welcome to your Dashboard</h1>
          <h3 id={styles.h3}>
            Your uploaded APIs will be displayed here once you login to your
            account
          </h3>
        </div>
        {!SignUp ? (
          <div className={styles.form}>
            <form className={styles.formInner} 
            onSubmit={(e)=>handleSignInSubmit(e)}
            type="submit" method="post">
              <h5 className={styles.h5}>Login to your account</h5>
              <div>
                <input
                id="email_id" 
                onChange={(e)=>handleSignInChange(e)}
                type="text" placeholder="Email Address" />
              </div>
              <br></br>
              <div>
                <input 
                id = "password"
                onChange={(e)=>handleSignInChange(e)} 
                type="password" placeholder="password" />
              </div>
              <div id={styles.btn}>
                <Button content="Login" />
              </div>
              <div className={styles.signUp}>
                <p>Do not have an account? </p>{" "}
                <button
                  id={styles.signup}
                  onClick={() => {
                    setSignUp(!SignUp);
                  }}
                >
                  SignUp
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className={styles.signupform}>
            <form
              className={styles.signupformInner}
              type="submit"
              method="post"
              onSubmit={(e)=>handleSignUpSubmit(e)}
            >
              <h5 className={styles.h5}>Sign Up</h5>
              <div>
                <input
                  onChange={(e) => handleSignUpChange(e)}
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <br></br>
              <div>
                <input
                  onChange={(e) => handleSignUpChange(e)}
                  id="email_id"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <br></br>
              <div>
                <input
                  onChange={(e) => handleSignUpChange(e)}
                  id="password"
                  type="password"
                  placeholder="password"
                />
              </div>
              <br></br>
              <div>
                <input
                  onChange={(e) => handleSignUpChange(e)}
                  id="confirm_password"
                  type="password"
                  placeholder="confirm password"
                />
              </div>
              <br></br>
              <div id={styles.signupbtn}>
                <Button content="SignUp" />
              </div>
              <p id="Arleady">Already have an account? <Link onClick={()=>{ setSignUp(!SignUp) }} to="/login">Sign In</Link></p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
