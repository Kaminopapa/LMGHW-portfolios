import { BsLinkedin } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import './social.css';
const Socials = () => {
  return (
    <div className='header__socials'>
      <a
        tabIndex={0}
        href='https://www.linkedin.com/in/lmghw'
        target='_blank'
        aria-label='linkedin'
        rel='noreferrer'
      >
        <BsLinkedin className='socialIcon' />
      </a>
      <a
        tabIndex={0}
        href='https://github.com/Kaminopapa'
        target='_blank'
        aria-label='github'
        rel='noreferrer'
      >
        <FaGithubAlt className='socialIcon' />
      </a>
      <a
        tabIndex={0}
        href='https://www.instagram.com/gantzmiguel/'
        target='_blank'
        aria-label='instagram'
        rel='noreferrer'
      >
        <AiFillInstagram className='socialIcon' />
      </a>
    </div>
  );
};

export default Socials;
