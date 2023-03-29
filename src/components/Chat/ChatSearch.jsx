import React from 'react';

const ChatSearch = () => {
  return (
    <div className='chatSearch'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
          <img src="http://localhost:3001/static/media/user.16d4e32ca122e2c539cc.png" alt="" />
          <div className="userChatInfo">
            <span className='name'>Ilkin</span>
          </div>
      </div>
    </div>
  )
}
export default ChatSearch