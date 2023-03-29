import React from 'react';
import User from "../../assets/img/user.png"
const ChatNavbar = () => {
  return (
    <div className='chatNavbar'>
      <span className="logo">SKOTE Chat</span>
      <div className="user">
        <img src={User} alt="" />
        <span>Ilkin</span>
        <button>logout</button>
      </div>
    </div>
  )
}
export default ChatNavbar