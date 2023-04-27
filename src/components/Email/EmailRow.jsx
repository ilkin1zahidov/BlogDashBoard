import "../../assets/css/emailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../../control/mailSlice";
import StarIcon from "@mui/icons-material/Star";
import { useState, useEffect } from "react"; // useEffect import edildi

const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [starred, setStarred] = useState(false);

  useEffect(() => {
    const starredMails = JSON.parse(localStorage.getItem("starredMails")) || [];
    const foundMail = starredMails.find((mail) => mail && mail.id === id);
    if (foundMail) {
      setStarred(true);
    }
  }, [id]);
  

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    navigate("/mail")
  };

  const handleStarClick = (e) => {
    e.stopPropagation();
    setStarred(!starred);
    const starredMails = JSON.parse(
      localStorage.getItem("starredMails")
    ) || [];
    if (!starred) {
      starredMails.push({ id, title, subject, description, time });
      localStorage.setItem("starredMails", JSON.stringify(starredMails));
    } else {
      const newStarredMails = starredMails.filter((mail) => mail.id!== id);
      console.log(newStarredMails);
      localStorage.setItem("starredMails", JSON.stringify(newStarredMails));
    }
  };

  return (
    <div onClick = {openMail} className="emailRow">
      <div className="emailRow_options">
        <Checkbox style={{color:"white"}} />
        <IconButton  onClick={handleStarClick}>
          {starred ? <StarIcon style={{color:"orange"}}/> : <StarBorderIcon/>}
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailRow_title">{title}</h3>
      <div className="emailRow_message">
        <h4 className="emailMessage">
          {subject} <span className="emailRow_description">-{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
      
    </div>
  );
};

export default EmailRow;
