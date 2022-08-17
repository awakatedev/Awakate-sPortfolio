import { forEach } from 'lodash';
import { useState, useEffect } from 'react';

function StyledTag(prop) {
  const [color, setColor] = useState('from-purple-600 to-blue-500');
  const [shadow, setShadow] = useState('shadow-blue-500');
  const { type, children, additionalStyle } = prop;

  useEffect(() => {
    const colors = [
      ['from-purple-600 to-blue-500', 'shadow-blue-500'],
      ['from-pink-500 to-orange-400', 'shadow-pink-500'],
      ['from-green-400 to-blue-600', 'shadow-green-400'],
      ['from-purple-500 to-pink-500', 'shadow-purple-500'],
    ];

    
      setTimeout(() => {
        colors.forEach((e) => {
          color !== e[0] ? setColor(e[0]) || setShadow(e[1]) : setColor('from-purple-600 to-blue-500') || setShadow('shadow-blue-500');
        
      }) 
      }, 2000);
   
  },);

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
        className={`text-1xl font-inter text-textGray hover:text-primary ${additionalStyle}`}
      >
        {children}
      </li>
    );
  }
  if (type === 'button') {
    return (
      <button
        className={`bg-gradient-to-br text-xl duration-700 ease-in ${shadow} ${color}  ${additionalStyle}`}
      >
        {children}
      </button>
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
export default StyledTag;
