import React, { useState } from "react";
import CardWorks from "./CardWorks";
import Bookie from "../images/Bookie.png";
import RidingCities from "../images/riding-cities.png";
import Ohmyfood from "../images/ohmyfood.png";
import Print from "../images/printit.png";
import Portfolio from "../images/portfolio-sophie-bluel.png";
import Kanban from "../images/kanban.jpg";
import Kasa from "../images/kasa.png";
import Optimisation from "../images/optimisation.png";
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

const WorksSection = () => {
  const works = [
    {
      id: 1,
      title: "Rinding Cities, association sportive",
      screen: RidingCities,
      description:
        "Dans le cadre de ce projet, j'ai été chargé de l'actualisation du site Internet de l'association Riding Cities. La mission consistait à ajouter une nouvelle section et à modifier une section existante.Le développement s'est fait exclusivement en HTML, en réutilisant et en adaptant le code existant pour répondre aux exigences de la maquette.",
      techUsed: ["HTML", "CSS"],
      github: "",
      githubPages: "",
    },
    {
      id: 2,
      title: "Bookie, agence de voyage",
      screen: Bookie,
      description:
        "Le projet consistait à concevoir et intégrer la page d'accueil d'une agence de voyage en utilisant HTML et CSS, avec un accent particulier sur le design responsive. À partir des maquettes Figma fournies pour mobile, tablette et desktop, j'ai créé des composants d'interface qui respectent les exigences de design et assurent une expérience utilisateur optimale sur tous les appareils.Ce travail m'a permis d'affiner mes compétences en design responsive et de mieux comprendre comment structurer et styliser le code pour répondre aux attentes du client.",
      techUsed: ["HTML", "CSS"],
      github: "",
      githubPages: "",
    },
    {
      id: 3,
      title: "OhMyFood, site mobile first",
      screen: Ohmyfood,
      description:
        "L’objectif de ce projet était de développer l'interface mobile-first du site web d’une start-up, en mettant l'accent sur la réactivité et l'ergonomie sur tous les appareils. En utilisant Sass pour la gestion des styles et en intégrant des animations CSS, j’ai créé une interface fluide et interactive à partir des maquettes Figma disponibles pour les versions mobile et desktop.L’approche mobile-first a permis de garantir que le site soit parfaitement optimisé pour les écrans mobiles avant de l’adapter aux autres résolutions.",
      techUsed: ["HTML", "CSS", "SASS"],
      github: "https://github.com/JulienneH/Projet-4",
      githubPages: "https://julienneh.github.io/Projet-4/",
    },
    {
      id: 4,
      title: "Print-It, imprimerie",
      screen: Print,
      description:
        "Ce projet m'a permis de me familiariser avec JavaScript en dynamisant un site web statique d'une imprimerie. L'objectif principal était d'intégrer un carrousel interactif afin de rendre le site plus engageant et dynamique.En travaillant sur ce projet, j'ai exploré les bases de JavaScript, un langage essentiel pour le développement web interactif, et appris à intégrer des éléments interactifs. J'ai mis à jour le code HTML existant et ajouté un carrousel en JavaScript, ce qui m’a permis de comprendre l'interaction entre JavaScript, HTML et CSS pour créer des fonctionnalités dynamique",
      techUsed: ["HTML", "CSS", "JS"],
      github: "",
      githubPages: "",
    },
    {
      id: 5,
      title: "Portfolio d'une architecte",
      screen: Portfolio,
      description:
        "L'objectif de ce projet était de créer une page web dynamique pour le site d'une architecte d'intérieur, en utilisant JavaScript et en interagissant avec une API. J'ai travaillé sur le développement Front-End du site en créant une page de présentation des travaux de l'architecte à partir du HTML fourni. Cela a impliqué la gestion des événements utilisateurs et la manipulation des éléments du DOM avec JavaScript.",
      techUsed: ["HTML", "CSS", "JS", "SWAGGER"],
      github: "",
      githubPages: "",
    },
    {
      id: 6,
      title: "Gestion de projet",
      screen: Kanban,
      description:
        "L'objectif de ce projet était de participer à la planification stratégique du développement d'un site web, en me concentrant sur l'organisation et la gestion du projet, sans intervenir dans la partie codage. Dans ce cadre, j'ai travaillé à partir de la maquette, des spécifications fonctionnelles et des User Stories pour comprendre les besoins du projet et organiser les différentes étapes de développement.J'ai rédigé les spécifications techniques du projet en décomposant les fonctionnalités en tâches précises et en définissant les besoins fonctionnels. Pour assurer une gestion efficace du projet, j'ai utilisé Notion où j'ai créé un tableau Kanban pour suivre les progrès et les priorités.",
      techUsed: ["NOTION"],
      github: "",
      githubPages: "",
    },
    {
      id: 7,
      title: "Kasa, location immobilière",
      screen: Kasa,
      description:
        "Ce travail avait pour objectif de développer le front-end d'une application web en utilisant React et React Router, afin de créer une expérience utilisateur moderne et réactive.J'ai conçu et implémenté la logique de présentation des données et les composants React pour assurer une interface dynamique et fluide. React Router a été utilisé pour gérer la navigation entre les différentes pages de l'application, ce qui m'a permis d'acquérir une bonne maîtrise du routage dans une application web moderne.",
      techUsed: ["HTML", "CSS", "REACT", "NODEJS"],
      github: "",
      githubPages: "",
    },
    {
      id: 8,
      title: "Portfolio de photographe ",
      screen: Optimisation,
      description:
        "Le but de ce travail était d'optimiser le référencement, la performance et l'accessibilité d'un site web afin d'améliorer son classement sur les moteurs de recherche et offrir une meilleure expérience utilisateur. J'ai commencé par identifier les problèmes de chargement et de référencement du site en utilisant des outils d'audit tels que Lighthouse et Wave. Sur la base des résultats obtenus, j'ai proposé des recommandations pour améliorer la vitesse de chargement, la structure du code, et l'optimisation pour les moteurs de recherche.",
      techUsed: ["WAVE", "LIGHTHOUSE"],
      github: "",
      githubPages: "",
    },
    {
      id: 9,
      title: "Debuggage",
      screen: Events,
      description:
        "Ce projet m'a permis de finaliser le développement d'un site One-Page en me concentrant sur le débogage et la résolution des bugs.En parallèle, j'ai complété le cahier de recette, un document détaillant les scénarios de test nécessaires pour assurer le bon fonctionnement du site, incluant des tests unitaires et fonctionnels.Pour gérer le projet, j'ai utilisé Yarn comme gestionnaire de packages et Node.js pour exécuter du code JavaScript côté serveur",
      techUsed: ["REACT", "NODEJS", "YARN"],
      github: "",
      githubPages: "",
    },
    {
      id: 10,
      title: "Argent-Bank, banque en ligne",
      screen: Bank,
      description:
        "Dans ce projet, ma mission principale a été de développer le front-end d’une application bancaire en utilisant React et Redux, afin de créer une expérience utilisateur réactive et dynamique.J'ai commencé par intégrer le front-end avec le back-end en écrivant des appels API REST.L’interface utilisateur a été développée avec React, en mettant l’accent sur la création d'un tableau de bord complet et responsive pour les utilisateurs.Redux a été utilisé pour gérer les données de l’application et maintenir un état global cohérent à travers toute l'interface.Enfin, j'ai utilisé Node.js pour exécuter le code JavaScript côté serveur, ce qui m’a permis d’acquérir une expérience précieuse dans le développement full-stack.",
      techUsed: ["HTML", "CSS", "REACT", "REDUX", "SWAGGER"],
      github: "",
      githubPages: "",
    },
  ];
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
