import Header from "../UI/Header/Header";
import "./aboutme.css";
import { FaAward } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useAppDispatch } from "../../store";
import { selectTab } from "../../store/navSlice";
import { FaConnectdevelop, FaGuitar } from "react-icons/fa";
const AboutMe = () => {
  const dispatch = useAppDispatch();

  const toContact = () => {
    dispatch(selectTab("contact"));
  };
  return (
    <div className="about_me_container">
      <Header subTitle="Get To Know" mainTitle="Me" />

      <div className="me_content">
        <img src="/aboutmerec.jpg" alt="" />

        <div className="intro">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Langara College</h5>
              <small>Computer Studies</small>
            </div>
            <div className="about_card">
              <BiCodeCurly className="about_icon" />
              <h5>Coding Experiences</h5>
              <small>4+years</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ projects</small>
            </div>
          </div>
          <p>
            Heellooo~ This is Luis from Venezuela.
            <br /> When I first came into contact with web development, I was
            deeply attracted. I have always been a person full of fantasies, and
            all kinds of thoughts often come into my mind. Now, these ideas have
            a chance to show to everyone -&gt; Encode them into the real world !
            This is what I have always wanted to do and what I am doing.
          </p>
          <a className="btn btn_primary" onClick={toContact}>
            Let's Talk
          </a>
        </div>
        <div className="doing_list">
          <h2>What I do</h2>

          <div className="todos">
            <FaConnectdevelop className="about_icon" />
            <div className="todo">
              <h3>Front end developer</h3>
              <p>
                I have work experience as a front-end developer at Weivee. I
                also have worked as a UI/UX designer to create impressive user
                interface and some time assist backend development team in
                building Restful Api. From these experiences, I have learned
                react development, vue development, MySQL, PHP, Laravel,
                DcatAdmin HTML, CSS, and figma.
              </p>
            </div>
          </div>
          <div className="todos">
            <FaGuitar className="about_icon" />
            <div className="todo">
              <h3>Play Guitar</h3>
              <p>
                I'm a relatively new guitar learner, love playing it with
                friends at parties. I like to use a guitar to express my mood.
                Taking a moment and sit down to play a song will make me calm
                and peaceful. Life is joyous and complex; why not enjoy a moment
                that only belongs to me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
