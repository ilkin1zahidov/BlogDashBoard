import React from "react";
import "../../assets/css/emailLogin.css";
import logo from "../../assets/img/skote.png";
import { Button } from "@mui/material";
import { auth } from "../../firebase/EmailFireBase";
import { useDispatch } from "react-redux";
import { login } from "../../control/userSlice";
import {
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const EmailLogin = () => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="emailLogin">
      <div className="login_container">
        <img src={logo} alt="skoteLogo" />
        <Button variant="contained" color="secondary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};
export default EmailLogin;
