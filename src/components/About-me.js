import aboutmeimg from "../assets/aboutmeimg.jpeg";

function aboutMe() {
  return (
    <div className="about-me" id="about-me">
      <h1 className="about-me-heading">ABOUT ME</h1>
      <div className="about-me-container">
        <div className="about-me-img">
          <img src={aboutmeimg} alt=" " />
        </div>
        <div className="about-me-content">
          Hello! My Name Is Abhikanksh Chand, I Am From Hyderabad, Currently In
          My Third Year Of B.tech CSE with specialization in Artificial
          Intelligence and Machine Learning, I Like To Code, I Enjoy Learning
          New Technologies And Implementing Them. Currently I Am Focused On Web
          Development And Machine Learning while also Exploring New Things Like Blockchain. I Am Also Very
          Interested In The Fields Like Electronics.
        </div>
      </div>
    </div>
  );
}

export default aboutMe;
