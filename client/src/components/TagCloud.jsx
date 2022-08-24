import { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

const myTags = [
  'JavaScript',
  'CSS',
  'HTML',
  'C',
  'C++',
  'React',
  'Python',
  'Java',
  'git',
  'django',
  'Node.js',
  'OpenCV',
  'GCP',
  'MySQL',
  'jQuery',
];
function TagGlobe() {
  const canvasRef = useRef(null);

  const tagCanvas = () => {
    try {
      TagCloud(canvasRef.current, myTags, {
        useItemsInlineStyles: false,
        useContainerInlineStyles: false,
        radius: 300,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        direction: 135,
        keep: true,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (canvasRef !== null) {
      tagCanvas();
      const colors = [
        '#34A853',
        '#FBBC05',
        '#4285F4',
        '#7FBC00',
        'FFBA01',
        '01A6F0',
      ];
      const random_color = colors[Math.floor(Math.random() * colors.length)];

      const tagi = document.getElementsByClassName('tagcloud--item');
      tagi.style = 'color:red;background-color:yellow';
      console.log(tagi);
    }
  }, []);

  return (
    <div>
      <canvas className="" width="600" height="600" ref={canvasRef} />
    </div>
  );
}
export default TagGlobe;
