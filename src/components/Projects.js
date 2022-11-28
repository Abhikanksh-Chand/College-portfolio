import Cards from "./cards";
import hackerrank from "../assets/hackerrank.svg";

function Projects() {
  return (
    <div className="projects">
      <h1>MY PROJECTS</h1>
      <div className="projects-container">
        <Cards
          img={hackerrank}
          title="Network Design for Banks"
          description="This project focuses on the design and implementation of a secure Bank network using Cisco Packet Tracer"
        />
        <Cards
          img={hackerrank}
          title="Office Network Management"
          description="This project focuses on the design and implementation of a Office Network System using Cisco Packet Tracer"
        />
        <Cards
          img={hackerrank}
          title="Tic Tac Toe using Min-Max Algorithm"
          description="Creating a automated tci tac toe mini game Using the Min-Max Algorithm"
        />
        <Cards
          img={hackerrank}
          title="Hostel Seva"
          description="This project is about digitalizing hostel management
systems by developing an automated customer care
service software which will help cater to the students
needs while also making hostel management more
efficient."
        />
        
      </div>
    </div>
  );
}

export default Projects;
