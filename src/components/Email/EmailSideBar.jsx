import { Button, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "../../assets/css/emailSideBar.css";
import SidebarOption from "./SidebarOption";
import MailIcon from "@mui/icons-material/Mail";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DiamondIcon from '@mui/icons-material/Diamond';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../control/mailSlice";
function EmailSideBar() {
  const dispatch = useDispatch();
  return (
    <div className="emailSideBar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
        onClick={()=>dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={MailIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={DiamondIcon} title="Important" number={54} />

      <SidebarOption Icon={MarkEmailReadIcon} title="Sent" number={54} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon/>
          </IconButton>
          <IconButton>
            <DuoIcon/>
          </IconButton>
          <IconButton>
            <PhoneIcon/>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export default EmailSideBar;
