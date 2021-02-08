import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="home__banner">
        <h1>
          Mi <strong>Portfolio</strong>
        </h1>
      </div>
      <div className="home__subBanner">
        <p>Diseñador web | Desarrollador web </p>
      </div>
      <div className="home__content" id="proyectos">
        <div className="home__content__title">
          <h2>Proyectos</h2>
        </div>

        <div className="home__content__clusters">
          <div className="textolado">
            <p>
              Mi proyecto de final de grado superior DAW (Desarrollo de
              aplicaciones web).Es una página web que tiene como tema principal
              la formacion y venta de elementos de modelado y animacion 3D con
              registro e inicio de sesion mediante una base de datos. Tambien
              contiene una tienda online realizada con wordpress y como puglin
              principal e-commerce
            </p>
            <button type="button">
              <a href="https://github.com/IvanOrtizDAW/Dranimaco">Pulsa aqui</a>
            </button>
          </div>
          <div className="dranimaco"></div>

          <div className="diseno"></div>
          <div className="textolado">
            <p>
              Mis diseños UX & UI de páginas web realizados con distintas
              aplicaciones como: photoshop, figma, adobe XD.
            </p>
            <button type="button">
              <a href="/diseno">Pulsa aqui</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
