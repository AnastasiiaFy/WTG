import React, { useState } from "react";
import Header from "../components/HeaderRegionPage";
import FilterPanel from "../components/FilterPanel";
import { MapComponent } from "../components/MapComponent";
import Footer from "../components/FooterRegionPage";
import eventData from "../data/events.json";

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

const events: Event[] = Array.isArray(eventData) ? (eventData as Event[]) : [];

const RegionFiltersPage: React.FC = () => {
const [selectedRegionId, setSelectedRegionId] = useState("cherkasy"); // або іншу область
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(
    events.filter((event) => event.region_id === selectedRegionId)
  );

  const convertDateFormat = (date: string): string => {
    if (!date) return "";
    const [day, month, year] = date.split(".");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const applyFilters = (filters: {
    type: string;
    date: string;
    priceFrom: number;
    priceTo: number;
  }) => {
    const filtered = events.filter((event: Event) => {
      if (event.region_id !== selectedRegionId) return false;
      if (filters.type && event.type !== filters.type) return false;
      if (filters.date) {
        const filterDate = filters.date;
        const eventDate = convertDateFormat(event.date);
        if (eventDate !== filterDate) return false;
      }
      if (filters.priceFrom || filters.priceTo) {
        const priceFrom = filters.priceFrom || 0;
        const priceTo = filters.priceTo || Infinity;
        if (event.min_price > priceTo && event.max_price > priceTo) return false;
        if (event.max_price < priceFrom && event.min_price < priceFrom) return false;
      }
      return true;
    });

    setFilteredEvents(filtered);
  };

  return (
    <div className="region-page">
      <Header />
      <div className="content">
        <FilterPanel onApplyFilters={applyFilters} />
        <MapComponent events={filteredEvents} selectedRegionId={selectedRegionId} />
      </div>
      <Footer />
    </div>
  );
};

export default RegionFiltersPage;
