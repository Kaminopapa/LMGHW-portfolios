import Skills from "./components/Skills/Skills";
import Card from "./components/UI/RotateCard/RotateCard";

import AboutMe from "./components/About_me/AboutMe";
import "./App.css";
import NavigationBar from "./components/Navigation_Bar/NavigationBar";
import { RootState, useAppSelector, useAppDispatch } from "./store";

function App() {
  const tabs = (s: RootState) => s.select_nav;
  const currentTabs = useAppSelector(tabs).tab;
  //::想办法让他们重叠在一起
  return (
    <>
      <main className="main_container">
        <div className="border">
          <NavigationBar />
          <div className={currentTabs === "Home" ? "container" : "bye"}>
            <h1>Home</h1>
          </div>
          <div className={currentTabs === "about_me" ? "container" : "bye"}>
            <AboutMe />
          </div>
          <div className={currentTabs === "portfolio" ? "container" : "bye"}>
            <h1>portfolio</h1>
          </div>
          <div className={currentTabs === "skill" ? "container" : "bye"}>
            <Skills />
          </div>
          <div className={currentTabs === "contact" ? "container" : "bye"}>
            <Card />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
