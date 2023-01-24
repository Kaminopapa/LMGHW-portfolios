import React, { useState } from "react";

import Header from "../UI/Header/Header";

import "./portfolio.css";
interface propsItem {
  children: React.ReactNode;
  degree?: number;
}
const Item = ({ children, degree }: propsItem) => {
  return (
    <div className="card">
      {children}
      {/* <img /> */}
    </div>
  );
};
const Portfolio = ({ children }: any) => {
  const [activeCard, setActiveCard] = useState(2); //从中间开始
  const deg = [0, 120, 240, 480, 960];
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
      // newIndex = deg[newIndex];
    }

    setActiveCard(newIndex);
    console.log(activeCard);
  };

  return (
    <div className="portfolio_container">
      <Header subTitle="wanna see my works?" mainTitle="Portfolio" />
      <div className="cards_container">
        <div
          className="card_box"
          style={{
            transform: `translateZ(-700px) rotateY(-${activeCard * 40}deg)`,
          }}
        >
          {React.Children.map(children, (child) => {
            return React.cloneElement(child);
          })}
        </div>
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeCard - 1);
          }}
        >
          prev
        </button>
        {React.Children.map(children, (child, index) => {
          console.log(child);
          return (
            <button onClick={() => updateIndex(index)}>{index + 1}</button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeCard + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};
const Carousel = () => {
  return (
    <Portfolio>
      <Item>
        <img src="/test0 (1).jpg" />
      </Item>
      <Item>
        <img src="/test0 (2).jpg" />
      </Item>
      <Item>
        <img src="/test0 (3).jpg" />
      </Item>
      <Item>
        <img src="/test0 (4).jpg" />
      </Item>
      <Item>
        <img src="/test0 (5).jpg" />
      </Item>
    </Portfolio>
  );
};
export default Carousel;
