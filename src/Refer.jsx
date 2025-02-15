import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import './styles/refer.css';
import groupImage from './assets/group.svg';        // Normal group image for larger screens
import groupRotate from './assets/grouprotate.svg';    // Rotated image for smaller screens
import Details from './Details'; // Import the Details modal component

function Refer() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="refer-container">
      <div className="refer-content">
        {/* Heading */}
        <Typography variant="h4" className="refer-heading">
          How Do I Refer?
        </Typography>
        
        {/* Group Image Container */}
        <div className="group-image-container">
          <picture>
            <source media="(max-width: 768px)" srcSet={groupRotate} />
            <img src={groupImage} alt="Referral Steps" className="group-image" />
          </picture>
        </div>

        {/* Refer Now Button that opens the modal */}
        <Button 
          variant="contained" 
          className="refer-now-btn" 
          onClick={openModal}
        >
          Refer Now
        </Button>
      </div>
      
      {/* Details Modal */}
      <Details open={modalOpen} onClose={closeModal} />
    </div>
  );
}

export default Refer;
