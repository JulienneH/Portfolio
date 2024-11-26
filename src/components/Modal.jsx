import React from "react";
import TechLogo from "../components/TechLogo";
import { useEffect } from "react";

const Modal = ({
  isOpen,
  isOpening,
  isClosing,
  onClose,
  selectedWork,
  modalRef,
}) => {
  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (e) => {
        // Vérifie si le clic est à l'extérieur de la modale
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          onClose();
        }
      };
      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isOpen, onClose, modalRef]);
  if (!isOpen || !selectedWork) return null;

  return (
    <div
      className={`modal ${isOpening ? "visible" : ""} ${
        isClosing ? "hidden" : ""
      }`}
    >
      <div className="modal_content" ref={modalRef}>
        <button className="close_button" onClick={onClose}>
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
                  disponible sur Pages. Pour voir le site, clonez le dépot
                  Github en local et suivez le Readme.
                </p>
              )}
            </>
          ) : (
            <p className="modal_backend_notice modal_project7">
              Ce projet était exclusivement une gestion de projet, sans
              développement de code. L'organisation, la planification et
              l'utilisation d'outils comme Notion ont été les principaux aspects
              de ce travail.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
