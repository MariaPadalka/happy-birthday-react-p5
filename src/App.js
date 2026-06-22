import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';


const TEXT = 'Happy Birthday Marusia!';

const App = () => {
  const canvasRef = React.useRef(null);
  const [showIntro, setShowIntro] = React.useState(true);

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;

    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  }, []);

  return (
    <div className="main">
      {showIntro && (
        <div className="intro-overlay">
<img src="/assets/photo.png" alt="Birthday" />
          <button onClick={() => setShowIntro(false)}>
            Мяу 🎁
          </button>
        </div>
      )}

      <div ref={canvasRef} />
    </div>
  );
};

export default App;