import React, { useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import Header from '../UI/Header/Header';
import { useSwipeable } from 'react-swipeable';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';

import './portfolio.css';
interface propsItem {
  children: React.ReactNode;
}
const Item = ({ children }: propsItem) => {
  return (
    <div className='card' id='someid'>
      {children}
    </div>
  );
};
const Portfolio = ({ children }: any) => {
  const [activeCard, setActiveCard] = useState(0); // start from the middle
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveCard(newIndex);
  };
  const handleSwipe = useSwipeable({
    onSwipedLeft: () => updateIndex(activeCard + 1),
    onSwipedRight: () => updateIndex(activeCard - 1),
  });
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeCard + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className='portfolio_container'>
      <Header subTitle='My Recent Works' mainTitle='Portfolios' />
      <div
        {...handleSwipe}
        className='cards_container'
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className='card_box'
          style={{
            transform: `translateZ(-700px) rotateY(-${activeCard * 72}deg)`,
          }}
        >
          {React.Children.map(children, (child) => {
            return React.cloneElement(child);
          })}
        </div>
      </div>
      <div className='indicators'>
        <MdArrowLeft
          className={activeCard == 0 ? 'prev un_click' : 'prev'}
          onClick={() => {
            updateIndex(activeCard - 1);
          }}
        />

        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={index === activeCard ? 'active' : ''}
              onClick={() => updateIndex(index)}
            ></div>
          );
        })}

        <MdArrowRight
          className={activeCard == React.Children.count(children) - 1 ? 'next un_click' : 'next'}
          onClick={() => {
            updateIndex(activeCard + 1);
          }}
        />
      </div>
    </div>
  );
};
const Carousel = () => {
  const myWorks = [
    {
      id: 1,
      image: '/DesignA.png',
      title: 'Design A',
      description:
        'An e-commerce plug-in for WeChat with robust features for customized phone cases.',
      demo: 'https://designa-editor.nikola.vip/',
      finished: true,
    },
    {
      id: 2,
      image: '/onebook.png',
      title: 'ONE BOOK',
      description: 'E-book web application built with React and TypeScript. ',
      github: 'https://github.com/Kaminopapa/OneBook',
      demo: 'https://one-book.netlify.app/',
      finished: true,
    },
    {
      id: 3,
      image: '/mileyLogo.png',
      title: 'Miley Design',
      description:
        'Miley &apos; s portfolio website built with ReactJS featuring fully responsive design.',
      github: 'https://github.com/Kaminopapa/MileyDesignn',
      demo: 'https://kaminopapa.github.io/MileyDesignn/',
      finished: false,
    },

    {
      id: 4,
      image: '/ven2.jpg',
      title: 'Welcome to Venezuela',
      description: 'A travel interface about Venezuela.',
      github: 'https://github.com/Kaminopapa/Kaminopapa.github.io',
      demo: 'https://kaminopapa.github.io/',
      finished: false,
    },

    {
      id: 5,
      image: '/course.jpg',
      title: 'MERN Project',
      description: 'A full-stack project offering online courses for teachers and students. ',
      github: 'https://github.com/Kaminopapa/CourseResgister',
      demo: 'https://studynet.netlify.app/',
      finished: false,
    },
  ];

  return (
    <Portfolio>
      {myWorks.map((item) => {
        return (
          <Item key={'p' + item.id}>
            <Card
              image={item.image}
              github={item.github}
              demo={item.demo}
              title={item.title}
              description={item.description}
              inProgress={item.finished}
            />
          </Item>
        );
      })}
    </Portfolio>
  );
};
export default Carousel;
