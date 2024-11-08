import React, { useState } from "react";
import CardWorks from "./CardWorks";
import worksData from "../works.json";
import TechLogo from "../components/TechLogo";

// Mapping pour associer les noms d'images aux imports
const imageMap = {
  Bookie: require("../images/Bookie.png"),
  RidingCities: require("../images/riding-cities.png"),
  Ohmyfood: require("../images/ohmyfood.png"),
  Print: require("../images/printit.png"),
  Portfolio: require("../images/portfolio-sophie-bluel.png"),
  Kanban: require("../images/kanban.jpg"),
  Kasa: require("../images/kasa.png"),
  Optimisation: require("../images/optimisation.jpg"),
  Events: require("../images/events.png"),
  Bank: require("../images/argentbank.png"),
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
                      <TechLogo tech={tech} size="40px" />
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
