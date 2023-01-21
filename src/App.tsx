import Skills from "./components/Skills/Skills";
import Card from "./components/UI/RotateCard/RotateCard";
import Handle from "./components/UI/switch/Handle";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/About_me/AboutMe";
import Contact from "./components/contact/Contact";
import "./App.css";
import NavigationBar from "./components/Navigation_Bar/NavigationBar";
import { RootState, useAppSelector, useAppDispatch } from "./store";

function App() {
  const tabs = (s: RootState) => s.select_nav;
  const currentTabs = useAppSelector(tabs).tab;
  const dayNightMode = (s: RootState) => s.day_night_mode;
  const currentMode = useAppSelector(dayNightMode);
  //::想办法让他们重叠在一起
  return (
    <>
      <main
        className={
          currentMode.isDay ? "main_container light" : "main_container"
        }
      >
        <Handle />
        <div className="border">
          <NavigationBar />
          <div className={currentTabs === "Home" ? "container" : "bye"}>
            <h1>Home</h1>
          </div>
          <div className={currentTabs === "about_me" ? "container" : "bye"}>
            <AboutMe />
          </div>
          <div className={currentTabs === "portfolio" ? "container" : "bye"}>
            <Portfolio />
          </div>
          <div className={currentTabs === "skill" ? "container" : "bye"}>
            <Skills />
          </div>
          <div className={currentTabs === "contact" ? "container" : "bye"}>
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
