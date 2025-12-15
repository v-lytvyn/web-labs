import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSearch } from '../pages/Catalog/SearchContext/SearchContext';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setSearchTerm } = useSearch();
  const { items } = useSelector(state => state.cart);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (location.pathname === '/login' || location.pathname === '/signup') {
    return (
      <header className="navigation" style={{ justifyContent: 'center' }}>
        <Link to="/" className="logo-link">
          <img className="navigation-img" src="/img/logo.png" alt="Logo" />
        </Link>
      </header>
    );
  }

  return (
    <header className="navigation">
      <Link to="/" className="logo-link">
        <img className="navigation-img" src="/img/logo.png" alt="Horror Movies Logo" />
      </Link>

      <nav className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/catalog" className={location.pathname === '/catalog' ? 'active' : ''}>Catalog</Link>
        <Link to="/cart" className={`cart-link ${location.pathname === '/cart' ? 'active' : ''}`}>
          Cart
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </nav>

      <div className="nav-actions">
        {location.pathname === '/catalog' && (
          <div className="search-bar">
            <input type="text" placeholder="🔍 Find movies..." onChange={handleSearchChange} />
          </div>
        )}

        {user ? (
          <button onClick={handleLogout} className="logout-btn">
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="login-link">Sign In</Link>
        )}
      </div>
    </header>
  );
};

export default Navigation;
