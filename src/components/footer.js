import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.png";
import resume from "../assets/resume.png";

function footer(){
    return(
        <div className="footer">
        <div className="footer-contactme">
        <a href="https://github.com/Abhikanksh-Chand" target="_blank"><img src={github} alt=" " /></a>
        <a href="https://www.linkedin.com/in/abhikanksh-chand-a5943a227/" target="_blank"><img src={linkedin} alt=" " /></a>
        <a href="mailto:ac2563@srmist.edu.in" target="_blank"><img src={email} alt=" " /></a>
        <a href="https://drive.google.com/file/d/1jE9NkKoUMKlBxQ_hiBiUNy51sqfBSx65/view?usp=share_link" target="_blank"><img src={resume} alt=" " /></a>
        </div>
        </div>
    );
}

export default footer;