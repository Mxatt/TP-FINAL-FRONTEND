import React from "react";
import { useNavigate } from "react-router-dom";
import "./contactCard.css";

const ContactCard = ({ id, user, profilePhoto, lastMessage, hour }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chat/${id}`);
  };

  return (
    <button className="contactCard" onClick={handleClick}>
      <div className="leftContact">
        <div className="profilePhoto">
          <img src={profilePhoto} alt={user} />
        </div>
        <div className="contactInfo">
          <h3>{user}</h3>
          <p>{lastMessage}</p>
        </div>
      </div>
      <span className="messageHour">{hour}</span>
    </button>
  );
};

export default ContactCard;
