import React from "react";
import { useState } from "react";
import "../styles/MapComponent.css";

interface Event {
  id: string;
  title: string;
  region_id: string;
  type: string;
  date: string;
  time: string;
  min_price: number;
  max_price: number;
  short_description: string;
  description: string;
  image: string;
  location: string; /* Додаємо ? для уникнення помилок */
  position?: { x: number; y: number }; /* Додаємо позицію для міток */
  link: string;
}

export const MapComponent: React.FC<{ events: Event[] }> = ({ events }) => {
  const [hoveredEvent, setHoveredEvent] = useState<Event | null>(null);

  return (
    <div className="map-container">
      <img src="/images/regions_maps/cherkasy_map.svg" alt="Карта Черкаської області" className="map-image" />
      
      {events.map(event => (
        event.position && (
          <div 
            className="map-marker" 
            style={{ top: `${event.position.y}%`, left: `${event.position.x}%` }}
            key={event.id}
            onMouseEnter={() => setHoveredEvent(event)}
            onMouseLeave={() => setHoveredEvent(null)}
          />
        )
      ))}

      {hoveredEvent && (
  <div className="tooltip" style={{ top: `${hoveredEvent.position?.y}%`, left: `${hoveredEvent.position?.x}%` }}>
    <img src={hoveredEvent.image} alt={hoveredEvent.title} className="tooltip-image" />
    <div className="tooltip-content">
      <p className="tooltip-type">{hoveredEvent.type}</p> {/* Тип події */} 
      <p className="tooltip-title">{hoveredEvent.title}</p> {/* Назва події */} 
    </div>
  </div>
)}


    </div>
  );
};


