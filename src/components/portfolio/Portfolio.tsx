import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import Header from "../UI/Header/Header";
import { useSwipeable } from "react-swipeable";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";
import "./portfolio.css";
interface propsItem {
  children: React.ReactNode;
}
const Item = ({ children }: propsItem) => {
  return (
    <div className="card" id="someid">
      {children}
      {/* <img /> */}
    </div>
  );
};
const Portfolio = ({ children }: any) => {
  const [activeCard, setActiveCard] = useState(0); //从中间开始
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveCard(newIndex);
  };
  const handleSwipe = useSwipeable({
    onSwipedLeft: () => updateIndex(activeCard + 1),
    onSwipedRight: () => updateIndex(activeCard - 1),
  });
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeCard + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="portfolio_container">
      <Header subTitle="wanna see my works?" mainTitle="Portfolio" />
      <div
        {...handleSwipe}
        className="cards_container"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="card_box"
          style={{
            transform: `translateZ(-700px) rotateY(-${activeCard * 72}deg)`,
          }}
        >
          {React.Children.map(children, (child) => {
            return React.cloneElement(child);
          })}
        </div>
      </div>
      <div className="indicators">
        <MdArrowLeft
          className={activeCard == 0 ? "prev noClick" : "prev"}
          onClick={() => {
            updateIndex(activeCard - 1);
          }}
        />

        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={index === activeCard ? "active" : ""}
              onClick={() => updateIndex(index)}
            ></div>
          );
        })}

        <MdArrowRight
          className={
            activeCard == React.Children.count(children) - 1
              ? "next noClick"
              : "next"
          }
          onClick={() => {
            updateIndex(activeCard + 1);
          }}
        />
      </div>
    </div>
  );
};
const Carousel = () => {
  const data = [
    {
      id: 1,
      image: (
        <AiFillWechat
          color="white"
          className="card_side front"
          style={{ background: "#121212" }}
        />
      ),
      title: "UniDiy",
      description: "Wechat base applet",
      demo: "https://unidiy-image-editor.weivee.com/",
    },
    {
      id: 2,
      image: "/onebook.png",
      title: "ONE BOOK",
      description:
        "An In progress online Chinese fiction reading website. Tech stack including React Typescript Axio API SCSS",
      github: "https://github.com/Kaminopapa/OneBook",
      demo: "https://one-book.netlify.app/",
    },
    {
      id: 3,
      image: "/mileyLogo.png",
      title: "Miley Design",
      description:
        "A portfolio website built for a graphic designer. Tech stack including React.js CSS3",
      github: "https://github.com/Kaminopapa/MileyDesignn",
      demo: "https://kaminopapa.github.io/MileyDesignn/",
    },

    {
      id: 4,
      image: "/ven2.jpg",
      title: "Welcome to Venezuela",
      description: "HTML5 CSS3 JavaScript",
      github: "https://github.com/Kaminopapa/Kaminopapa.github.io",
      demo: "https://kaminopapa.github.io/",
    },

    {
      id: 5,
      image: "/course.jpg",
      title: "MERN Project",
      description:
        "Registration system simulation allows users login with different roles doing different actions. Tech stack including React.js express.js MongoDB JWT",
      github: "https://github.com/Kaminopapa/CourseResgister",
      demo: "https://studynet.netlify.app/",
    },
  ];

  return (
    <Portfolio>
      {data.map((item) => {
        return (
          <Item key={"p" + item.id}>
            <Card
              image={item.image}
              github={item.github}
              demo={item.demo}
              title={item.title}
              description={item.description}
            />
          </Item>
        );
      })}
    </Portfolio>
  );
};
export default Carousel;
