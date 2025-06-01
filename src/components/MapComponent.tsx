import React, { useState, useRef, useEffect } from "react";
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
  location: string;
  position?: { x: number; y: number };
  link: string;
}

export const MapComponent: React.FC<{ events: Event[] }> = ({ events }) => {
  const [hoveredEvent, setHoveredEvent] = useState<Event | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoveredEvent && tooltipRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const headerHeight = 100; // Приблизна висота хедера (можна замінити на реальну висоту)
      const viewportTop = window.scrollY;

      if (tooltipRect.top < viewportTop + headerHeight) {
        // Якщо верх tooltip вище хедера, зміщуємо вниз
        tooltipRef.current.style.transform = `translate(-50%, 0)`;
      } else {
        // Інакше повертаємо стандартне положення
        tooltipRef.current.style.transform = `translate(-50%, -100%)`;
      }
    }
  }, [hoveredEvent]);

  return (
    <div className="map-container">
      <img
        src="/images/regions_maps/cherkasy_map.svg"
        alt="Карта Черкаської області"
        className="map-image"
      />

      {events.map(
        (event) =>
          event.position && (
            <div
              className="map-marker"
              style={{ top: `${event.position.y}%`, left: `${event.position.x}%` }}
              key={event.id}
              onMouseEnter={() => setHoveredEvent(event)}
              onMouseLeave={() => setHoveredEvent(null)}
            />
          )
      )}

      {hoveredEvent && (
        <div
          ref={tooltipRef}
          className="tooltip"
          style={{
            top: `${hoveredEvent.position?.y}%`,
            left: `${hoveredEvent.position?.x}%`,
          }}
        >
          <img
            src={hoveredEvent.image}
            alt={hoveredEvent.title}
            className="tooltip-image"
          />
          <div className="tooltip-content">
            <p className="tooltip-title">{hoveredEvent.title}</p>
            <p className="tooltip-description">{hoveredEvent.short_description}</p>
          </div>
        </div>
      )}

      <div className="events-count">
        Знайдено {events.length} подій
      </div>
    </div>
  );
};