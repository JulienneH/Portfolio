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
          Développeuse front-end enthousiaste, je me passionne pour
          l'intégration d'interfaces utilisateur intuitives et dynamiques.
          Curieuse et motivée, j’aime explorer de nouvelles technologies pour
          perfectionner mes compétences et relever de nouveaux défis avec
          passion.
        </p>
      </div>
    </div>
  );
};

export default PresentationPage;
