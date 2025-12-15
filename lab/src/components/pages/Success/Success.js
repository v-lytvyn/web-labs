import { useNavigate } from 'react-router-dom';
import './Success.css';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-icon">✔️</div>
      <h1>Success!</h1>
      <p>Your order was sent to processing! Check your email for more information.</p>
      <button onClick={() => navigate('/catalog')}>Go back to Catalog</button>
    </div>
  );
};

export default SuccessPage;
