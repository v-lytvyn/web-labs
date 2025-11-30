import { Link, useLocation } from 'react-router-dom';
import { useSearch } from '../pages/Catalog/SearchContext/SearchContext';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const { setSearchTerm } = useSearch();

  const isCatalogPage = location.pathname === '/catalog';

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="navigation">
      <img className="navigation-img" src="/img/logo.png" alt="Horror Movies Logo" />

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      {isCatalogPage && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            onChange={handleSearchChange}
          />
        </div>
      )}
    </header>
  );
};

export default Navigation;
