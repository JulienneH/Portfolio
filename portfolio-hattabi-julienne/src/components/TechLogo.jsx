import React from "react";
import PropTypes from "prop-types";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import SASS from "../images/sass.png";
import JS from "../images/js.png";
import SWAGGER from "../images/swagger.png";
import NOTION from "../images/notion.png";
import REACT from "../images/react.png";
import NODEJS from "../images/nodejs.png";
import WAVE from "../images/wave.jpg";
import LIGHTHOUSE from "../images/lightouse.webp";
import YARN from "../images/yarn.jpg";
import REDUX from "../images/redux.webp";

// objet de mappage pour associer les logos à leurs noms
const techLogos = {
  HTML,
  CSS,
  SASS,
  JS,
  SWAGGER,
  NOTION,
  REACT,
  NODEJS,
  WAVE,
  LIGHTHOUSE,
  YARN,
  REDUX,
};

const TechLogo = ({ tech, size = "50px" }) => {
  const logoSrc = techLogos[tech];

  if (!logoSrc) {
    return null;
  }

  return <img src={logoSrc} alt={tech} className="skill-image" />;
};

TechLogo.propTypes = {
  tech: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default TechLogo;
