import React from "react";
import { Button } from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Chats from "../Chat/Chats";

function EmailSideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const StarMail = () => {
    navigate("/StarMail")
  }

  return (
    <div className="emailSideBar" >
        <Box
          sx={{backgroundColor:colors.primary[400],height:'83vh'}} 
        >
    
      <div className="container">
        
        <Button
          className="sidebar_compose"
          onClick={() => { 
            dispatch(openSendMessage());
     
          }}
        >
    
          Compose
        </Button>
        <SidebarOption
          Icon={MailIcon}
          title="Inbox"
          number={""}
          
          selected={true}
        />
        
        <div onClick={StarMail }>
        <SidebarOption Icon={StarIcon} title="Starred" number={54} />
        </div>
        <SidebarOption Icon={DiamondIcon} title="Important" number={54} />
        <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
        <SidebarOption Icon={MarkEmailReadIcon} title="Sent" number={54} />
        <SidebarOption Icon={DeleteIcon} title="Trash" number={54} />

        <div className="sidebar_footer">
          <div className="chats">
            <Chats/>
          </div>
        </div>
      </div>
      </Box>
    </div>
  );
}
export default EmailSideBar;

