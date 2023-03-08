import Navigation from "./Navigation";

import { useAppDispatch, RootState, useAppSelector } from "../../store";
import { selectTab } from "../../store/navSlice";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";
import { HiOutlinePhotograph } from "react-icons/hi";
import "./nav.css";

const NavigationBar = () => {
  const dispatch = useAppDispatch();
  const tabs = (s: RootState) => s.select_nav;
  const navSelector = useAppSelector(tabs);
  const currentTabs = navSelector.tab;

  const handleSelection = (name: string) => {
    dispatch(selectTab(name));
  };

  return (
    <nav tabIndex={0}>
      <Navigation
        isActive={currentTabs === "Home"}
        onClick={() => handleSelection("Home")}
        label="Home"
      >
        <AiOutlineHome />
      </Navigation>
      <Navigation
        isActive={currentTabs === "about_me"}
        onClick={() => handleSelection("about_me")}
        label="About me"
      >
        <AiOutlineUser />
      </Navigation>
      <Navigation
        isActive={currentTabs === "portfolio"}
        onClick={() => handleSelection("portfolio")}
        label="portfolio"
      >
        <AiOutlineBook />
      </Navigation>
      <Navigation
        isActive={currentTabs === "skill"}
        onClick={() => handleSelection("skill")}
        label="skill"
      >
        <HiOutlinePhotograph />
      </Navigation>
      <Navigation
        isActive={currentTabs === "contact"}
        onClick={() => handleSelection("contact")}
        label="contact"
      >
        <AiOutlineMessage />
      </Navigation>
    </nav>
  );
};

export default NavigationBar;
