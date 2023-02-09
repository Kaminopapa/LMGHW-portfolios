import Header from "../UI/Header/Header";
import "./aboutme.css";
import { FaAward } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useAppDispatch } from "../../store";
import { selectTab } from "../../store/navSlice";
import { FaConnectdevelop, FaGuitar } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { MdSnowboarding } from "react-icons/md";
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

        <div className="about_intro">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Langara College</h5>
              <small>Computer Studies</small>
            </div>
            <div className="about_card">
              <BiCodeCurly className="about_icon" />
              <h5>Coding Experiences</h5>
              <small>3+years</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ projects</small>
            </div>
          </div>
          <p>
            Heellooo~ This is Luis from Venezuela.
            <br />
            When I first printed Hello World, I was fascinated by Software
            development. But my career in Software Development was never just a
            job. It was always an opportunity to learn and improve my skill
            sets. I have always been a person full of fantasies, and all kinds
            of thoughts often come into my mind. Now, these ideas have a chance
            to be seen by everyone -{">"} Encode them into the real world! This
            is what I have always wanted to do and what I am doing.
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
            <MdSnowboarding className="about_icon" />
            <div className="todo">
              <h3>Snowboarding</h3>
              <p>
                As a beginner snowboarder in the 2022 season, I come from a
                tropical background with limited exposure to the sport. However,
                I was determined to break out of my comfort zone and experience
                new adventures. I wanted my life to be full of possibilities,
                and snowboarding seemed like the perfect opportunity to pursue a
                new challenge and dream. So, I took the leap and started my
                journey on the slopes, eager to explore the wonders of winter
                sports
              </p>
            </div>
          </div>
          <div className="todos">
            <FaGuitar className="about_icon" />
            <div className="todo">
              <h3>Play Guitar</h3>
              <p>
                As a guitar enthusiast, my ten-year journey of playing the
                instrument has been a beautiful expression of my emotions. Each
                time my left hand masterfully presses down the strings, creating
                melodic scales, and my right hand gracefully strums chords, a
                sense of tranquillity washes over me. Life may be filled with
                both joy and complexity, but in these moments with my guitar, I
                find solace and peace. My love for music shines through, and I
                approach life's complexities with courage and grace. My music is
                a reminder that amidst the complexities of life, there is always
                beauty to be found.
              </p>
            </div>
          </div>

          <div className="todos">
            <CgGym className="about_icon" />
            <div className="todo">
              <h3>GYM</h3>
              <p>
                Although the temporary discomfort of working out may not seem
                appealing, the process of pushing beyond your limits and
                transforming my body is truly inspirational. Every time I break
                through a personal barrier and see my body becoming stronger and
                more defined, I am celebrating the power of the human spirit. By
                embracing discipline and dedicating myself to my workout
                routine, I have taken control of my mind and body and elevated
                my soul to new heights. My determination and commitment to
                self-improvement serve as a source of inspiration, reminding me
                that with hard work and perseverance, anything is possible. Keep
                chasing my dreams and never give up on my quest for a healthier
                and happier life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
