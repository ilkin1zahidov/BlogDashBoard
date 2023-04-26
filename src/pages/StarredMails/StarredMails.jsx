import React from "react";
import EmailRow from "../../components/Email/EmailRow";

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

  return (
    <div>
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
  );
};

export default StarMail;
