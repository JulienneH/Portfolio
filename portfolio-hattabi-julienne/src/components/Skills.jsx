import React from "react";
import SoftSkills from "../components/SoftSkill";
import HardSkills from "../components/HardSkill";
import HTML from "../images/html.webp";
import CSS from "../images/css.webp";
import SASS from "../images/sass.webp";
import JS from "../images/js.webp";
import REACT from "../images/react.webp";
import REDUX from "../images/redux.webp";
import NEXT from "../images/next.webp";
import NOTION from "../images/notion.webp";
import CHATGPT from "../images/chat-gpt.webp";
import VSCODE from "../images/vscode.webp";
import GIT from "../images/git.webp";
import GITHUB from "../images/github.webp";
import NPM from "../images/npm-yarn.webp";

const Skills = () => {
  const hardSkills = [
    { tech: "HTML", image: HTML },
    { tech: "CSS", image: CSS },
    { tech: "SASS", image: SASS },
    { tech: "REACT", image: REACT },
    { tech: "REDUX", image: REDUX },
    { tech: "JS", image: JS },
    { tech: "NEXT", image: NEXT },
    { tech: "NPM", image: NPM },
  ];

  const softSkills = [
    { tech: "NOTION", image: NOTION },
    { tech: "CHATGPT", image: CHATGPT },
    { tech: "VSCODE", image: VSCODE },
    { tech: "GIT", image: GIT },
    { tech: "GITHUB", image: GITHUB },
  ];

  return (
    <div className="skills margin-left section_text" id="competences">
      <h1 className="section_title section_title_mobile">
        Mes compétences à votre service
      </h1>
      <p className="section_description">
        Dans l'optique de fournir des solutions à la pointe de l'innovation,
        j'ai mis en place une veille technologique afin de rester informée des
        dernières tendances et évolutions du secteur. L'apprentissage continu de
        nouveaux langages et technologies me permet de m'adapter rapidement aux
        besoins changeants du développement web.
      </p>
      <SoftSkills skills={softSkills} />
      <HardSkills skills={hardSkills} />
    </div>
  );
};

export default Skills;
