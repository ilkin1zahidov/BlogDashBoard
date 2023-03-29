import React from "react";
import User from "../../assets/img/user.png"
const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src={User}
          alt=""
        />
        <div className="userChatInfo">
          <span className="name">Ilkin</span>
          <p className="status">Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src={User}
          alt=""
        />
        <div className="userChatInfo">
          <span className="name">Ilkin</span>
          <p className="status">Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src={User}
          alt=""
        />
        <div className="userChatInfo">
          <span className="name">Ilkin</span>
          <p className="status">Hello</p>
        </div>
      </div>
    </div>
  );
};
export default Chats;
