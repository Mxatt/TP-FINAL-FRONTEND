import React, { useState } from "react";
import {
  SendMessageButton,
  VoiceButton,
  PlusIcon,
  StickerIcon,
} from "../../assets/icons/svgicons";
import "./ChatInput.css";

const MessageForm = ({ Send }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      messageID: Date.now(),
      messageHour: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      messageValue: message,
      fromUser: true,
    };

    Send(newMessage);
    setMessage("");
  };

  return (
    <div className="messageInputContainer">
      <form onSubmit={handleSubmit} className="messageInputForm">
        <button className="button-default">
          <PlusIcon className="plusIcon" width="24" height="24" />
        </button>
        <button className="button-default">
          <StickerIcon className="stickerIcon" width="24" height="24" />
        </button>

        <input
          type="text"
          placeholder="Escribe un mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="messageInput"
        />
        {message.trim() ? (
          <button className="sendButton" type="submit">
            <SendMessageButton width="24" height="24" />
          </button>
        ) : (
          <button className="voiceButtonContainer button-default" type="button">
            <VoiceButton className="voiceButton" width="24" height="24" />
          </button>
        )}
      </form>
    </div>
  );
};

export default MessageForm;
