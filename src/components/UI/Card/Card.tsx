import React, { useState } from 'react';
import { IoIosConstruct } from 'react-icons/io';
import { AiFillCheckCircle } from 'react-icons/ai';
import './card.css';
interface cardProps {
  image: string | React.ReactNode;
  demo: string;
  github?: string;
  title: string;
  description?: string;
  inProgress: boolean;
}
const Card = ({ image, demo, github, title, description, inProgress }: cardProps) => {
  const [show, setShow] = useState(false); // mobile rotate

  return (
    <div
      className='card_content'
      onTouchEnd={() => setShow(!show)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {' '}
      {typeof image === 'string' && (
        <img
          src={image}
          alt=''
          className='card_side front'
          style={show ? { transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' } : {}}
        />
      )}
      {typeof image !== 'string' && image}
      <div
        className='card_side back'
        style={
          show
            ? {
                transform: 'rotateY(0deg)',
                opacity: 1,
              }
            : {}
        }
      >
        <div className='badge'>
          {inProgress ? (
            <IoIosConstruct color='orange' />
          ) : (
            <AiFillCheckCircle color='lightGreen' />
          )}
        </div>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className='link_group'>
          {github && (
            <a href={github} className='btn' target='_blank' rel='noreferrer'>
              Github
            </a>
          )}

          <a href={demo} className='btn btn_primary' target='_blank' rel='noreferrer'>
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
