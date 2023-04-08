import React, {useContext} from 'react';
import {signOut} from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
const ChatNavbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='chatNavbar'>
      <h2 style={{fontWeight:"bold"}} className="logo">CHAT</h2>
      <div className="user">
        <img src={currentUser.photoURL} alt="users" />
        <span>{currentUser.displayName}</span>
        <button onClick ={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}
export default ChatNavbar