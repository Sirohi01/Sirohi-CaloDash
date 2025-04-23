    import React from 'react';
    import { useSelector } from 'react-redux';

    const SummaryPage = () => {
    const entries = useSelector((state) => state.calories.entries);

    const sortedDates = Object.keys(entries).sort((a, b) => new Date(b) - new Date(a));

    return (
        <div className="summary-page">
        <h2>Calorie Summary</h2>
        <ul className="summary-list">
            {sortedDates.map((date) => {
            const total = entries[date].reduce((sum, item) => sum + item.calories, 0);
            return (
                <li key={date} className="summary-item">
                <strong>{date}</strong> {total} cal
                </li>
            );
            })}
        </ul>
        </div>
    );
    };

    export default SummaryPage;
