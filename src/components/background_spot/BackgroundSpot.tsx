import React from 'react';

interface BackgroundSpotProps {
  src: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width?: string;
  height?: string;
  opacity?: number;
  transform?: string;   // новий пропс для додаткових зсувів
}

const BackgroundSpot: React.FC<BackgroundSpotProps> = ({
  src,
  top,
  bottom,
  left,
  right,
  width = '250px',
  height = 'auto',
  opacity = 1,
  transform,
}) => {
  return (
    <img
      src={src}
      alt=""
      style={{
        position: 'absolute',
        top,
        bottom,
        left,
        right,
        width,
        height,
        pointerEvents: 'none',
        zIndex: 0,
        opacity,
        userSelect: 'none',
        transform,
        transition: 'transform 0.3s ease', // для плавності, опціонально
      }}
    />
  );
};

export default BackgroundSpot;
