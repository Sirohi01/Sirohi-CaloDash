    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { logoutUser } from '../features/user/userSlice';
    import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
    import { signOut } from 'firebase/auth';
    import { auth } from '../components/auth/firebase';
    import './Header.css';
    import KaloDashLogo from '../assets/Kalo.png';

    const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);

    const handleLogout = async () => {
        try {
        await signOut(auth);
        dispatch(logoutUser());
        } catch (error) {
        console.error('Logout error:', error);
        }
    };

    return (
        <header className="header">
        <div className="header-container">
            <div className="logo-container">
            <div className="logo-img">
                <img src={KaloDashLogo} alt="Kalo_Dash Logo" className="logo-image" />
            </div>
            </div>
            
            {user && (
            <div className="user-controls">
                <div className="user-profile">
                <FaUserCircle className="user-icon" />
                <span className="user-name">{user.displayName || user.email}</span>
                </div>
                <button onClick={handleLogout} className="logout-btn" aria-label="Logout">
                <FaSignOutAlt className="logout-icon" />
                <span className="logout-text">Logout</span>
                </button>
            </div>
            )}
        </div>
        </header>
    );
    };

    export default Header;