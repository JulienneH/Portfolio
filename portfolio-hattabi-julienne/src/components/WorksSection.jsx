import React from "react";
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

const WorksSection = () => {
  const works = [
    {
      id: 1,
      title: "Rinding Cities, association sportive",
      screen: RidingCities,
      description: "Description de mon projet 1.",
    },
    {
      id: 2,
      title: "Bookie, agence de voyage",
      screen: Bookie,
      description: "Description de mon projet 2.",
    },
    {
      id: 3,
      title: "OhMyFood, site mobile first",
      screen: Ohmyfood,
      description: "Description de mon projet 3.",
    },
    {
      id: 4,
      title: "Print-It, imprimerie",
      screen: Print,
      description: "Description de mon projet 3.",
    },
    {
      id: 5,
      title: "Portfolio d'une architecte",
      screen: Portfolio,
      description: "Description de mon projet 3.",
    },
    {
      id: 6,
      title: "Gestion de projet",
      screen: Kanban,
      description: "Description de mon projet 3.",
    },
    {
      id: 7,
      title: "Kasa, location immobilière",
      screen: Kasa,
      description: "Description de mon projet 3.",
    },
    {
      id: 8,
      title: "Optimisation du SEO",
      screen: Optimisation,
      description: "Description de mon projet 3.",
    },
    {
      id: 9,
      title: "Debuggage",
      screen: Events,
      description: "Description de mon projet 3.",
    },
    {
      id: 10,
      title: "Argent-Bank, banque en ligne",
      screen: Bank,
      description: "Description de mon projet 3.",
    },
  ];

  return (
    <div className="cards_works ">
      <h1 className=" section_text section_title ">Mes travaux</h1>
      <div className="cards ">
        {works.map((work) => (
          <CardWorks
            key={work.id}
            title={work.title}
            screen={work.screen}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WorksSection;
