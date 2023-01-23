import React, { useState } from "react";

import Header from "../UI/Header/Header";

import "./portfolio.css";
const Portfolio = () => {
  const [selected, setSelected] = useState(0);
  const position = (val: number) => {
    return { "--j": `${val}%` } as React.CSSProperties;
  };
  let k = ["a", "b", "c", "d"];
  let name = ["card active", "card left", "card right"];

  const handleSelected = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelected(index);
    const target = e.target as Element;
    console.log(target.classList);
    const b = document.getElementsByClassName("card active");
    console.log(b);
  };

  //::数组顺序调换，点击一个，就是Active
  const s = [
    { item: <div className="card right">a</div>, id: "a1" },
    { item: <div className="card back">b</div>, id: "a1" },
    { item: <div className="card active">c</div>, id: "a1" },
    { item: <div className="card left">d</div>, id: "a1" },
  ];
  return (
    <div className="portfolio_container">
      <Header subTitle="wanna see my works?" mainTitle="Portfolio" />
      <div className="cards_container">
        {k.map((item) => {
          return (
            <div
              key={k.indexOf(item)}
              className={
                k.indexOf(item) === selected
                  ? "card active"
                  : `${name[Math.floor(Math.random() * (0 - 3)) + 3]}`
              }
              onClick={(e) => handleSelected(e, k.indexOf(item))}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
