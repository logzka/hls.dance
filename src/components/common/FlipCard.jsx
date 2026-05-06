import React from 'react';
import { FlipContext } from '../../context/flip.context';
// import { useMediaQuery } from 'usehooks-ts';
import { useSpring, a } from '@react-spring/web';

const FlipCard = ({
  className = 'w-full h-[440px]',
  index,
  frontChild,
  backChild,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const { flipped, setFlipped } = React.useContext(FlipContext);
  const [timers] = React.useState([]);
  // const size = useMediaQuery('(min-width: 1025px)') ? 'medium' : 'small';

  const flippedCurrent = React.useRef(flipped);
  React.useEffect(() => {
    flippedCurrent.current = flipped;
    setIsFlipped(flipped.includes(index));
  }, [flipped, index]);

  const flipCard = (index) => {
    clearTimeout(timers[index]);
    timers[index] = undefined;
    if (flipped.includes(index)) return;
    setFlipped([...flippedCurrent.current, index]);
  };

  const flipBack = (index) => {
    if (!flipped.includes(index)) return;
    setFlipped(flippedCurrent.current.filter((el) => el !== index));
  };

  const flipCardBack = (index) => {
    if (timers[index]) return;
    if (!flipped.includes(index)) return;
    timers[index] = setTimeout(() => {
      flipBack(index);
    }, 2000);
  };
  const { transform } = useSpring({
    transform: `perspective(1000px) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div
      role='button'
      aria-label="Перевернуть карточку"
      tabIndex={index}
      className={`flip-card relative z-20 cursor-pointer ${className}`}
      onMouseEnter={() => flipCard(index)}
      onMouseLeave={() => flipCardBack(index)}
      onKeyDown={() => flipCard(index)}
    >
      <a.div
        style={{ transformStyle: 'preserve-3d', transform }}
        className={`flip-card__inner relative w-full h-full`}
      >
        <div
          className="flip-card__back w-full h-full"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >{backChild}</div>
        <div
          className="flip-card__front absolute z-10 w-full h-full top-0 left-0"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >{frontChild}</div>
      </a.div>
    </div>
  );
};

export default FlipCard;
