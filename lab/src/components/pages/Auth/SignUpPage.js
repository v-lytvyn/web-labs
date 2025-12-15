import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/');
        }
    }, [navigate]);

    const handleSignUp = (e) => {
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
                <h1>Create Account</h1>
                <form className="auth-form" onSubmit={handleSignUp}>
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input type="password" placeholder="Create Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <button type="submit" className="auth-btn">Register</button>
                </form>
                <div className="auth-link">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
