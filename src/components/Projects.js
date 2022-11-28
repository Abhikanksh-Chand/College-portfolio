import Cards from "./cards";
import hackerrank from "../assets/hackerrank.svg";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>MY PROJECTS</h1>
      <div className="projects-container">
        <Cards
          link="https://drive.google.com/file/d/15ZEfB6ZQj81Kmflr44k54tzT5KbQPxCM/view?usp=share_link"
          // img={hackerrank}
          title="Network Design for Banks"
          description="This project focuses on the design and implementation of a secure Bank network using Cisco Packet Tracer"
        />
        <Cards
          link="https://drive.google.com/file/d/1XCa0mP03XOtG71FgoiD3eoAcTUFEMb0k/view?usp=share_link"
          // img={hackerrank}
          title="Office Network Management"
          description="This project focuses on the design and implementation of a Office Network System using Cisco Packet Tracer"
        />
        <Cards
          link="https://docs.google.com/document/u/0/d/1m84U64RAtTUUBFKnjq7um2yiSs_lEnBqWFJ9zQU83iw/mobilebasic"
          // img={hackerrank}
          title="Tic Tac Toe using Min-Max Algorithm"
          description="Creating a automated tci tac toe mini game Using the Min-Max Algorithm"
        />
        <Cards
          link="https://drive.google.com/drive/folders/1_XdImSfUg_OhF1HnOfYM44m32X5C3zvS?usp=share_link"
          // img={hackerrank}
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
