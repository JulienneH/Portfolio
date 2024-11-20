import React, { useState, useRef, useEffect } from "react";
import CardWorks from "./CardWorks";
import worksData from "../works.json";
import Modal from "./Modal";

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
    setTimeout(() => setIsOpening(true), 10);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setIsOpening(false);
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
      <Modal
        isOpen={isModalOpen}
        isOpening={isOpening}
        isClosing={isClosing}
        onClose={handleCloseModal}
        selectedWork={selectedWork}
        modalRef={modalRef}
      />
    </div>
  );
};

export default WorksSection;
