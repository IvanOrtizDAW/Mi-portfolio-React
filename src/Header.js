import React from "react";
import logo from "./images/sin_fondo.png";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__menu">
        <a href="/" className="header__menu__logo">
          <img src={logo} alt="logo" />
        </a>

        <div className="header__nav">
          <nav>
            <a href="/#proyectos">Proyectos</a>
            <a href="/contacto">Contacto</a>
            <a href="https://github.com/IvanOrtizDAW">Github</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
