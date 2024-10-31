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
        <li className="navigation_content">Mon parcours de formation</li>
        <li className="navigation_content">Mes réalisations</li>
        <li className="navigation_content">Mes compétences</li>
        <li className="navigation_content">Contact</li>
      </ul>
    </>
  );
};

export default Navigation;
