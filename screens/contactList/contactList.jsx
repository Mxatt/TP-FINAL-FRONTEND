import React from "react";
import { contactListData } from "../../src/data/contacts.js";
import ContactCard from "../../src/Components/contactCard/contactCard.jsx";
import "./contactlist.css";

const ContactList = () => {
  return (
    <div className="contactList">
      {contactListData.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          user={contact.user}
          profilePhoto={contact.profilePhoto}
          lastMessage={contact.lastMessage}
          hour={contact.hour}
        />
      ))}
    </div>
  );
};

export default ContactList;
