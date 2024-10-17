import { useState, useEffect } from 'react';
import './App.css';

const imgsrc = [
  '1.jpg', '2.png', '3.jpg', '4.jpg', '5.png', '6.jpg', 
  '7.jpg', '8.png', '9.png', '10.png', '11.png', '12.png', 
  '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', 
  '18.jpg', '19.png', '20.png', '21.png', '22.jpg'
];

const TIME = 1600;

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => (prevCounter + 1) % imgsrc.length);
    }, TIME);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
    <h1>поезд6</h1>
      <div className="wrapper">
        <div className="menu">
          <div className="menu-screen">
            <img src={`../public/images/${imgsrc[counter]}`} alt="Slideshow" className='image' />
          </div>
        </div>
        <div className="side-menu">
          <div className="info-menu">
            <button>menu</button>
            <img src="../public/button_menu.PNG" alt="snowie" className='snowie' />
          </div>
          <div className="button-menu">
            <button>record</button>
            <button>recollect</button>
            <button>reflect</button>
            <button>end</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
