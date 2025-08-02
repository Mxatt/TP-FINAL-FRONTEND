import React from "react";
import { contactListData } from "../../data/contacts.js";
import "./chatheader.css";
import {
  VideoCall,
  ChatSearch,
  MenuIcon,
} from "../../assets/icons/svgicons.jsx";

const ChatHeader = ({ user, profilePhoto }) => {
  return (
    <header id="chatHeader">
      <div className="chatUser">
        <img className="profilePhoto" src={profilePhoto} alt={user} />
        <h2 id="userName">{user}</h2>
      </div>

      <div className="buttons">
        <button className="headerButton">
          <VideoCall />
        </button>
        <button className="headerButton">
          <ChatSearch />
        </button>
        <button className="headerButton">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
