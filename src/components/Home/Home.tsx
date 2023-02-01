import "./home.css";
import IntroAnime from "../UI/IntroAnime/IntroAnime";
import { useAppDispatch } from "../../store";
import { selectTab } from "../../store/navSlice";
import CV from "/CV.pdf";
const Home = () => {
  const dispatch = useAppDispatch();

  const toContact = () => {
    dispatch(selectTab("contact"));
  };
  return (
    <div className="home_container">
      <IntroAnime />
      <div className="cta">
        <a className="btn" onClick={toContact}>
          contact
        </a>
        <a href={CV} download className="btn btn_primary">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
