import "./skill.css";
import { RiVuejsLine } from "react-icons/ri";
import { FaLaravel, FaGithub, FaFigma, FaPhp, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { IoLogoJavascript, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import React, { useState } from "react";
import Header from "../UI/Header/Header";

import { MdOutlineVisibility } from "react-icons/md";
const Skills = () => {
  const [active, setActive] = useState(1);
  const position = (val: number) => {
    return { "--i": val } as React.CSSProperties;
  };
  const handleActive = (id: number) => {
    const activeElement = icons.find((item) => item.id === id);
    activeElement && setActive(id);
  };
  const icons = [
    {
      id: 1,
      logo: <FaGithub color="#F51212" className="logo" />,
      name: "See my jobs",
      links: [{ name: "github", url: "https://github.com/Kaminopapa" }],
    },
    {
      id: 2,
      logo: <FaLaravel color="#F22B1D" className="logo" />,
      name: "Laravel",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com" },
      ],
    },
    {
      id: 3,
      logo: <SiNextdotjs color="gray" className="logo" />,
      name: "Next.js",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com" },
      ],
    },
    {
      id: 4,
      logo: <IoLogoJavascript color="yellow" className="logo" />,
      name: "JavaScript",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com" },
        { name: "Welcome to Venezuela", url: "https://kaminopapa.github.io/" },
      ],
    },
    {
      id: 5,
      logo: <IoLogoCss3 color="blue" className="logo" />,
      name: "CSS",
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
      logo: <IoLogoNodejs color="lightGreen" className="logo" />,
      name: "Node.js",
      links: [{ name: "One Book", url: "https://one-book.netlify.app/" }],
    },
    {
      id: 7,
      logo: <FaFigma color="pink" className="logo" />,
      name: "Figma",
      links: [{ name: "figma", url: "" }],
    },
    {
      id: 8,
      logo: <SiRedux color="purple" className="logo" />,
      name: "redux",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com" },
        { name: "One Book", url: "https://one-book.netlify.app/" },
      ],
    },
    {
      id: 9,
      logo: <FaPhp color="purple" className="logo" />,
      name: "PhP",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com" },
      ],
    },
    {
      id: 10,
      logo: <FaReact color="lightblue" className="logo" />,
      name: "React",
      links: [
        { name: "One Book", url: "https://one-book.netlify.app/" },
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com" },
        {
          name: "Miley Deign",
          url: "https://kaminopapa.github.io/MileyDesignn/",
        },
        { name: "Course Resgister", url: "https://studynet.netlify.app/" },
      ],
    },
    {
      id: 11,
      logo: <SiTypescript color="lightblue" className="logo" />,
      name: "TypeScript",
      links: [
        { name: "Unidiy", url: ' "https://unidiy-image-editor.weivee.com"' },
        { name: "One Book", url: "https://one-book.netlify.app/" },
      ],
    },
    {
      id: 12,
      logo: <RiVuejsLine color="green" className="logo" />,
      name: "Vue.js",
      links: [
        { name: "Unidiy", url: "https://unidiy-image-editor.weivee.com" },
      ],
    },
  ];
  const other = icons.map((item, index = 1) => {
    return (
      <div
        className={item.id == active ? "contentBX active" : "contentBX"}
        id={`content${index}`}
        key={"s" + item.id}
      >
        <div className="card">
          <div className="icon_box">{item.logo}</div>
          <div className="textBx">
            {/* <h2>{item.name}</h2> */}
            <ul className="sci">
              {item.links.map((link) => (
                <li key={crypto.randomUUID()}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <MdOutlineVisibility />
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
    <div className="bg ">
      <Header subTitle="What Skills I Have" mainTitle="My Experiences" />
      <div className="iconContainer">
        <div className="icon_bg">
          <div className="icon">
            {icons.map((icon, index = 1) => {
              return (
                <div
                  className={
                    icon.id === active ? "icon_box active" : "icon_box"
                  }
                  style={position(index)}
                  key={icon.id}
                  onClick={() => handleActive(icon.id)}
                  data-id={`content${index}`}
                  onMouseEnter={() => handleActive(icon.id)}
                >
                  {icon.logo}
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
