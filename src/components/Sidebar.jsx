    import React, { useState } from 'react';
    import {
    FaBars,
    FaTimes,
    FaTint,
    FaDumbbell,
    FaChartPie,
    FaWeight,
    FaRulerCombined,
    } from 'react-icons/fa';
    import './Sidebar.css';
    import KaloDashLogo from '../assets/Kalo.png';

    const Sidebar = ({ setView, view }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleViewChange = (val) => {
        setView(val);
        setIsOpen(false);
    };

    return (
        <>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            
            <div className="sidebar-logo">
                <img src={KaloDashLogo} alt="Kalo_Dash Logo" className="logo-image" />
            </div>

            


            <button
            className={view === 'gym' ? 'active' : ''}
            onClick={() => handleViewChange('gym')}
            >
            <FaDumbbell className="sidebar-icon" />
            Gym Workout
            </button>

            <button
            className={view === 'tracker' ? 'active' : ''}
            onClick={() => handleViewChange('tracker')}
            >
            <FaDumbbell className="sidebar-icon" />
            Calorie Tracker
            </button>

            <button
            className={view === 'water' ? 'active' : ''}
            onClick={() => handleViewChange('water')}
            >
            <FaTint className="sidebar-icon" />
            Water Tracker
            </button>

            <button
            className={view === 'weight' ? 'active' : ''}
            onClick={() => handleViewChange('weight')}
            >
            <FaWeight className="sidebar-icon" />
            Weight Tracker
            </button>

            <button
            className={view === 'measurement' ? 'active' : ''}
            onClick={() => handleViewChange('measurement')}
            >
            <FaRulerCombined className="sidebar-icon" />
            Body Measurement
            </button>

            <button
            className={view === 'summary' ? 'active' : ''}
            onClick={() => handleViewChange('summary')}
            >
            <FaChartPie className="sidebar-icon" />
            Summary
            </button>
        </div>
        </>
    );
    };

    export default Sidebar;