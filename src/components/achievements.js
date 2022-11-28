// import Carousal from "./carousal";
import Cards from "./cards";
import hackerrank from "../assets/hackerrank.svg";

function Achievements() {
  return (
    <div className="achievements">
      <h1>MY ACHIEVEMENTS</h1>
      <div className="achievements-container">
        <Cards
          img={hackerrank}
          title="Hackerrank Python"
          description="Recieved 5 stars in python on Hackerrank"
        />
        <Cards
          img={hackerrank}
          title="Hackerrank C++"
          description="Recieved 5 stars in C++ on Hackerrank"
        />
        <Cards
          img={hackerrank}
          title="Hackerrank Regex"
          description="Completed Regex module on Hackerrank"
        />
        <Cards
          img={hackerrank}
          title="AWS Cloud Operations"
          description="Completed AWS Cloud Operations Certification Course"
        />
        <Cards
          img={hackerrank}
          title="Matlab Reinforcement Learning"
          description="Completed Matlab Reinforcement Learning Certification Course"
        />
        
      </div>
    </div>
  );
}

export default Achievements;
