import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Intro from "./components/intro";
import AboutMe from "./components/About-me";
import MySkills from "./components/mySkills";
import ACHIEVEMENTS from "./components/achievements";
import Projects from "./components/Projects";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <MySkills />
      <ACHIEVEMENTS />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;
