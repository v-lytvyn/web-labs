import './ActionButtons.css';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../SearchContext/SearchContext';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../../store/cartSlice';

const ActionButtons = ({ product }) => {
    const navigate = useNavigate();
    const { setSearchTerm } = useSearch();
    const dispatch = useDispatch();

    const handleGoBack = () => {
        setSearchTerm("");
        navigate('/catalog');
    };

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart(product));
        } else {
            console.error("No product data available to add to the cart.");
        }
    };

    return (
        <div className="action-buttons">
            <button onClick={handleGoBack} className="go-back">Go back</button>
            <button onClick={handleAddToCart} className="add-to-cart">Add to cart</button>
        </div>
    );
};

export default ActionButtons;
