import { BsLinkedin } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./social.css";
const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/lmghw" target="_blank">
        <BsLinkedin className="socialIcon" />
      </a>
      <a href="https://github.com/Kaminopapa" target="_blank">
        <FaGithubAlt className="socialIcon" />
      </a>
      <a href="https://www.instagram.com/gantzmiguel/" target="_blank">
        <AiFillInstagram className="socialIcon" />
      </a>
    </div>
  );
};

export default Socials;
