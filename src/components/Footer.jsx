import React from "react";
import GITHUB from "../images/github.webp";
import LINKEDIN from "../images/linkedin.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_text">
        <p>N'hésitez pas à consulter mes profils Github et LinkedIn : </p>
      </div>
      <div className="footer_img">
        <a
          href="https://github.com/JulienneH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GITHUB}
            alt="lien repo github"
            className="footer_logo"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/juliennehattabi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LINKEDIN}
            alt="lien compte linkedin "
            className="footer_logo"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
