import React from 'react';
import './RegionOverlay.css';

interface RegionOverlayProps {
    id: string;
    image: string;
    top: string;
    left: string;
    width?: string; 
  }
  
  const RegionOverlay: React.FC<RegionOverlayProps> = ({ id, image, top, left, width = '150px' }) => {
    return (
      <img
        src={image}
        alt={id}
        className="region-overlay"
        style={{ top, left, width }}
      />
    );
  };
  
  export default RegionOverlay;