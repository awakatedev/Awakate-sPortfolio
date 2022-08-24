import { useState, useEffect, memo, useMemo } from 'react';

function StyledTag(prop) {
  const [index, setIndex] = useState(1);
  const colors = useMemo(() => {
    const colorsMemo = [
      ['from-purple-600 to-blue-500', 'shadow-blue-500'],
      ['from-pink-500 to-orange-400', 'shadow-pink-500'],
      ['from-green-400 to-blue-600', 'shadow-green-400'],
      ['from-purple-500 to-pink-500', 'shadow-purple-500'],
    ];
    return colorsMemo;
  }, []);

  const [color, setColor] = useState(colors[0][0]);
  const [shadow, setShadow] = useState(colors[0][1]);
  const { type, children, additionalStyle } = prop;

  useEffect(() => {
    const setExtraClass = () => {
      switch (index) {
        case 0:
          setColor(colors[1][0]);
          setShadow(colors[1][1]);
          break;
        case 1:
          setColor(colors[2][0]);
          setShadow(colors[2][1]);
          break;
        case 2:
          setColor(colors[3][0]);
          setShadow(colors[3][1]);
          break;
        case 3:
          setColor(colors[0][0]);
          setShadow(colors[0][1]);
          break;
        default:
          setColor(colors[0][0]);
          setShadow(colors[0][1]);
      }

      // Changes every 2 seconds
      setTimeout(() => {
        switch (index) {
          case 0:
            setIndex(1);
            break;
          case 1:
            setIndex(2);
            break;
          case 2:
            setIndex(3);
            break;
          case 3:
            setIndex(0);
            break;
          default:
            setIndex(0);
        }
      }, 2000);
    };
    setExtraClass(index);
  }, [index, colors]);

  if (type === 'h1') {
    return (
      <h1
        className={`bg-gradient-to-br text-center font-inter text-6xl duration-700 ease-in lg:text-4xl sp:text-9xl ${color} ${additionalStyle}`}
      >
        {children}
      </h1>
    );
  }
  if (type === 'h2') {
    return (
      <h2
        className={`text-center font-inter text-5xl font-bold text-primary lg:text-4xl sp:text-8xl  ${additionalStyle}`}
      >
        {children}
      </h2>
    );
  }
  if (type === 'h3') {
    return (
      <h2
        className={`text-center font-inter text-3xl font-bold text-primary lg:text-4xl sp:text-5xl  ${additionalStyle}`}
      >
        {children}
      </h2>
    );
  }
  if (type === 'p') {
    return (
      <p className={`font-inter text-2xl text-textGray ${additionalStyle}`}>
        {children}
      </p>
    );
  }
  if (type === 'li') {
    return (
      <li
        className={`font-inter text-xl text-textGray hover:text-primary ${additionalStyle}`}
      >
        {children}
      </li>
    );
  }
  if (type === 'button') {
    return (
      <span
        type="button"
        className={`bg-gradient-to-br text-xl duration-700 ease-in ${shadow} ${color}  ${additionalStyle}`}
      >
        {children}
      </span>
    );
  }
  if (type === 'div') {
    return (
      <div
        className={`bg-gradient-to-br text-xl duration-700 ease-in  ${color}  ${additionalStyle}`}
      >
        {children}
      </div>
    );
  }
}
export default memo(StyledTag);
