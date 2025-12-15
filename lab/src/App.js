import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from "./components/pages/Home/Home";
import Catalog from './components/pages/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import ProductPage from "./components/pages/Catalog/ProductPage/ProductPage";
import CartPage from './components/pages/Cart/CartPage';
import CheckoutPage from './components/pages/Checkout/Checkout';
import SuccessPage from './components/pages/Success/Success';
import LoginPage from './components/pages/Auth/LoginPage';
import SignUpPage from './components/pages/Auth/SignUpPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './components/pages/Catalog/SearchContext/SearchContext';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Router>
          <Navigation />

          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />

            <Route path="/catalog" element={
              <ProtectedRoute>
                <Catalog />
              </ProtectedRoute>
            } />

            <Route path="/catalog/productPage" element={
              <ProtectedRoute>
                <ProductPage />
              </ProtectedRoute>
            } />

            <Route path="/cart" element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            } />

            <Route path="/checkout" element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            } />

            <Route path="/success" element={
              <ProtectedRoute>
                <SuccessPage />
              </ProtectedRoute>
            } />

          </Routes>
          <Footer />
        </Router>
      </SearchProvider>
    </div>
  );
}

export default App;
