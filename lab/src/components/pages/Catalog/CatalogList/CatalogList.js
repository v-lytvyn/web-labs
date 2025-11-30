import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { useSearch } from '../SearchContext/SearchContext';
import './CatalogList.css';
import FilterBar from '../FilterBar/FilterBar';
import Loader from '../../../Loader/Loader';
import axios from 'axios';

const CatalogList = () => {
  const { searchTerm } = useSearch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [filters, setFilters] = useState({
    price: '',
    rating: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/products', {
        params: {
          search: searchTerm.trim(),
          price: filters.price,
          rating: filters.rating,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data from server:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, filters]);

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <FilterBar onApply={handleApplyFilters} />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              director={product.director}
              rating={product.rating}
              image={product.image}
              onShowMore={() => navigate("/catalog/productPage", { state: { product } })}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CatalogList;
