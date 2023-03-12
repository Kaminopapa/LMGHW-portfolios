import { useState } from 'react';
import './handle.css';
import { useAppDispatch } from '../../../store';
import { toggleMode } from '../../../store/dayNightSlice';
const Handle = () => {
  const dispatch = useAppDispatch();

  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
    dispatch(toggleMode(active));
  };

  return <div onClick={handleActive} className={active ? 'handle on' : 'handle'}></div>;
};

export default Handle;
