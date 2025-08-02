import React from "react";
import "./Aside.css";
import UserData from "../../data/user";
import {
  ChatsIcon,
  ConfigIcon,
  CommunityIcon,
  ChanelsIcon,
  StatusIcon,
} from "../../assets/icons/svgicons";

const ChatAside = () => {
  return (
    <aside id="aside">
      <div className="topButtons">
        <button className="asideButton">
          <ChatsIcon fill="gray" width="24" height="24" />
        </button>
        <button className="asideButton">
          <StatusIcon fill="gray" width="24" height="24" />
        </button>
        <button className="asideButton">
          <ChanelsIcon fill="gray" width="24" height="24" />
        </button>
        <button className="asideButton">
          <CommunityIcon fill="gray" width="32" height="32" />
        </button>
      </div>
      <div className="bottomButtons">
        <button className="bottomButton">
          <ConfigIcon fill="gray" width="24" height="24" />
        </button>
        <button className="bottomButton">
          <img
            src={UserData.profilePhoto}
            alt={`${UserData.nombre} ${UserData.apellido}`}
            className="userPhoto"
          />
        </button>
      </div>
    </aside>
  );
};

export default ChatAside;
