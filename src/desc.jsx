import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./desc.css";
gsap.defaults({ debug: false });

function Desc({ game, description, sysreq, image,name}) {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const detailsRefs = useRef([]);
  const req = useRef(null);
  const aboutGameRef = useRef(null);
  detailsRefs.current = [];
  const [Switch, setSwitch] = useState(false);
  const details = [
    `Processor: ${sysreq.Processor}`,
    `Memory: ${sysreq.Memory}`,
    `Graphics: ${sysreq.Graphics}`,
    `OS: ${sysreq.OS}`,
  ];
  function handleBuy(){
   fetch('http://localhost:3000/buy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ game:game,name:name }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert('Failed to purchase game');
        }
      })
      .catch((error) => {
        console.error('Error purchasing game:', error);
        alert('Failed to purchase game');
      });
  
  }
  const switchMode = () => {
    setSwitch(prevSwitch => !prevSwitch);
  };

  useEffect(() => {
    // Initial animation for image and title
    gsap.fromTo(imageRef.current, 
      { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" });

    gsap.fromTo(titleRef.current, 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" });
  }, []);

  useEffect(() => {
    // This effect runs when Switch changes
    if (Switch) {
      // Animations for "REQUIREMENTS"
      gsap.fromTo(req.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" });

      detailsRefs.current.forEach((detail, index) => {
        gsap.fromTo(detail, 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1, ease: "power2.inOut", delay: index * 0.2 });
      });

    } else {
      // Animations for "ABOUT GAME"
      gsap.fromTo(req.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" });
      gsap.fromTo(aboutGameRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" });
    }
  }, [Switch]);

  return (
    <div className="desc">
      <h2 ref={titleRef} className="title">
        {game}
      </h2>
      <div className="header" id="header" onClick={switchMode}>
        <div id="image-container" className="image-container">
          <img ref={imageRef} src={image} alt="NOT FOUND" className="image-left" id="image-left" />
        </div>
        <div className="title-or-details">
          {Switch ? (
            <>
              <h2 className="requirements" ref={req}>REQUIREMENTS</h2>
              {details.map((detail, index) => (
                <div key={index} className="detail-container">
                  <p ref={(el) => (detailsRefs.current[index] = el)} className="detail">
                    {detail}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <>
              <h2 ref={req}>ABOUT GAME</h2>
              <p className='description'ref={aboutGameRef}>{description}</p>
            </>
          )}
        </div>
      </div>
      <div className="buy">
        <button className="buy-button" onClick={handleBuy}>BUY</button>
      </div>
    </div>
  );
}

export default Desc;
