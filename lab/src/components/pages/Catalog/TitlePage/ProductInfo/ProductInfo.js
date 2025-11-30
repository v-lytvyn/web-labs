import './ProductInfo.css';
import ActionButtons from '../ActionButtons/ActionButtons';

const ProductInfo = ({ product }) => {

    if (!product) {
        return <div className="product-info-card"><p>No product data available</p></div>;
    }

    return (
        <div className="product-info-card">
            <div className="image-preview">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="product-details">
                <h2>{product.title}</h2>
                <p className="product-description">{product.description}</p>

                <div className="product-specs">
                    <div className="spec-item">
                        <strong>Director:</strong> <span>{product.director}</span>
                    </div>
                    <div className="spec-item">
                        <strong>Rating:</strong> <span>{product.rating} / 10</span>
                    </div>
                </div>

                <div className="price">Price: ${product.price}</div>
            </div>

            <ActionButtons product={product} />
        </div>
    );
};

export default ProductInfo;