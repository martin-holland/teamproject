import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { authentication } from "./firebase-config"
import "./Login.css";
// import FailedLogin from './FailedLogin';


const Signin = ({ token, setToken}) => {
  const [userDetails, setUserDetails] = useState(null);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        setToken(res.user.accessToken);
        setUserDetails(res.user);
        localStorage.setItem("VStoken", JSON.stringify(res.user.accessToken));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  


  const getToken = () => {
    const tokenString = localStorage.getItem("VStoken");
    setToken(tokenString);
    // getAuth()
    //   .verifyIdToken(tokenString)
    //   .then((decodedToken) => {
    //     console.log("Logged in successfully");
    //   })
    //   .catch((error) => {
    //     localStorage.removeItem("VStoken");
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    getToken();
    // console.log("userDetails:", userDetails);
  }, [userDetails]);


  return (
      <button onClick={signInWithGoogle}>
        <Link to="signin">Sign In</Link>
      </button>
  );
};


export default Signin;
