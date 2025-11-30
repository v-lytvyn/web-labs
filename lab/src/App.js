import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from "./components/pages/Home/Home"
import Catalog from './components/pages/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import ProductPage from "./components/pages/Catalog/TitlePage/ProductPage/ProductPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './components/pages/Catalog/SearchContext/SearchContext';
import CartPage from './components/pages/Cart/CartPage';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/productPage" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </Router>
      </SearchProvider>
    </div>
  );
}

export default App;
