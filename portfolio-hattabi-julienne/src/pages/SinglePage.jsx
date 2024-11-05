import React from "react";
import PresentationPage from "../components/PresentationPage";
import Navigation from "../components/Navigation";
import FormationSection from "../components/FormationSection";
import WorksSection from "../components/WorksSection";
import Skills from "../components/Skills";

const SinglePage = () => {
  return (
    <div>
      <Navigation />
      <PresentationPage />
      <FormationSection />
      <WorksSection />
      <Skills />
    </div>
  );
};

export default SinglePage;
