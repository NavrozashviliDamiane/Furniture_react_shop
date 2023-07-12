import React, { useState, useEffect } from 'react';
import './Room.css';
import backgroundImage from './room.jpg'; // Replace with your room image path
import overlayImage1 from './chair1.jpg'; // Replace with your overlay image 1 path
import overlayImage2 from './chair2.jpg'; // Replace with your overlay image 2 path
import overlayImage3 from './chair3.jpg'; // Replace with your overlay image 3 path

const Room = () => {
    const [showOptions, setShowOptions] = useState(false);
  
    useEffect(() => {
      let timer;
  
      if (showOptions) {
        timer = setTimeout(() => {
          setShowOptions(false);
        }, 3000);
      }
  
      return () => {
        clearTimeout(timer);
      };
    }, [showOptions]);
  
    const handleMouseEnter = () => {
      setShowOptions(true);
    };
  
    const handleMouseLeave = () => {
      setShowOptions(true);
    };
  
    return (
      <div>
        <div className="background">
          <img src={backgroundImage} alt="Room" />
        </div>
  
        <div
          className="overlayImageContainer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={overlayImage3}
            alt="Overlay 3"
            className="overlayImage"
          />
          
          {showOptions && (
            <div className="optionsContainer">
              <p>Option 1</p>
              <p>Option 2</p>
              <p>Option 3</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Room;
