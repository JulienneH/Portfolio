import React, { useState } from "react";
import CardWorks from "./CardWorks";
import worksData from "../works.json"; // Importer le fichier JSON

// Importer les images
import Bookie from "../images/Bookie.png";
import RidingCities from "../images/riding-cities.png";
import Ohmyfood from "../images/ohmyfood.png";
import Print from "../images/printit.png";
import Portfolio from "../images/portfolio-sophie-bluel.png";
import Kanban from "../images/kanban.jpg";
import Kasa from "../images/kasa.png";
import Optimisation from "../images/optimisation.jpg";
import Events from "../images/events.png";
import Bank from "../images/argentbank.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import SASS from "../images/sass.png";
import JS from "../images/js.png";
import SWAGGER from "../images/swagger.png";
import NOTION from "../images/notion.png";
import REACT from "../images/react.png";
import NODEJS from "../images/nodejs.png";
import WAVE from "../images/wave.jpg";
import LIGHTHOUSE from "../images/lightouse.webp";
import YARN from "../images/yarn.jpg";
import REDUX from "../images/redux.webp";

const techLogos = {
  HTML: HTML,
  CSS: CSS,
  SASS: SASS,
  JS: JS,
  SWAGGER: SWAGGER,
  NOTION: NOTION,
  REACT: REACT,
  NODEJS: NODEJS,
  WAVE: WAVE,
  LIGHTHOUSE: LIGHTHOUSE,
  YARN: YARN,
  REDUX: REDUX,
};

// Mapping pour associer les noms d'images aux imports
const imageMap = {
  Bookie: Bookie,
  RidingCities: RidingCities,
  Ohmyfood: Ohmyfood,
  Print: Print,
  Portfolio: Portfolio,
  Kanban: Kanban,
  Kasa: Kasa,
  Optimisation: Optimisation,
  Events: Events,
  Bank: Bank,
};

const WorksSection = () => {
  const works = worksData.map((work) => ({
    ...work,
    screen: imageMap[work.screen],
  }));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  return (
    <div className="cards_works">
      <h1 className="section_text section_title">Mes travaux</h1>
      <div className="cards">
        {works.map((work) => (
          <CardWorks
            key={work.id}
            title={work.title}
            screen={work.screen}
            onClick={() => openModal(work)}
          />
        ))}
      </div>
      {isModalOpen && selectedWork && (
        <div className="modal">
          <div className="modal_content">
            <button className="close_button" onClick={closeModal}>
              X
            </button>
            <h2>{selectedWork.title}</h2>
            <div className="modal-body">
              <div className="modal-left">
                <h3>Description du projet</h3>
                <p>{selectedWork.description}</p>
              </div>
              <div className="modal-right">
                <h3>Technologies utilisées</h3>
                <ul className="modal_tech">
                  {selectedWork.techUsed.map((tech, index) => (
                    <li key={index}>
                      {techLogos[tech] && (
                        <img
                          src={techLogos[tech]}
                          alt={tech}
                          className="modal_techlogos"
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href={selectedWork.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le code sur GitHub
              </a>
              <a
                href={selectedWork.githubPages}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet sur GitHub Pages
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorksSection;
