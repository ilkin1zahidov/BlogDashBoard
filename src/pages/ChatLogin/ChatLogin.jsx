import React from 'react';
import "../../assets/css/chat.css";

  const Login = () => {
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Skote Chat</span>
          <span className="title">Login</span>
          <form>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password"/>
            <button>Sign in</button>
          </form>
          <p className="login_text">You don't have an account? Register</p>
        </div>
      </div>
    )
  }
  export default Login