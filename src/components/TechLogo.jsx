import React from "react";
import PropTypes from "prop-types";
import HTML from "../images/html.webp";
import CSS from "../images/css.webp";
import SASS from "../images/sass.webp";
import JS from "../images/js.webp";
import SWAGGER from "../images/swagger.webp";
import NOTION from "../images/notion.webp";
import REACT from "../images/react.webp";
import NODEJS from "../images/nodejs.webp";
import WAVE from "../images/wave.webp";
import LIGHTHOUSE from "../images/lightouse.webp";
import YARN from "../images/yarn.webp";
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
