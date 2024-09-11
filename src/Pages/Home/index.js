import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import logo from "../../Assets/logo.svg";
import perfil from "../../Assets/iconEsau.png";
import linkedin from "../../Assets/linkedin.svg";
import git from "../../Assets/Vector.svg";
import lua from "../../Assets/lua-cheia (2).png";
import sol from "../../Assets/sol.png";
import { motion } from "framer-motion";

import "./Home.css";

const Home = ({ theme, handleThemeChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const variants = {
    sun: {
      rotate: 0,
      scale: 1,
    },
    moon: {
      rotate: 180,
      scale: 0.9,
    },
  };

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

  const linkedinUrl = "https://www.linkedin.com/in/esau-freire-matias/";
  const githubUrl = "https://github.com/esaumatias";

  return (
    <div className="containerHome">
      <nav className="navbar">
        <ReactSVG src={logo} className="logo" />

        <div className={`menu-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#skills">Tech Stack</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <button onClick={handleThemeChange} className="buttonMode">
              <motion.div
                animate={theme === "light" ? "sun" : "moon"}
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                {theme === "light" ? (
                  <img src={sol} alt="ass" className="iconMode" />
                ) : (
                  <img src={lua} alt="ass" className="iconMode" />
                )}
              </motion.div>
            </button>
          </ul>
        </div>

        <div
          className={`menu-icon ${menuOpen && "active"}`}
          onClick={toggleMenu}
        >
          <div className="btn">
            <div className="btn-left"></div>
            <div className="btn-right"></div>
          </div>
        </div>
      </nav>

      <div>
        <div className="containerInfoHome">
          <div className="containerTitles">
            <div>Olá 👋,</div>
            <div>meu nome é</div>
            <div className="myName">Esau Matias</div>
            <div className="titulo-principal">Front-end developer.</div>
          </div>
          <img src={perfil} className="perfil" alt="esau perfil"/>
        </div>

        <div className="containerSocial">
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <ReactSVG src={linkedin} className="socialIcon" />
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <ReactSVG src={git} className="socialIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
