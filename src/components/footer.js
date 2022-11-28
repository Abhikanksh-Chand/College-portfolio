import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.png";
import resume from "../assets/resume.png";

function footer(){
    return(
        <div className="footer">
        <div className="footer-contactme">
        <img src={github} alt=" " />
        <img src={linkedin} alt=" " />
        <img src={email} alt=" " />
        <img src={resume} alt=" " />
        </div>
        </div>
    );
}

export default footer;