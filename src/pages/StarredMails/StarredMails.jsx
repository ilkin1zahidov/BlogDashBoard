import React from "react";
import EmailRow from "../../components/Email/EmailRow";
import "../../assets/css/mail.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";



const StarMail = () => {
  const starredMails = JSON.parse(
    localStorage.getItem("starredMails")
  ) || [];

  const handleStarClick = (id) => {
    const newStarredMails = starredMails.map((mail) =>
      mail.id === id ? { ...mail, starred: !mail.starred } : mail
    );
    localStorage.setItem("starredMails", JSON.stringify(newStarredMails));
  };
  const navigate = useNavigate();
  return (
    <div className="mail">
          <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => navigate("/emailHome")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="mail_toolsRight">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
      <h2 style={{ marginBottom: '20px' }} >Starred Mails</h2 >
      <div className="mail_header" style={{borderTop: '1px solid whitesmoke'}}>
    
      {starredMails.map((mail) => (
        <EmailRow
          key={mail.id}
          id={mail.id}
          title={mail.title}
          subject={mail.subject}
          description={mail.description}
          time={mail.time}
          starred={mail.starred}
          onStarClick={() => handleStarClick(mail.id)}  
        />
      ))}
      </div>
      </div>
  
    </div>
  );
};

export default StarMail;
