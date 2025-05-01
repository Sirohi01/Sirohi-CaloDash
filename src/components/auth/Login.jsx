    // Login.jsx
    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { setUser } from '../../features/user/userSlice';
    import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
    import '../../styles/auth.css';

    const Login = ({ switchToSignup }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = { email };
        dispatch(setUser(user));
    };

    return (
        <div className="auth-wrapper">
        <div className="auth-container">
            <div className="auth-header">
            <h2>Welcome Back</h2>
            <p className="subtitle">Sign in to continue your fitness journey</p>
            </div>

            <form onSubmit={handleLogin} className="auth-form">
            <div className="input-group">
                <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
                />
                <span className="input-icon"><FaEnvelope /></span>
            </div>
            
            <div className="input-group">
                <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <span className="input-icon"><FaLock /></span>
                <span 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>

            <button type="submit">Login</button>
            </form>

            <div className="auth-footer">
            <p>Don't have an account? <span className="auth-link" onClick={switchToSignup}>Sign up</span></p>
            <a href="#" className="auth-link">Forgot password?</a>
            </div>
        </div>
        </div>
    );
    };

    export default Login;