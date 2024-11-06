import React from "react";

const CardWorks = ({ title, screen, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h4 className="card_title">{title}</h4>
      <img src={screen} alt={title} className="card_image" />
    </div>
  );
};

export default CardWorks;
