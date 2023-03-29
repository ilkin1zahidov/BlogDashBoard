import React from 'react';

const ChatNavbar = () => {
  return (
    <div className='chatNavbar'>
      <span className="logo">SKOTE Chat</span>
      <div className="user">
        <img src="http://localhost:3001/static/media/user.16d4e32ca122e2c539cc.png" alt="" />
        <span>Ilkin</span>
        <button>logout</button>
      </div>
    </div>
  )
}
export default ChatNavbar