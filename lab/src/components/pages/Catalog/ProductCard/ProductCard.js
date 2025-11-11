import './ProductCard.css';

const ProductCard = ({ title, description, price, director, rating, image }) => {
  return (
    <div className="product-card">
      <div className="product-card-header">{title}</div>
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <p>{description}</p>
      <div className="product-details">
        <div><strong>Director: </strong> {director}</div>
        <div><strong>Rating: </strong> {rating}</div>
      </div>
      <div className="product-price">
        <span>Price:</span>
        <span>${price}</span>
      </div>
      <button className="view-more-catalog">View more</button>
    </div>
  );
};

export default ProductCard;
