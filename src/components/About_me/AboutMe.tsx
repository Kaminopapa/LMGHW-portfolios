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
              <small>CS</small>
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
            When I first printed 'Hello World,' I was immediately captivated by
            the world of software development. For me, programming has never
            been just a job &#8594; it's a calling that allows me to constantly
            learn and enhance my skills. As someone who is always brimming with
            ideas and imagination, I find immense satisfaction in bringing my
            concepts to life through code. The ability to turn my creative
            visions into tangible, real-world solutions is what drives my
            passion for software development, and it's a pursuit that brings me
            endless joy and fulfillment.
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
                Throughout my work experience as a front-end developer at
                Weivee, I honed my skills in React and Vue development, while
                also demonstrating my versatility as a UI/UX designer who can
                craft visually stunning user interfaces. Additionally, I
                contributed to the backend development team by assisting in the
                creation of Restful APIs. My technical knowledge includes
                proficiency in using MySQL for database management, as well as
                DcatAdmin for Laravel administration. I have expertise in using
                HTML and CSS for front-end design, and I am also skilled in
                using Figma for creating high-fidelity wireframes and
                prototypes.
              </p>
            </div>
          </div>
          <div className="todos">
            <MdSnowboarding className="about_icon" />
            <div className="todo">
              <h3>Snowboarding</h3>
              <p>
                As a newcomer to snowboarding in the 2022 season, I came from a
                tropical background with minimal exposure to the sport. Despite
                this, I was determined to step outside of my comfort zone and
                embark on a new adventure. I yearned for a life of endless
                possibilities, and snowboarding presented the perfect
                opportunity to fulfill that dream. Without hesitation, I took
                the plunge and began my journey on the slopes, eager to explore
                the thrill and wonder of winter sports. Through this experience,
                I have discovered an exhilarating new passion and have been
                continuously motivated to improve my skills, embrace new
                challenges, and push beyond my limits.
              </p>
            </div>
          </div>
          <div className="todos">
            <FaGuitar className="about_icon" />
            <div className="todo">
              <h3>Play Guitar</h3>
              <p>
                As a guitar enthusiast, I have spent ten years mastering the
                instrument, using it as a powerful medium to express my
                emotions. While playing guitar with fellow music lovers, I have
                had the opportunity to develop strong social skills, forging
                connections and friendships that have lasted a lifetime. When I
                press down on the strings, creating melodic scales, and strum
                chords with my right hand, a sense of calm and serenity washes
                over me. The beauty of music has allowed me to approach life's
                complexities with courage and grace, reminding me that there is
                always something to be found that is beautiful and worthwhile.
              </p>
            </div>
          </div>

          <div className="todos">
            <CgGym className="about_icon" />
            <div className="todo">
              <h3>GYM</h3>
              <p>
                Working out may not be immediately gratifying, but pushing
                beyond my limits and transforming my body has been truly
                inspirational. By committing to a strict workout routine and
                embracing discipline and self-improvement, I have taken control
                of my mind and body, pushing myself to new heights. Breaking
                through personal barriers has taught me the value of hard work
                and perseverance, and witnessing my body becoming stronger and
                more defined has been incredibly rewarding. My never-give-up
                attitude has allowed me to achieve goals that once seemed
                impossible, and I have cultivated a strong work ethic and
                self-discipline through my unwavering dedication. My drive to
                achieve my goals has served as a source of inspiration, and I am
                committed to maintaining my rigorous and determined approach to
                achieve a healthier and happier life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
