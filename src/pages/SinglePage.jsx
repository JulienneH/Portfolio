import React from "react";
import PresentationPage from "../components/PresentationPage";
import Navigation from "../components/Navigation";
import FormationSection from "../components/FormationSection";
import WorksSection from "../components/WorksSection";
import Skills from "../components/Skills";
import FormContact from "../components/FormContact";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";

const SinglePage = () => {
  return (
    <div>
      <Navigation />

      <div className="presentation_page">
        <PresentationPage />
      </div>

      <FadeInSection>
        <FormationSection />
      </FadeInSection>

      <FadeInSection>
        <WorksSection />
      </FadeInSection>

      <FadeInSection>
        <Skills />
      </FadeInSection>

      <FadeInSection>
        <FormContact />
      </FadeInSection>

      <Footer />
    </div>
  );
};

export default SinglePage;
