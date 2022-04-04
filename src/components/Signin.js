import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { authentication } from "./firebase-config";
import "./Login.css";
// import FailedLogin from './FailedLogin';


//  LOGIN DIALOG
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import GoogleIcon from './assets/btn_google_light_normal_ios.svg';
import { blue } from '@mui/material/colors';

const loginOptions = ['Google'];

const Signin = ({ token, setToken, user, setUser }) => {
  // const [userDetails, setUserDetails] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(loginOptions[0]);
  const [showSnackbar, setShowSnackBar] = useState(false);

  useEffect(() => {
    getToken();
    // console.log("userDetails:", userDetails);
  }, [user, token]);
  

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        setToken(res.user.accessToken);
        setUser(res.user);
        localStorage.setItem("VStoken", JSON.stringify(res.user.accessToken));
      })
      .catch((err) => {
        setShowSnackBar(true);
      });
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    if (value === "Google") {
      signInWithGoogle();
    }
    else {
      setShowSnackBar(true);
    }
    onClose(value);
  };

  return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Sing in with:</DialogTitle>
        <List sx={{ pt: 0 }}>
          {loginOptions.map((option) => (
            <ListItem button onClick={() => handleListItemClick(option)} key={option}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "white", color: "white" }}>
                  <img src={GoogleIcon} alt="Google icon" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={option} />
            </ListItem>
          ))}

          <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItem>
        </List>
      </Dialog>
    );
  }

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackBar(false);
};

  return (
    <>
      <button onClick={handleClickOpen}>
        {/* <Link to="signin">Sign In</Link> */}
        SIGN IN
      </button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleBarClose}>
        <Alert onClose={handleBarClose}
          severity="info" 
          sx={{ width: '100%' }}
          >
            More sing up options coming soon...
        </Alert>
      </Snackbar>
      </>
  );
};


export default Signin;
