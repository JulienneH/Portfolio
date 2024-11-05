import React from "react";
import PresentationPage from "../components/PresentationPage";
import Navigation from "../components/Navigation";
import FormationSection from "../components/FormationSection";
import WorksSection from "../components/WorksSection";

const SinglePage = () => {
  return (
    <div>
      <Navigation />
      <PresentationPage />
      <FormationSection />
      <WorksSection />
    </div>
  );
};

export default SinglePage;
