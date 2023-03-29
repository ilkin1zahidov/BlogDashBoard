import React from 'react';
import Add from "../../assets/img/addAvatar.png";
import "../../assets/css/chat.css";

  const Register = () => {
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Skote Chat</span>
          <span className="title">Register</span>
          <form>
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password"/>
            <input style={{display:"none"}} type="file" id="file"/>
            <label htmlFor="file">
              <img src={Add} alt="Avatar" />
              <span>Add an avatar</span>
            </label>
            <button>Sign Up</button>
          </form>
          <p className="login_text">You do have an account? Login</p>
        </div>
      </div>
    )
  }
  export default Register