import React from 'react';
import Cam from "../../assets/img/cam.png";
import Add from "../../assets/img/add.png";
import More from "../../assets/img/more.png";
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Ilkin</span>
        <div className="chatIcons">
          <img src={Cam} alt="camera" />
          <img src={Add} alt="add" />
          <img src={More} alt="more" />
        </div>
      </div>
    </div>
  )
}
export default Chat