import React from "react";
import PresentationPage from "../components/PresentationPage";
import Navigation from "../components/Navigation";
import FormationSection from "../components/FormationSection";

const SinglePage = () => {
  return (
    <div>
      <Navigation />
      <PresentationPage />
      <FormationSection />
    </div>
  );
};

export default SinglePage;
