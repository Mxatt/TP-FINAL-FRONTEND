import React from "react";
import { useNavigate } from "react-router-dom";
import { contactListData } from "../../src/data/contacts.js";
import ContactCard from "../../src/Components/contactCard/contactCard.jsx";
import "./contactlist.css";
import "../../src/Components/chatNav/chatnav.jsx";

const ContactList = () => {
  const navigate = useNavigate();
  const handleContactClick = (id) => {
    navigate(`/chat/${id}`);
    window.dispatchEvent(new CustomEvent("showChatScreen"));
  };

  return (
    <div id="contactList">
      {contactListData.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          user={contact.user}
          profilePhoto={contact.profilePhoto}
          lastMessage={contact.lastMessage}
          hour={contact.hour}
          onClick={() => handleContactClick(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;