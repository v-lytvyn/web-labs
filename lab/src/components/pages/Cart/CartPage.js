import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
    const { items, totalAmount } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>

            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                items.map(item => (
                    <div key={item.id} className="cart-item">

                        <div className="cart-item-info">
                            <img src={item.image} alt={item.title} />
                            <div>
                                <h2>{item.title}</h2>
                                <p>${item.price}</p>
                                {item.director && <p className="cart-item-director">Director: {item.director}</p>}
                            </div>
                        </div>

                        <div className="cart-item-actions">

                            <div className="quantity-controls">
                                <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch(addToCart(item))}>+</button>
                            </div>

                            <div className="cart-item-total">
                                ${item.totalPrice.toFixed(2)}
                            </div>
                        </div>

                    </div>
                ))
            )}

            {items.length > 0 && (
                <div className="cart-total">
                    <h2>Total amount: ${totalAmount.toFixed(2)}</h2>
                </div>
            )}

            <div className="cart-buttons">
                <button className="btn-back" onClick={() => navigate('/catalog')}>
                    ← Back to Catalog
                </button>

                {items.length > 0 && (
                    <button
                        className="btn-continue"
                        onClick={() => navigate('/checkout')}
                    >
                        Checkout Order
                    </button>
                )}
            </div>
        </div>
    );
};

export default CartPage;
