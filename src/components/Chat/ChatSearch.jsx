import React from 'react';
import User from "../../assets/img/user.png"
const ChatSearch = () => {
  return (
    <div className='chatSearch'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
          <img src={User} alt="" />
          <div className="userChatInfo">
            <span className='name'>Ilkin</span>
          </div>
      </div>
    </div>
  )
}
export default ChatSearch