import { TagCloud } from 'react-tagcloud';

const data = [
  { value: 'GraphQl', count: 25 },
  { value: 'Tailwind.css', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Figma', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'Webpack', count: 22 },
  { value: 'Babel.js', count: 7 },
  { value: 'ECMAScript', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'Wordpress', count: 17 },
  { value: 'Sass', count: 27 },
  { value: 'Styled Components', count: 30 },
  { value: 'Next.js', count: 15 },
  { value: 'NPM', count: 11 },
  { value: 'AWS', count: 11 },
  { value: 'Linux', count: 11 },
];

const options = {
  luminosity: 'light',
  hue: 'blue',
};

const tagGlobe = () => {
  return (
    <TagCloud
      className=" w-full"
      minSize={12}
      maxSize={35}
      colorOptions={options}
      tags={data}
    />
  );
};
export default tagGlobe;
