import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header className="navigation">
    <img ClassName = "navigation-img" src="/img/logo.png" alt="My Image" />
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/Cart">Cart</Link>
    </nav>
  </header>
);

export default Navigation;
