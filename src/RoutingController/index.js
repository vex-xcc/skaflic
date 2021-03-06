import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import LandingPage from "../components/LandingSection";
import InfoSection from "../components/InfoSection";
import { section_1, 
  // section_2,
   //section_3,
   section_4,section_5 } from "../components/InfoSection/Data";
import RoadMapSection from '../components/RoadMapSection';
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <LandingPage />
      <InfoSection {...section_1}/>
      <RoadMapSection/>
      <InfoSection {...section_4}/>
      <Services/>
      <InfoSection {...section_5}/>

      <Footer/>
    </>
  );
};

export default Home;
