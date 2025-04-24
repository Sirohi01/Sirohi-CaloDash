import React from 'react'; 
import { useSelector } from 'react-redux';
import { FaTint } from 'react-icons/fa'; 
import { FaAppleAlt } from 'react-icons/fa';  

const SummaryPage = () => {

    const calorieEntries = useSelector((state) => state.calories.entries);

    const waterIntake = useSelector((state) => state.water.intake);

    const sortedDates = Object.keys(calorieEntries).sort((a, b) => new Date(b) - new Date(a));

    return (
        <div className="summary-page">
            <h2>Calorie and Water Intake Summary</h2>
            <ul className="summary-list">
                {sortedDates.map((date) => {

                    const totalCalories = calorieEntries[date].reduce((sum, item) => sum + item.calories, 0);

                    const totalWater = waterIntake[date] || 0;

                    return (
                        <li key={date} className="summary-item">
                            <strong>{date}</strong> 
                            <div><FaAppleAlt style={{ marginRight: 8 }} /> {totalCalories} cal</div>
                            <div><FaTint style={{ marginRight: 8 }} /> {totalWater} glasses of water</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SummaryPage;
