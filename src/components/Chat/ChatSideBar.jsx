import React from 'react';
import ChatNavbar from "../../components/Chat/ChatNavbar";
import ChatSearch from './ChatSearch';
import Chats from "./Chats";
const ChatSidebar = () => {
  return (
    <div className='chatSideBar'>
      <ChatNavbar/>
      <ChatSearch/>
      <Chats/>
    </div>
  )
}
export default ChatSidebar