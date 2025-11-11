import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from "./components/pages/Home/Home"
import Catalog from './components/pages/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
