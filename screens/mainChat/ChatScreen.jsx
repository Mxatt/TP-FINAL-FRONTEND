import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { contactListData } from "../../src/data/contacts";
import ChatHeader from "../../src/Components/ChatHeader/chatheader";
import "./chatscreen.css";
import ChatInput from "../../src/Components/ChatInput/ChatInput";

const ChatScreen = () => {
  const { id } = useParams();
  const contact = contactListData.find((c) => c.id === parseInt(id));
  const [messages, setMessages] = useState(
    contact ? contact.messageHistory : []
  );
  useEffect(() => {
    setMessages(contact ? contact.messageHistory : []);
  }, [contact]);
  if (!contact) return <p>Usuario no encontrado</p>;
  const handleSend = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };
  const handleDelete = (messageID) => {
    setMessages((prev) => prev.filter((msg) => msg.messageID !== messageID));
  };

  return (
    <section className="chatMain">
      <ChatHeader user={contact.user} profilePhoto={contact.profilePhoto} />
      <div className="chatContainer">
        <ul>
          {messages.map((msg) => (
            <li
              key={msg.messageID}
              className={msg.fromUser ? "sendedMessages" : "recievedMessages"}
            >
              [{msg.messageHour}] {msg.messageValue}
              {msg.fromUser && (
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(msg.messageID)}
                >
                  X
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <ChatInput Send={handleSend} />
    </section>
  );
};

export default ChatScreen;
