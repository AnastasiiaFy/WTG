import React, { useState } from "react";
import "../styles/FilterPanel.css";

interface FilterPanelProps {
  onApplyFilters: (filters: { type: string; date: string; priceFrom: number; priceTo: number }) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({ type: "", date: "", priceFrom: "", priceTo: "" });

  const handleApplyFilters = () => {
    onApplyFilters({
      type: filters.type,
      date: filters.date,
      priceFrom: filters.priceFrom === "" ? 0 : Number(filters.priceFrom),
      priceTo: filters.priceTo === "" ? 0 : Number(filters.priceTo),
    });
  };

  return (
    <div className="filter-panel">
      <h2 className="filter-title">ОБЕРІТЬ ФІЛЬТРИ<br />ДЛЯ ПОШУКУ</h2>

      <div className="filter-group">
        <label>Тип заходу</label>
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">Всі</option>
          <option value="Гумористичне шоу">Гумористичне шоу</option>
          <option value="Вистава">Вистава</option>
          <option value="Ярмарок">Ярмарок</option>
          <option value="Виставка">Виставка</option>
          <option value="Презентація">Презентація</option>
          <option value="Концерт">Концерт</option>
          <option value="Фестиваль">Фестиваль</option>
          <option value="Майстер-клас">Майстер-клас</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Дата</label>
        <input
          type="date"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
        />
      </div>

      <div className="filter-group price-group">
        <label>Ціна</label>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Від"
            min="0"
            value={filters.priceFrom}
            onChange={(e) => setFilters({ ...filters, priceFrom: e.target.value })}
          />
          <span className="separator">—</span>
          <input
            type="number"
            placeholder="До"
            min="0"
            value={filters.priceTo}
            onChange={(e) => setFilters({ ...filters, priceTo: e.target.value })}
          />
        </div>
      </div>

      <button className="apply-button" onClick={handleApplyFilters}>
        Застосувати
      </button>
    </div>
  );
};

export default FilterPanel;