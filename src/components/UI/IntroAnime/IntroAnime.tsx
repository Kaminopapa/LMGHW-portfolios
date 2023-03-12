import React, { useState, useEffect, useRef } from 'react';
import './anime.css';

const IntroAnime: React.FC = () => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = animationRef.current;
    if (!node) return;
    const handleAnimationEnd = () => setAnimationFinished(true);
    node.addEventListener('animationend', handleAnimationEnd);
    return () => {
      node.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <div className='intro_animation'>
      <h1 className='my_name'>Luis Hung</h1>
      <div className='short_intro'>
        <p>A developer who,</p>
        <h3>
          judge a book by it&apos;s <span>cover</span>...
        </h3>
      </div>

      {!animationFinished && <h1 ref={animationRef} className='hello'></h1>}
    </div>
  );
};

export default IntroAnime;
