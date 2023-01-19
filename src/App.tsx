import Skills from "./components/Skills/Skills";
import Card from "./components/UI/RotateCard/RotateCard";
import Navigation from "./components/Navigation_Bar/Navigation";
import AboutMe from "./components/About_me/AboutMe";
import "./App.css";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("skill");
  //::想办法让他们重叠在一起
  return (
    <main className="main_container">
      <div>
        <Navigation isActive={tab === "skill"} onClick={() => setTab("skill")}>
          Skill
        </Navigation>
        <Navigation isActive={tab === "card"} onClick={() => setTab("card")}>
          card
        </Navigation>
        <Navigation
          isActive={tab === "about_me"}
          onClick={() => setTab("about_me")}
        >
          card
        </Navigation>
      </div>

      <div className={tab === "skill" ? "container" : "bye"}>
        <Skills />
      </div>
      <div className={tab === "card" ? "container" : "bye"}>
        <Card />
      </div>
      <div className={tab === "about_me" ? "container" : "bye"}>
        <AboutMe />
      </div>
    </main>
  );
}

export default App;
