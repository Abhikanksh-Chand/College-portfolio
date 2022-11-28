// import Carousal from "./carousal";
import Cards from "./cards";
import hackerrank from "../assets/hackerrank.svg";
import AWS from "../assets/aws.svg";
import certificate from "../assets/certificate.png";

function Achievements() {
  return (
    <div className="achievements" id="achievements">
      <h1>MY ACHIEVEMENTS</h1>
      <div className="achievements-container">
        <Cards
          link="https://www.hackerrank.com/ac2563"
          img={hackerrank}
          title="Hackerrank Python"
          description="Recieved 5 stars in python on Hackerrank"
        />
        <Cards
          link="https://www.hackerrank.com/ac2563"
          img={hackerrank}
          title="Hackerrank C++"
          description="Recieved 5 stars in C++ on Hackerrank"
        />
        <Cards
          link="https://drive.google.com/file/d/1sTJcoOTrpktB7mne_WuZ1A5SitNzLobH/view?usp=share_link"
          img={hackerrank}
          title="Hackerrank Regex"
          description="Completed Regex module on Hackerrank"
        />
        <Cards
          link="https://drive.google.com/drive/folders/1_eGns3K0inz_vg_QDdAMeWlCxZokWcBG?usp=share_link"
          img={AWS}
          title="AWS Cloud Operations"
          description="Completed AWS Cloud Operations Certification Course"
        />
        <Cards
          link="https://drive.google.com/drive/folders/1eTEN27eAbFjIp5sRaduFFZhO2M5FCNCE?usp=share_link"
          img={certificate}
          title="Reinforcement Learning"
          description="Completed Matlab Reinforcement Learning Certification Course"
        />
        
      </div>
    </div>
  );
}

export default Achievements;
