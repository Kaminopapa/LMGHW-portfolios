import "./skill.css";
import { RiVuejsLine } from "react-icons/ri";
import { FaLaravel, FaGithub, FaFigma, FaPhp, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { IoLogoJavascript, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { useState } from "react";

const Skills = () => {
  const [active, setActive] = useState(false);
  const position = (val: number) => {
    return { "--i": val } as React.CSSProperties;
  };

  return (
    <div className="bg">
      <div className="icon_container">
        {active && (
          <div className="icon">
            <div className="icon_box" style={position(1)}>
              <FaGithub color="#F51212" className="logo" />
            </div>
            <div className="icon_box" style={position(2)}>
              <FaLaravel color="#F22B1D" className="logo" />
            </div>
            <div className="icon_box" style={position(3)}>
              <SiNextdotjs color="white" className="logo" />
            </div>
            <div className="icon_box" style={position(4)}>
              <IoLogoJavascript color="yellow" className="logo" />
            </div>
            <div className="icon_box" style={position(5)}>
              <IoLogoCss3 color="blue" className="logo" />
            </div>
            <div className="icon_box" style={position(6)}>
              <IoLogoNodejs color="lightGreen" className="logo" />
            </div>
            <div className="icon_box" style={position(7)}>
              <FaFigma color="pink" className="logo" />
            </div>
            <div className="icon_box" style={position(8)}>
              <SiRedux color="purple" className="logo" />
            </div>
            <div className="icon_box" style={position(9)}>
              <FaPhp color="purple" className="logo" />
            </div>
            <div className="icon_box" style={position(10)}>
              <FaReact color="lightblue" className="logo" />
            </div>
            <div className="icon_box" style={position(11)}>
              <SiTypescript color="lightblue" className="logo" />
            </div>
            <div className="icon_box" style={position(12)}>
              <RiVuejsLine color="green" className="logo" />
            </div>
          </div>
        )}
      </div>

      <div className={active == true ? "content" : "hide"}>
        <img
          src="/me.png"
          alt="me"
          className="me"
          onClick={() => {
            setActive(!active);
          }}
        />
      </div>
    </div>
  );
};

export default Skills;
