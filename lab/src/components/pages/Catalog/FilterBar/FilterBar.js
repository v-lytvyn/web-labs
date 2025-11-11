import './FilterBar.css';

const FilterBar = ({ onApply }) => {
  return (
    <div className="filter-bar">
      <select>
        <option>Filter 1</option>
        <option>Filter 1</option>
        <option>Filter 1</option>
      </select>
      <select>
        <option>Filter 2</option>
        <option>Filter 2</option>
        <option>Filter 2</option>
      </select>
      <select>
        <option>Filter 3</option>
        <option>Filter 3</option>
        <option>Filter 3</option>
      </select>
      <button onClick={onApply}>Apply</button>
    </div>
  );
};

export default FilterBar;
