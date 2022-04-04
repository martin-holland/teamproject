import { useState, useEffect } from "react";
import {
    getAuth,
    signOut
  } from "firebase/auth";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const Signout = ({ token, setToken }) => {
  const [showLoggedOut, setShowLoggedOut] = useState(false);

  useEffect(() => {
    if (token) {
      // setLoggedInAlert(true);
    }
  }, [showLoggedOut, token]);

  const handleCloseLogoutBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowLoggedOut(false);
  };


  const signOutWithGoogle = () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          setToken(null);
        })
        .catch((error) => {
          // An error happened.
        });
    };

    const logoutHandler = () => {
      setShowLoggedOut(true);
      if (token) {
        signOutWithGoogle();
        localStorage.removeItem("VStoken");
        // alert("Sign out successful!")
      }
    };

    return (
      <>
        <button onClick={logoutHandler}>Sign Out</button>
        {showLoggedOut && (
        <Snackbar open={showLoggedOut} autoHideDuration={6000} onClose={handleCloseLogoutBar}>
          <Alert onClose={handleCloseLogoutBar}
                severity="info" 
                sx={{ width: '100%' }}
          >
            You successfully signed out.
          </Alert>
        </Snackbar>)
        } 
      </>
    );
};

export default Signout;