import React, { useState } from "react";
import CardWorks from "./CardWorks";
import worksData from "../works.json";
import TechLogo from "../components/TechLogo";

// Mapping pour associer les noms d'images aux imports
const imageMap = {
  Bookie: require("../images/Bookie.webp"),
  RidingCities: require("../images/riding-cities.webp"),
  Ohmyfood: require("../images/ohmyfood.webp"),
  Print: require("../images/printit.webp"),
  Portfolio: require("../images/portfolio-sophie-bluel.webp"),
  Kanban: require("../images/kanban.webp"),
  Kasa: require("../images/kasa.webp"),
  Optimisation: require("../images/optimisation.webp"),
  Events: require("../images/events.webp"),
  Bank: require("../images/argentbank.webp"),
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
    <div className="cards_works" id="realisations">
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
            <div className="modal_body">
              <div className="modal_left">
                <h3>Description du projet</h3>
                <p className="modal_text">{selectedWork.description}</p>
              </div>
              <div className="modal_right">
                <h3>Technologies utilisées</h3>
                <ul className="modal_tech">
                  {selectedWork.techUsed.map((tech, index) => (
                    <li key={index}>
                      <TechLogo tech={tech} size="40px" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal_footer">
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
