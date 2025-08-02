import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatNav from "./Components/chatNav/chatnav";
import MainScreen from "../screens/mainScreen/mainscreen";
import ChatAside from "./Components/aside/Aside";
import ChatScreen from "../screens/mainChat/ChatScreen";

const Main = () => {
  return (
    <BrowserRouter>
      <ChatAside />
      <ChatNav />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/chat/:id" element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
