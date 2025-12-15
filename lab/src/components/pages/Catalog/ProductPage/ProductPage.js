import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../store/cartSlice';
import './ProductPage.css';

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { product } = location.state || {};

  if (!product) {
    return (
      <div className="product-page-error">
        <h2>Movie not found</h2>
        <button onClick={() => navigate('/catalog')}>Back to Catalog</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="product-page">

      <div
        className="movie-backdrop"
        style={{ backgroundImage: `url(${product.image})` }}
      />

      <div className="movie-container">

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="movie-content">

          <div className="movie-poster">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="movie-details">
            <h1 className="movie-title">{product.title}</h1>

            <div className="movie-meta">
              <span className="movie-director">Dir. {product.director}</span>
              <span className="movie-rating">★ {product.rating} / 10</span>
            </div>

            <p className="movie-description">
              {product.description || "No description available for this masterpiece."}
            </p>

            <div className="movie-actions">
              <span className="movie-price">${product.price}</span>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPage;
