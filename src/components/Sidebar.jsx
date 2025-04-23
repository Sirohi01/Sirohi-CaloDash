import React from 'react';
import { FaFireAlt, FaChartPie } from 'react-icons/fa';
const Sidebar = ({ setView, view }) => {
    return (
        <div className="sidebar">
        <h2>🔥 Sirohi CaloDash</h2>
        <button className={view === 'tracker' ? 'active' : ''} onClick={() => setView('tracker')}>
            <FaFireAlt style={{ marginRight: 8 }} />
                Tracker
        </button>
    <button className={view === 'summary' ? 'active' : ''} onClick={() => setView('summary')}>
            <FaChartPie style={{ marginRight: 8 }} />
                Summary
    </button>
        </div>
    );
};

export default Sidebar;
