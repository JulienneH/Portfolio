import React from "react";

const CardWorks = ({ title, screen }) => {
  return (
    <div className="card">
      <h4 className="card_title">{title}</h4>
      <img src={screen} alt={title} className="card_image" />
    </div>
  );
};

export default CardWorks;
