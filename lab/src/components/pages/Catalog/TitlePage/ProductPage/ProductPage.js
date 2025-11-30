import { useLocation } from 'react-router-dom';
import ProductInfo from '../ProductInfo/ProductInfo';
import './ProductPage.css';

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state || {}; 

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-page">
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductPage;
