import {
    getAuth,
    signOut
  } from "firebase/auth";


const Signout = ({ token, setToken }) => {
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
      if (token) {
        signOutWithGoogle();
        localStorage.removeItem("VStoken");
        alert("Sign out successful!")
      } else {
        alert("You are already signed out")
      }
      };

    return (
      <button onClick={logoutHandler}>Sign Out</button>
    );
};

export default Signout;