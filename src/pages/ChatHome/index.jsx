import React from 'react';
import ChatSidebar from '../../components/Chat/ChatSideBar';
import Chat from "../../components/Chat/Chat";
const ChatHome = () => {
  return (
    <div className='chatHome'>
        <div className="container">
          <ChatSidebar/>
          <Chat/>
        </div>
    </div>
  )
}
export default ChatHome