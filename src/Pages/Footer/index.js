import React from "react";
import { ReactSVG } from "react-svg";

import git from "../../Assets/Vector.svg";
import linkedin from "../../Assets/linkedin.svg";
import "./Footer.css";

const linkedinUrl = "https://www.linkedin.com/in/esau-freire-matias/";
const githubUrl = "https://github.com/esaumatias";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="containerContact">

      </div>

      <div className="containerTextFooter">
        <a href={linkedinUrl} target="_blank" rel="noreferrer" className="textFooter">
          © 2024 Esau Matias
        </a>
        <div className="containerSocial">
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <ReactSVG src={linkedin} className="socialIcon" style={{ color: 'red'}}/>
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <ReactSVG src={git} className="socialIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
