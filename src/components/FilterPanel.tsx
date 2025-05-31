import React, { useState } from "react";
import "../styles/FilterPanel.css";

interface FilterPanelProps {
  onApplyFilters: (filters: { type: string; date: string; priceFrom: number, priceTo: number }) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({ type: "", date: "", priceFrom: 0, priceTo: 0 });


  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <div className="filter-panel">
      <h2 className="filter-title">ОБЕРІТЬ ФІЛЬТРИ<br />ДЛЯ ПОШУКУ</h2>

      <div className="filter-group">
        <label>Тип заходу</label>
        <select onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
          <option value="">Оберіть...</option>
          <option value="concert">Концерт</option>
          <option value="exhibition">Виставка</option>
          <option value="workshop">Майстер-клас</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Дата</label>
        <input type="date" onChange={(e) => setFilters({ ...filters, date: e.target.value })} />
      </div>

      <div className="filter-group price-group">
        <label>Ціна</label>
        <div className="price-inputs">
         <input type="number" placeholder="Від" onChange={(e) => setFilters({ ...filters, priceFrom: Number(e.target.value) })} />
         <span className="separator">—</span> 
         <input type="number" placeholder="До" onChange={(e) => setFilters({ ...filters, priceTo: Number(e.target.value) })} />
        </div>
      </div>

      <button className="apply-button" onClick={handleApplyFilters}>Застосувати</button>
    </div>
  );
};

export default FilterPanel;
