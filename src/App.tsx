import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";
import Handle from "./components/UI/switch/Handle";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/About_me/AboutMe";
import Contact from "./components/contact/Contact";
import "./App.css";
import NavigationBar from "./components/Navigation_Bar/NavigationBar";
import { RootState, useAppSelector } from "./store";
import Loading from "./components/UI/IntroAnime/loading/Loading";

function App() {
  const tabs = (s: RootState) => s.select_nav;
  const currentTabs = useAppSelector(tabs).tab;
  const dayNightMode = (s: RootState) => s.day_night_mode;
  const currentMode = useAppSelector(dayNightMode);

  return (
    <>
      <main
        className={
          currentMode.isDay ? "main_container light" : "main_container"
        }
      >
        <Loading />
        <Handle />
        <div className="border">
          <NavigationBar />
          <div
            className={currentTabs === "Home" ? "container" : "container_off"}
          >
            <Home />
          </div>
          <div
            className={
              currentTabs === "about_me" ? "container" : "container_off"
            }
          >
            <AboutMe />
          </div>
          <div
            className={
              currentTabs === "portfolio" ? "container" : "container_off"
            }
          >
            <Portfolio />
          </div>
          <div
            className={currentTabs === "skill" ? "container" : "container_off"}
          >
            <Skills />
          </div>
          <div
            className={
              currentTabs === "contact" ? "container" : "container_off"
            }
          >
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
