import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ul className={`navigation ${showMenu ? "show" : ""}`}>
        <li className="navigation_content">
          <a href="#parcours">Parcours de formation</a>
        </li>
        <li className="navigation_content">
          <a href="#realisations">Mes réalisations</a>
        </li>
        <li className="navigation_content">
          <a href="#competences">Mes compétences</a>
        </li>
        <li className="navigation_content">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
