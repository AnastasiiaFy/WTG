import React, { useState } from "react";
import Header from "../components/HeaderRegionPage";
import FilterPanel from "../components/FilterPanel";
import { MapComponent } from "../components/MapComponent";
import Footer from "../components/FooterRegionPage";
import eventData from "../data/events.json"; 

const events: Event[] = Array.isArray(eventData) ? eventData as Event[] : [];


// Інтерфейс події
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
  location: string; /* Додаємо "?" для уникнення помилок */
  position?: { x: number; y: number }; /* Додаємо позицію для міток */
  link: string;
}

// Інтерфейс пропсів для `FilterPanel`
interface FilterPanelProps {
  onApplyFilters: (filters: { type: string; date: string; priceFrom: number; priceTo: number }) => void;
}

const RegionFiltersPage: React.FC = () => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events.filter(event => event.region_id === "cherkasy"));

  // Фільтрація подій
  const applyFilters = (filters: { type?: string; date?: string; priceFrom?: number; priceTo?: number }) => {
  const filtered = events.filter((event: Event) => 
    event.region_id === "cherkasy" &&
    (!filters.type || event.type.includes(filters.type)) &&
    (!filters.date || event.date === filters.date) &&
    (!filters.priceFrom || event.min_price >= filters.priceFrom) &&
    (!filters.priceTo || event.max_price <= filters.priceTo)
  );

  console.log("Знайдені події після фільтрації:", filtered); // Додаємо лог для перевірки
  setFilteredEvents(filtered);
};





  return (
    <div className="region-page">
      <Header />
      <div className="content">
        <FilterPanel onApplyFilters={applyFilters} />
        <MapComponent events={filteredEvents} />
      </div>
      <Footer />
    </div>
  );
};

export default RegionFiltersPage;
