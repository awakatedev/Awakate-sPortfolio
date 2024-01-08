import { TagCloud } from 'react-tagcloud';

const data = [
  { value: 'GraphQl', count: 25 },
  { value: 'Tailwind.css', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React.js', count: 30 },
  { value: 'Figma', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'Webpack', count: 22 },
  { value: 'Babel.js', count: 7 },
  { value: 'Jest', count: 15 },
  { value: 'Wordpress', count: 17 },
  { value: 'Sass', count: 27 },
  { value: 'Styled Components', count: 30 },
  { value: 'Next.js', count: 15 },
  { value: 'NPM', count: 11 },
  { value: 'AWS', count: 11 },
  { value: 'Linux', count: 11 },
  { value: 'Docker', count: 8 },
  { value: 'Nest.js', count: 15 },
  { value: 'React Native', count: 15 },
  { value: 'Typescript', count: 15 },
  { value: 'Wireguard', count: 15 },
  { value: 'Bash  &  Shell', count: 15 },
  { value: 'Yarn', count: 15 },
  { value: 'Prisma', count: 15 },
  { value: 'MySQL', count: 15 },
  { value: 'MongoDB', count: 15 },
  { value: 'Cloud Architecture', count: 15 },
  { value: 'PHP', count: 15 },
  { value: 'AXIOS', count: 15 },
  { value: 'React Query', count: 15 },
  { value: 'Reducers', count: 15 },
  { value: 'Redis', count: 15 },
  { value: 'Digital Ocean', count: 15 },
  { value: 'Hacking', count: 15 },
  { value: 'UX', count: 15 },
  { value: 'UI', count: 15 },
];

const options = {
  luminosity: 'light',
  hue: 'blue',
};

const tagGlobe = () => {
  return (
    <TagCloud
      className=" w-full"
      minSize={18}
      maxSize={45}
      colorOptions={options}
      tags={data}
    />
  );
};
export default tagGlobe;
