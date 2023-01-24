import Header from "../UI/Header/Header";
import "./aboutme.css";
const AboutMe = () => {
  return (
    <div className="about_me_container">
      <Header subTitle="Get To Know" mainTitle="me" />

      <div className="me_content">
        <img src="/aboutmerec.jpg" alt="" />
        <div className="intro">
          <p>
            Heellooo~ This is Luis from Venezuela.
            <br /> When I first came into contact with web development, I was
            deeply attracted. I have always been a person full of fantasies, and
            all kinds of thoughts often come into my mind. Now, these ideas have
            a chance to show to everyone -{">"} Encode them into the real world
            ! This is what I have always wanted to do and what I am doing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
