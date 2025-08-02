import React from "react";
import "./mainscreen.css";
import { SecurityIcon } from "../../src/assets/icons/svgicons";

const MainScreen = () => (
  <section id="mainScreen">
    <h1 style={{ color: "red" }}>Estoy en MainScreen</h1>
    <div className="hero">
      <img src="/mainscreen.png" alt="DownloadWhatsapp" />
      <h2>Descarga WhatsApp para Windows</h2>
      <p>
        Descarga la aplicacion para Windows y haz llamadas, comparte pantalla y
        disfruta de una experiencia más rápida
      </p>
      <button>Descargar</button>
    </div>
    <footer>
      <SecurityIcon width="20" height="20" /> Tus mensajes personales están
      cifrados de extremo a extemo.
    </footer>
  </section>
);

export default MainScreen;
