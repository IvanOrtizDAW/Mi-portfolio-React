import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>Copyright by Iván Ortiz 2021</p>
    </div>
  );
}

function res() {
  //Captura del evento para mostrar u ocultar
  ".icon".click(function () {
    ".menu_item".toggle();
  });
  window.resize(function () {
    var anchura = this.width();
    if (anchura > 576) {
      ".menu_item".show();
    }
  });
}

export default Footer;
