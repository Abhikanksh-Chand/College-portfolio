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
          title="hello"
          description="Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the"
        />
        <Cards
          img={hackerrank}
          title="hello"
          description="Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the"
        />
        <Cards
          img={hackerrank}
          title="hello"
          description="Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the"
        />
        <Cards
          img={hackerrank}
          title="hello"
          description="Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the"
        />
        <Cards
          img={hackerrank}
          title="hello"
          description="Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the"
        />
        <Cards
          img={hackerrank}
          title="hello"
          description="Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the"
        />
      </div>
    </div>
  );
}

export default Achievements;
