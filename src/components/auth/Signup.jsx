    // Signup.jsx
    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { setUser } from '../../features/user/userSlice';
    import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
    import '../../styles/auth.css';

    const Signup = ({ switchToLogin }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();
        const user = { email, name };
        dispatch(setUser(user));
    };

    return (
        <div className="auth-wrapper">
        <div className="auth-container">
            <div className="auth-header">
            <h2>Join Our Community</h2>
            <p className="subtitle">Start your fitness journey today</p>
            </div>

            <form onSubmit={handleSignup} className="auth-form">
            <div className="input-group">
                <input 
                type="text" 
                placeholder="Full Name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                required 
                />
                
            </div>

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
                placeholder="Create Password"
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

            <button type="submit">Create Account</button>
            </form>

            <div className="auth-footer">
            <p>Already have an account? <span className="auth-link" onClick={switchToLogin}>Login</span></p>
            </div>
        </div>
        </div>
    );
    };

    export default Signup;