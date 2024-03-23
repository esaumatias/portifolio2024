import React, { useEffect, useState } from "react";

import "./Home.css";

const Home = ({ theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function typeWrite(elemento) {
      const textoArray = elemento.innerHTML.split("");
      elemento.innerHTML = "";
      textoArray.forEach(function (letra, i) {
        setTimeout(function () {
          elemento.innerHTML += letra;
        }, 75 * i);
      });
    }
    const titulo = document.querySelector(".titulo-principal");
    typeWrite(titulo);
  }, []);

  return (
    <div className="containerHome">
      <nav className="navbar">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <div className={`menu-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </nav>

      <div>
        <div>Olá 👋,</div>
        <div>meu nome é</div>
        <div>Esau Matias.</div>
        <div className="titulo-principal">Front-end developer.</div>
      </div>
    </div>
  );
};

export default Home;
