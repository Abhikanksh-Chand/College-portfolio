import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Intro from "./components/intro";
import AboutMe from "./components/About-me";
import MySkills from "./components/mySkills";
import ACHIEVEMENTS from "./components/achievements";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <MySkills />
      <ACHIEVEMENTS />

    </div>
  );
}

export default App;
