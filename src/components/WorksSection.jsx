import React, { useState, useRef, useEffect } from "react";
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
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const modalRef = useRef(null);

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
    setTimeout(() => {
      setIsOpening(true); // Active l'animation après le rendu
    }, 10);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setIsOpening(false); // Désactive l'animation d'ouverture
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedWork(null);
      setIsClosing(false);
    }, 500);
  };

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      if (window.innerWidth <= 768) {
        modalRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isModalOpen]);

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
        <div
          className={`modal ${isOpening ? "visible" : ""} ${
            isClosing ? "hidden" : ""
          }`}
        >
          <div className="modal_content" ref={modalRef}>
            <button className="close_button" onClick={handleCloseModal}>
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
              {selectedWork.github || selectedWork.githubPages ? (
                <>
                  {selectedWork.github && (
                    <a
                      href={selectedWork.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le code sur GitHub
                    </a>
                  )}
                  {selectedWork.githubPages ? (
                    <a
                      href={selectedWork.githubPages}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Accéder au site
                    </a>
                  ) : (
                    <p className="modal_backend_notice">
                      Ce site contient une partie Backend. Il n'est donc pas
                      disponible sur Pages. Pour voir le site, clonez le
                      répository et suivez le readme.
                    </p>
                  )}
                </>
              ) : (
                <p className="modal_backend_notice modal_project7">
                  Ce projet était exclusivement une gestion de projet, sans
                  développement de code. L'organisation, la planification et
                  l'utilisation d'outils comme Notion ont été les principaux
                  aspects de ce travail.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorksSection;
