import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email) {
            localStorage.setItem('user', email);
            navigate('/');
            window.location.reload();
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>Log In</h1>
                <form className="auth-form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input type="password" placeholder="Password (any)" required />
                    <button type="submit" className="auth-btn">Sign In</button>
                </form>
                <div className="auth-link">
                    New to IHMDb? <Link to="/signup">Create an account</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
