import { useState, useEffect, memo, useMemo } from 'react';

function StyledTag(prop) {
  const [index, setIndex] = useState(1);
  const colors = useMemo(() => {
    const colorsMemo = [
      ['from-purple-600 to-blue-500', 'shadow-blue-500', 'purple'],
      ['from-pink-500 to-orange-800', 'shadow-red-600', 'salmon'],
      ['from-green-400 to-blue-600', 'shadow-green-700', 'aqua'],
      ['from-purple-500 to-pink-800', 'shadow-purple-500', 'fuchsia'],
    ];
    return colorsMemo;
  }, []);

  const [color, setColor] = useState(colors[0][0]);
  const [shadow, setShadow] = useState(colors[0][1]);
  const [svg, setSvg] = useState(colors[0][2]);
  const { type, children, additionalStyle } = prop;

  useEffect(() => {
    const setExtraClass = () => {
      switch (index) {
        case 0:
          setColor(colors[1][0]);
          setShadow(colors[1][1]);
          setSvg(colors[1][2]);
          break;
        case 1:
          setColor(colors[2][0]);
          setShadow(colors[2][1]);
          setSvg(colors[2][2]);
          break;
        case 2:
          setColor(colors[3][0]);
          setShadow(colors[3][1]);
          setSvg(colors[3][2]);
          break;
        case 3:
          setColor(colors[0][0]);
          setShadow(colors[0][1]);
          setSvg(colors[0][2]);
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
        className={`duration-700 ease-in  bg-gradient-to-br text-justify  md:leading-[120px] font-title  duration-700  fhd:text-9xl hd:text-5xl leading-[80px] from-pink-500 to-orange-800 ${additionalStyle}`}
      >
        {children}
      </h1>
    );
  }
  if (type === 'h2') {
    return (
      <h2
        className={`text-left font-inter font-semibold text-primary lg:text-7xl sp:text-6xl  ${additionalStyle}`}
      >
        {children}
      </h2>
    );
  }
  if (type === 'h3') {
    return (
      <h3
        className={`text-left font-inter font-black text-primary md:text-5xl text-5xl  ${additionalStyle}`}
      >
        {children}
      </h3>
    );
  }
  if (type === 'h4') {
    return (
      <h4
        className={` font-inter text-2xl font-bold text-primary lg:text-2xl sp:text-3xl  ${additionalStyle}`}
      >
        {children}
      </h4>
    );
  }
  if (type === 'h5') {
    return (
      <h5
        className={` font-inter text-xl font-bold text-primary  ${additionalStyle}`}
      >
        {children}
      </h5>
    );
  }
  if (type === 'p') {
    return (
      <p className={`font-inter text-xl text-textGray ${additionalStyle}`}>
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
        className={`bg-gradient-to-br text-xl duration-300 ease-in shadow-red-600 from-pink-500 to-orange-800 ${additionalStyle}`}
      >
        {children}
      </span>
    );
  }
  if (type === 'button2') {
    return (
      <span
        className={`text-xl duration-300 ease-in ${shadow} ${additionalStyle}`}
      >
        {children}
      </span>
    );
  }
  if (type === 'div') {
    return (
      <div
        className={`bg-gradient-to-br text-xl duration-300 ease-in ${shadow} ${color}  ${additionalStyle}`}
      >
        {children}
      </div>
    );
  }
  if (type === 'article') {
    return (
      <article
        className={`rounded-lg border border-textDark bg-blackBg p-6 ${additionalStyle}`}
      >
        {children}
      </article>
    );
  }
  if (type === 'svg') {
    return (
      <svg height="200" width="200">
        <polygon points="100,10 200,9800 10,9800" fill={`${svg}`} />
      </svg>
    );
  }
}
export default memo(StyledTag);
