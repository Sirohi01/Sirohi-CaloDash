    import React from 'react';
    import { FaTint, FaDumbbell, FaChartPie } from 'react-icons/fa'; 
    const Sidebar = ({ setView, view }) => {
    return (
        <div className="sidebar">
        <h2>Dashboard</h2>
        <button
            className={view === 'tracker' ? 'active' : ''}
            onClick={() => setView('tracker')}
        >
            <FaDumbbell style={{ marginRight: 8 }} />
            Calorie Tracker
        </button>
        <button
            className={view === 'summary' ? 'active' : ''}
            onClick={() => setView('summary')}
        >
            <FaChartPie style={{ marginRight: 8 }} />
            Summary
        </button>
        <button
            className={view === 'water' ? 'active' : ''}
            onClick={() => setView('water')}
        >
            <FaTint style={{ marginRight: 8 }} />
            Water Tracker
        </button>
        </div>
    );
    };

    export default Sidebar;
