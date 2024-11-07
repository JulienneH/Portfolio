import React from "react";

const CardWorks = ({ title, screen, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div
        className="card_text
      "
      >
        <h4 className="card_title">{title}</h4>
      </div>
      <img src={screen} alt={title} className="card_image" />
    </div>
  );
};

export default CardWorks;
