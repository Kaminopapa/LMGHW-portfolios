import './home.css';
import IntroAnime from '../UI/IntroAnime/IntroAnime';
import { useAppDispatch } from '../../store';
import { selectTab } from '../../store/navSlice';

import Scene from '../UI/Avatar/AvatarScene';
import Socials from '../UI/Social/Social';

const Home = () => {
  const dispatch = useAppDispatch();
  const toContact = () => {
    dispatch(selectTab('contact'));
  };
  return (
    <div className='home_container'>
      <div className='avatar'>
        <Scene />
      </div>
      <div className='name_container'>
        <IntroAnime />
        <div className='cta'>
          <a className='btn' onClick={toContact} tabIndex={0}>
            contact
          </a>
          <a href='/CV.pdf' download className='btn btn_primary' tabIndex={0}>
            Download CV
          </a>
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Home;
