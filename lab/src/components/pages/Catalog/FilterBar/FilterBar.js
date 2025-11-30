import { useState } from 'react';
import "./FilterBar.css";

const FilterBar = ({ onApply }) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  const handleApply = () => {
    onApply({
      price: selectedPrice,
      rating: selectedRating,
    });
  };

  return (
    <div className="filter-bar">
      <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
        <option value="">Filter by Price</option>
        <option value="10">Budget (Under $10)</option>
        <option value="14">Standard ($10 - $14)</option>
        <option value="14+">Premium ($14+)</option>
      </select>

      <select value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
        <option value="">Filter by Rating</option>
        <option value="5">Low Score (&lt; 5.5)</option>
        <option value="7">Average (5.5 - 7.0)</option>
        <option value="7+">Masterpiece (7.0+)</option>
      </select>

      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default FilterBar;
