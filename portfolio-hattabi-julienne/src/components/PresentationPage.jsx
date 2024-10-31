import React from "react";
import Photo from "../images/PhotoHattabiJulienne.webp";

const PresentationPage = () => {
  return (
    <div className="presentation">
      <img
        src={Photo}
        alt="Hattabi Julienne développeuse web front-end"
        className="presentation_photo"
      />
      <div className="presentation_text">
        <h1 className="presentation_title">Julienne HATTABI</h1>
        <h2 className="presentation_subtitle">Développeuse front-end</h2>
        <p className="presentation_description">
          Je suis développeuse front-end passionnée par l’intégration
          d’interfaces utilisateur intuitives, motivée par l’apprentissage de
          nouvelles technologies et déterminée à surmonter de nouveaux défis.
        </p>
      </div>
    </div>
  );
};

export default PresentationPage;
