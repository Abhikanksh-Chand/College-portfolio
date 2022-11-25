import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/intro";
import AboutMe from "./components/About-me";
import MySkills from "./components/mySkills";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <MySkills />

    </div>
  );
}

export default App;
