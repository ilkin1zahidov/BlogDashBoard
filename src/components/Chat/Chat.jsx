import React, { useContext } from 'react';
import Cam from "../../assets/img/cam.png";
import Add from "../../assets/img/add.png";
import More from "../../assets/img/more.png";
import Messages from './Messages';
import Input from "../Chat/Input";
import { ChatContext } from '../../context/ChatContext';
const Chat = () => {
  const {data} = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="camera" />
          <img src={Add} alt="add" />
          <img src={More} alt="more" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
export default Chat