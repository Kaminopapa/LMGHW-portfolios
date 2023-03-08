import { BsLinkedin } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./social.css";
const Socials = () => {
  return (
    <div className="header__socials">
      <a
        tabIndex={0}
        href="https://www.linkedin.com/in/lmghw"
        target="_blank"
        arial-label="linkedin"
      >
        <BsLinkedin className="socialIcon" />
      </a>
      <a
        tabIndex={0}
        href="https://github.com/Kaminopapa"
        target="_blank"
        arial-label="github"
      >
        <FaGithubAlt className="socialIcon" />
      </a>
      <a
        tabIndex={0}
        href="https://www.instagram.com/gantzmiguel/"
        target="_blank"
        arial-labe="instagram"
      >
        <AiFillInstagram className="socialIcon" />
      </a>
    </div>
  );
};

export default Socials;
