    import React from 'react';
    import { useSelector } from 'react-redux';
    import { logoutUser } from '../features/user/userSlice';
    import { useDispatch } from 'react-redux';
    import { FaSignOutAlt } from 'react-icons/fa';
    import './Header.css';

    const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <header className="header">
        <div className="header-content">
            <h1>Kalo_Dash</h1>
            {user && (
            <button onClick={handleLogout} className="logout-btn">
                <FaSignOutAlt /> Logout
            </button>
            )}
        </div>
        </header>
    );
    };

    export default Header;