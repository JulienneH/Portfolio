import React from "react";
import SoftSkills from "../components/SoftSkill";
import HardSkills from "../components/HardSkill";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import SASS from "../images/sass.png";
import JS from "../images/js.png";
import REACT from "../images/react.png";
import REDUX from "../images/redux.webp";
import NEXT from "../images/next.png";
import NOTION from "../images/notion.png";
import CHATGPT from "../images/chat-gpt.png";
import VSCODE from "../images/vscode.png";
import GIT from "../images/git.png";
import GITHUB from "../images/github.png";
import NPM from "../images/npm-yarn.png";

const Skills = () => {
  const hardSkills = [
    { image: HTML },
    { image: CSS },
    { image: SASS },
    { image: REACT },
    { image: REDUX },
    { image: JS },
    { image: NEXT },
    { image: NPM },
  ];

  const softSkills = [
    { image: NOTION },
    { image: CHATGPT },
    { image: VSCODE },
    { image: GIT },
    { image: GITHUB },
  ];

  return (
    <div className="skills margin-left">
      <h1 className="section_title section_text m">
        Mes compétences à votre service
      </h1>
      <p className="section_description section_text">
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
