import React from "react";
import "./chatnav.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ContactList from "../../../screens/contactList/contactList.jsx";
import {
  NewChatIcon,
  MenuIcon,
  SearchIcon,
  FakeLogo,
} from "../../assets/icons/svgicons.jsx";

const ChatNav = () => {
  return (
    <section id="chatNavSection">
      <header id="navHeader">
        <FakeLogo id="fakeLogo" />
        <div className="rightHeader">
          <button className="navButton">
            <NewChatIcon width="24" height="24" />
          </button>
          <button className="navButton">
            <MenuIcon width="24" height="24" />
          </button>
        </div>
      </header>
      <nav id="chatNav">
        <div className="search-container">
          <SearchIcon className="search-icon" width="20" height="20" />
          <input
            id="busqueda"
            type="text"
            placeholder="Buscar un chat o iniciar uno nuevo"
          />
        </div>

        <div className="buttons-container">
          <button className="chat_nav-button">Todos</button>
          <button className="chat_nav-button">No leídos</button>
          <button className="chat_nav-button">Favoritos</button>
          <button className="chat_nav-button">Grupos</button>
        </div>
        <div className="chats-container">
          <ContactList />
        </div>
      </nav>
    </section>
  );
};

export default ChatNav;
