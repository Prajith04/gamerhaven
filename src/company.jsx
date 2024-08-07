import './company.css';
import rockstar from './assets/rockstar.jpeg';
import santamonica from './assets/santamonica.png';
import electronicarts from './assets/electronicarts.png';
import insomaniac from './assets/insomaniac.png';
import monolith from './assets/monolith.png';
import ubisoft from './assets/ubisoft.png';
import fromsoftware from './assets/fromsoftware.png';
import capcom from './assets/capcom.png';
import activision from './assets/activision.png';
import bethesda from './assets/bethesda.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GamingController from './haven';
function Company({ setCompany }) {
  const images = [
    { src: rockstar, alt: 'rockstar' },
    { src: santamonica, alt: 'santamonica' },
    { src: electronicarts, alt: 'electronicarts' },
    { src: insomaniac, alt: 'insomaniac' },
    { src: monolith, alt: 'monolith' },
    { src: ubisoft, alt: 'ubisoft' },
    { src: fromsoftware, alt: 'fromsoftware' },
    { src: capcom, alt: 'capcom' },
    { src: activision, alt: 'activision' },
    { src: bethesda, alt: 'bethesda' },
  ];

  const [rotation, setRotation] = useState(0);
  const [isScrollingMode, setIsScrollingMode] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const handleWheel = (e) => {
    if (isScrollingMode) {
      setRotation((prev) => prev + e.deltaY * 0.1); // Decrease multiplier for finer control
    }
  };

  const toggleMode = () => {
    setIsScrollingMode(!isScrollingMode);
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    let interval;
    if (!isScrollingMode && !isPaused) {
      interval = setInterval(() => {
        setRotation((prev) => prev + 0.2); // Slow down the auto-rotation speed
      }, 16.67); // Approximately 60 frames per second
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isScrollingMode, isPaused]);

  return (
    <>
    <div className="banner" onWheel={handleWheel}>
      <button className='button' onClick={toggleMode}>
        {isScrollingMode ? 'Switch to Autorun' : 'Switch to Scroll'}
      </button>
      <div
        className={`slider ${isScrollingMode ? 'paused' : ''}`}
        style={{ '--quantity': images.length, '--rotation': `${rotation}deg` }}
      >
        {images.map((image, index) => (
          <div className="item" key={index} style={{ '--position': index + 1 }}>
            <a
              href="/games/subgames"
              onClick={(e) => {
                e.preventDefault();
                setCompany(image.alt);
                navigate('/company/games');
              }}
            >
              <img src={image.src} alt={image.alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Company;
