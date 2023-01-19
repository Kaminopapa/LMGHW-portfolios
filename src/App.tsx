import Skills from "./components/Skills/Skills";
import Card from "./components/UI/RotateCard/RotateCard";
import Navigation from "./components/Navigation_Bar/Navigation";
import "./App.css";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("skill");

  return (
    <>
      <div>
        <Navigation isActive={tab === "skill"} onClick={() => setTab("skill")}>
          Skill
        </Navigation>
        <Navigation isActive={tab === "card"} onClick={() => setTab("card")}>
          card
        </Navigation>
      </div>

      {tab === "skill" && <Skills />}
      {tab === "card" && <Card />}
    </>
  );
}

export default App;
