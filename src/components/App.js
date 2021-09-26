import React from "react";
import Navbar from "../components/Nav/Navbar";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Languages from "../components/Languages/Languages";
import Contacts from "../components/Contacts/Contacts";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <AboutMe />
      <Projects />
      <Skills />
      <Languages />
      <Contacts />
    </div>
  );
}

export default App;
