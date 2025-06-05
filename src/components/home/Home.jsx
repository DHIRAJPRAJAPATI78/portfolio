import React from "react";
import GradientBackgroundBlobs from "../GradientBackgroundBlobs";
import HeroSection from "../HeroSection ";
import AboutSection from "../AboutSection ";
import SkillSection from "../SkillSection";
import Education from "../Education";
import Contact from "../Contact";

const Home = () => {
  return (
    <div>
      <GradientBackgroundBlobs />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
