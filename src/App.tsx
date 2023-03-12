import Skills from './components/Skills/Skills';
import Home from './components/Home/Home';
import Handle from './components/UI/switch/Handle';
import Portfolio from './components/portfolio/Portfolio';
import AboutMe from './components/About_me/AboutMe';
import Contact from './components/contact/Contact';
import './App.css';
import NavigationBar from './components/Navigation_Bar/NavigationBar';
import { RootState, useAppDispatch, useAppSelector } from './store';
import Loading from './components/UI/IntroAnime/loading/Loading';
import { useEffect, useState } from 'react';
import { selectTab } from './store/navSlice';
import Modal from './components/UI/Modal/Modal';
import { RiArrowUpDownFill } from 'react-icons/ri';

function App() {
  const tabs = (s: RootState) => s.selectNav;
  const currentTabs = useAppSelector(tabs).tab;
  const dayNightMode = (s: RootState) => s.dayNightMode;
  const currentMode = useAppSelector(dayNightMode);
  const dispatch = useAppDispatch();
  const [showModal, setModal] = useState(true);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const navOptions = ['Home', 'about_me', 'portfolio', 'skill', 'contact'];
      const currentIndex = navOptions.indexOf(currentTabs);
      if (event.key === 'ArrowUp' && currentIndex > 0) {
        dispatch(selectTab(navOptions[currentIndex - 1]));
      } else if (event.key === 'ArrowDown' && currentIndex < navOptions.length - 1) {
        dispatch(selectTab(navOptions[currentIndex + 1]));
      } else if (event.key == 'Enter') {
        setModal(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentTabs, dispatch]);
  return (
    <>
      {showModal && (
        <Modal>
          <div className='tips'>
            <RiArrowUpDownFill className='arrow' aria-label='arrow up down' />
            <p>Use arrow up and down to navigate the page</p>
            <button onClick={() => setModal(false)}>OK</button>{' '}
          </div>
        </Modal>
      )}
      <main className={currentMode.isDay ? 'main_container light' : 'main_container'}>
        <Loading />
        <Handle />
        <div className='border'>
          <NavigationBar />
          <div className={currentTabs === 'Home' ? 'container' : 'container_off'}>
            <Home />
          </div>
          <div className={currentTabs === 'about_me' ? 'container' : 'container_off'}>
            <AboutMe />
          </div>
          <div className={currentTabs === 'portfolio' ? 'container' : 'container_off'}>
            <Portfolio />
          </div>
          <div className={currentTabs === 'skill' ? 'container' : 'container_off'}>
            <Skills />
          </div>
          <div className={currentTabs === 'contact' ? 'container' : 'container_off'}>
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
