import React from "react";
import Photo from "../images/PhotoHattabiJulienne.webp";

const PresentationPage = () => {
  return (
    <div className="section">
      <img
        src={Photo}
        alt="Hattabi Julienne développeuse web front-end"
        className="section_photo presentation_photo"
      />
      <div className="section_text">
        <h1 className="section_title">Julienne HATTABI</h1>
        <h2 className="section_subtitle">Développeuse front-end</h2>
        <p className="section_description">
          Je suis développeuse front-end passionnée par l’intégration
          d’interfaces utilisateur intuitives, motivée par l’apprentissage de
          nouvelles technologies et déterminée à surmonter de nouveaux défis.
        </p>
      </div>
    </div>
  );
};

export default PresentationPage;
