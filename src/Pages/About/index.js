import React from "react";
import { ReactSVG } from "react-svg";

import perfil from "../../Assets/perfil.svg";

import "./About.css";

const About = () => {
  return (
    <div className="containerAbout">
      <div className="title">Sobre mim</div>

      <div className="containerSobre">
        <div className="perfil">
          <ReactSVG src={perfil} />
        </div>

        <div className="containerText">
          <div>👋 Olá, pode me chamar apenas de Esau. Prazer!</div>
          <div>
            👨‍💻 +2 anos desenvolvendo aplicações com JavaScript, ReactJS, React
            Native e outras tecnologias
          </div>
          <div>
            🎓 Desenvolvedor Web Full Stack pela Trybe.
          </div>
          <div>
            🎓 Estudante do 2º período do curso de Análise e Desenvolvimento de
            Sistemas pela UniNassau.
          </div>
          <div>
            💡 Interesses em desenvolvimento Front-end com React JS, React
            Native.
          </div>
          <div>
            🚀 Tentando ser um pouquinho melhor do que ontem todos dias.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
