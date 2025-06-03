import React, { useState, useRef, useEffect } from "react";
import { RegionMap } from "./RegionMap";
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

export const MapComponent: React.FC<{ events: Event[]; selectedRegionId: string }> = ({
  events,
  selectedRegionId,
}) => {
  const [hoveredEvent, setHoveredEvent] = useState<Event | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoveredEvent && tooltipRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const headerHeight = 100;
      const viewportTop = window.scrollY;

      if (tooltipRect.top < viewportTop + headerHeight) {
        tooltipRef.current.style.transform = `translate(-50%, 0)`;
      } else {
        tooltipRef.current.style.transform = `translate(-50%, -100%)`;
      }
    }
  }, [hoveredEvent]);

  const filteredEvents = events.filter((event) => event.region_id === selectedRegionId);

  return (
    <div className="map-container">
      <RegionMap regionId={selectedRegionId} eventCount={filteredEvents.length} />

      {filteredEvents.map(
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
          style={{ top: `${hoveredEvent.position?.y}%`, left: `${hoveredEvent.position?.x}%` }}
        >
          <img src={hoveredEvent.image} alt={hoveredEvent.title} className="tooltip-image" />
          <div className="tooltip-content">
            <p className="tooltip-title">{hoveredEvent.title}</p>
            <p className="tooltip-description">{hoveredEvent.short_description}</p>
          </div>
        </div>
      )}
    </div>
  );
};