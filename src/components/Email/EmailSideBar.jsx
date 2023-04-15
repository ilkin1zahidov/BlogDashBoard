import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import "../../assets/css/emailSideBar.css";
import SidebarOption from "./SidebarOption";
import MailIcon from "@mui/icons-material/Mail";
import StarIcon from "@mui/icons-material/Star";
import DiamondIcon from "@mui/icons-material/Diamond";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import NoteIcon from "@mui/icons-material/Note";
import DeleteIcon from "@mui/icons-material/Delete";
import { openSendMessage } from "../../control/mailSlice";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase/ChatFirebase";

function EmailSideBar() {
  const dispatch = useDispatch();
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch: chatDispatch } = useContext(ChatContext);
  
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    chatDispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="emailSideBar">
      <div className="container">
        <Button
          className="sidebar_compose"
          onClick={() => dispatch(openSendMessage())}
        >
          Compose
        </Button>
        <SidebarOption
          Icon={MailIcon}
          title="Inbox"
          number={"(10)"}
          selected={true}
        />
        <SidebarOption Icon={StarIcon} title="Starred" number={54} />
        <SidebarOption Icon={DiamondIcon} title="Important" number={54} />
        <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
        <SidebarOption Icon={MarkEmailReadIcon} title="Sent" number={54} />
        <SidebarOption Icon={DeleteIcon} title="Trash" number={54} />

        <div className="sidebar_footer">
          <div className="chats">
            {Object.entries(chats)
              ?.sort((a, b) => b[1].date - a[1].date)
              .map((chat) => (
                <div
                  className="userChat"
                  key={chat[0]}
                  onClick={() => handleSelect(chat[1].userInfo)}
                >
                  <img src={chat[1].userInfo.photoURL} alt="" />
                  <div className="userChatInfo">
                    <span>{chat[1].userInfo.displayName}</span>
                    <p>{chat[1].lastMessage?.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmailSideBar;

