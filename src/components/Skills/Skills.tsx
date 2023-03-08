import "./skill.css";
import { RiVuejsLine } from "react-icons/ri";
import { FaLaravel, FaGithub, FaFigma, FaPhp, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTypescript, SiSass } from "react-icons/si";
import { IoLogoJavascript, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import React, { useState } from "react";
import Header from "../UI/Header/Header";

const Skills = () => {
  const [active, setActive] = useState(1);
  const position = (val: number) => {
    return { "--i": val } as React.CSSProperties;
  };
  const handleActive = (id: number) => {
    const activeElement = skillSet.find((item) => item.id === id);
    activeElement && setActive(id);
  };
  const skillSet = [
    {
      id: 1,
      logo: <FaGithub color="#F51212" className="skill_icon" />,
      name: "See my jobs",
      links: [{ name: "Github", url: "https://github.com/Kaminopapa" }],
    },
    {
      id: 2,
      logo: <FaLaravel color="#F22B1D" className="skill_icon" />,
      name: "Laravel",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com/" },
      ],
    },
    {
      id: 3,
      logo: <SiNextdotjs color="lightgray" className="skill_icon" />,
      name: "Next.js",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com/" },
      ],
    },
    {
      id: 4,
      logo: <IoLogoJavascript color="yellow" className="skill_icon" />,
      name: "JavaScript",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com/" },
        { name: "Welcome to Venezuela", url: "https://kaminopapa.github.io/" },
      ],
    },
    {
      id: 5,
      logo: <SiSass color="pink" className="skill_icon" />,
      name: "Sass",
      links: [
        { name: "One Book", url: "https://one-book.netlify.app/" },
        {
          name: "Miley Deign",
          url: "https://kaminopapa.github.io/MileyDesignn/",
        },
        { name: "Welcome to Venezuela", url: "https://kaminopapa.github.io/" },
      ],
    },
    {
      id: 6,
      logo: <IoLogoNodejs color="lightGreen" className="skill_icon" />,
      name: "Node.js",
      links: [{ name: "One Book", url: "https://one-book.netlify.app/" }],
    },
    {
      id: 7,
      logo: <FaFigma color="pink" className="skill_icon" />,
      name: "Figma",
      links: [
        { name: "Figma", url: "https://unidiy-image-editor.weivee.com/" },
      ],
    },
    {
      id: 8,
      logo: <SiRedux color="purple" className="skill_icon" />,
      name: "redux",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com/" },
        { name: "One Book", url: "https://one-book.netlify.app/" },
      ],
    },
    {
      id: 9,
      logo: <FaPhp color="purple" className="skill_icon" />,
      name: "PhP",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com/" },
      ],
    },
    {
      id: 10,
      logo: <FaReact color="lightblue" className="skill_icon" />,
      name: "React",
      links: [
        { name: "One Book", url: "https://one-book.netlify.app/" },
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com/" },
        {
          name: "Miley Deign",
          url: "https://kaminopapa.github.io/MileyDesignn/",
        },
        { name: "Course Resgister", url: "https://studynet.netlify.app/" },
      ],
    },
    {
      id: 11,
      logo: <SiTypescript color="lightblue" className="skill_icon" />,
      name: "TypeScript",
      links: [
        { name: "Unidiy", url: ' "https://unidiy-image-editor.weivee.com/"' },
        { name: "One Book", url: "https://one-book.netlify.app/" },
      ],
    },
    {
      id: 12,
      logo: <RiVuejsLine color="green" className="skill_icon" />,

      name: "Vue.js",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com/" },
      ],
    },
  ];
  const other = skillSet.map((item, index = 1) => {
    return (
      <div
        className={item.id == active ? "contentBX active" : "contentBX"}
        id={`content${index}`}
        key={"s" + item.id}
      >
        <div className="card">
          <div className="skill_box">{item.logo}</div>
          <div className="textBx">
            <ul className="sci">
              {item.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    title={link.name}
                    tabIndex={0}
                  >
                    {link.name.substring(0, 3)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="skill_container">
      <Header subTitle="What Skills I Have" mainTitle="My Experiences" />
      <div className="icon_container">
        <div className="icon_bg">
          <div className="icons">
            {skillSet.map((skill, index = 1) => {
              return (
                <div
                  className={
                    skill.id === active ? "skill_box active" : "skill_box"
                  }
                  style={position(index)}
                  key={skill.id}
                  onClick={() => handleActive(skill.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleActive(skill.id);
                    }
                  }}
                  data-id={`content${index}`}
                  onMouseEnter={() => handleActive(skill.id)}
                  tabIndex={0}
                >
                  {skill.logo}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="content">{other}</div>
    </div>
  );
};

export default Skills;
