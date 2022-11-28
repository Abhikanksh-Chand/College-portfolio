import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Intro from "./components/intro";
import AboutMe from "./components/About-me";
import MySkills from "./components/mySkills";
import ACHIEVEMENTS from "./components/achievements";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <MySkills />
      <ACHIEVEMENTS />
      <Projects />

    </div>
  );
}

export default App;
