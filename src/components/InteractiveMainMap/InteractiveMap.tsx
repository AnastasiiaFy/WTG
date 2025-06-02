import React from 'react';
import regions from '../../data/regions.json';
import { regionCoordinates } from './coordinates';
import './InteractiveMap.css';
import RegionOverlay from './RegionOverlay';

const InteractiveMap: React.FC = () => {
  return (
    <div className="map-container">
      <img src="/Ukraine_map_background.png" alt="MainMap" className="main-map-background" />

      {regions.map(region => {
        const coords = regionCoordinates[region.id];
        if (!coords) return null;

        return (
          <RegionOverlay
            key={region.id}
            id={region.id}
            image={region.picture_image}
            top={coords.top}
            left={coords.left}
            width={coords.width} 
          />
        );
      })}
    </div>

  );
};

export default InteractiveMap;
