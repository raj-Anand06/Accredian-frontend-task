import React from 'react';
import './styles/gtouch.css';
import circleImage from './assets/circle.png'; 

function Gtouch() {
  return (
    <div className="gtouch-container">
      <div className="gtouch-content">
        {/* Left Section: Headline and Subtext */}
        <div className="gtouch-text">
          <h2>Want to delve deeper into the program?</h2>
          <p>
            Share your details to receive expert insights from our program team!
          </p>
        </div>
        <img src={circleImage} alt="Concentric Circles" className="gtouch-circle" />
        <div className="gtouch-button-wrapper">
          <button className="gtouch-button">
            Get in touch &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gtouch;
