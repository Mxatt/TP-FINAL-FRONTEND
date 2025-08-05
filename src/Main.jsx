import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ChatNav from "./Components/chatNav/chatnav";
import MainScreen from "../screens/mainScreen/mainscreen";
import ChatAside from "./Components/aside/Aside";
import ChatScreen from "../screens/mainChat/ChatScreen";
import ContactList from "../screens/contactList/contactList";

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 480);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

function MobileRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ChatNav />
          </>
        }
      />
      <Route path="/chat/:id" element={<ChatScreen />} />
    </Routes>
  );
}

function DesktopRoutes() {
  return (
    <>
      <ChatAside />
      <ChatNav />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/chat/:id" element={<ChatScreen />} />
      </Routes>
    </>
  );
}

const Main = () => {
  const isMobile = useIsMobile();
  return (
    <BrowserRouter>
      {isMobile ? <MobileRoutes /> : <DesktopRoutes />}
    </BrowserRouter>
  );
};

export default Main;
