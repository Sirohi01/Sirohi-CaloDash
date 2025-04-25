import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaTint, FaAppleAlt } from 'react-icons/fa';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
    LabelList,
} from 'recharts';

const COLORS = ['#ff7043', '#66bb6a', '#42a5f5', '#ffca28', '#ab47bc'];

const SummaryPage = () => {
    const weightEntries = useSelector((state) => state.weight.entries);
    const calorieEntries = useSelector((state) => state.calories.entries);
    const waterIntake = useSelector((state) => state.water.intake);
    const [expandedDate, setExpandedDate] = useState(null);

    const sortedDates = Object.keys(calorieEntries).sort((a, b) => new Date(b) - new Date(a));

    const toggleDate = (date) => {
        setExpandedDate((prev) => (prev === date ? null : date));
    };

    return (
        <div className="summary-page" style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#444' }}>Calories & Body Composition Summary</h2>
            <ul className="summary-list" style={{ listStyle: 'none', padding: 0 }}>
                {sortedDates.map((date) => {
                    const items = calorieEntries[date];
                    const totalCalories = items.reduce((sum, item) => sum + item.calories, 0);
                    const totalWater = waterIntake[date] || 0;
                    const weightMetrics = weightEntries[date]?.metrics || {};

                    // Body Composition Data
                    const bodyCompositionData = [
                        { name: 'Fat', value: parseFloat(weightMetrics.fatWeight || 0) },
                        { name: 'Lean', value: parseFloat(weightMetrics.leanBodyMass || 0) },
                    ];

                    // Water Intake Chart Data
                    const waterChartData = [
                        { name: 'Water Intake', value: totalWater },
                        { name: 'Remaining', value: Math.max(8 - totalWater, 0) },
                    ];

                    // Calories Distribution Breakdown
                    const calorieDistribution = items.map((item) => ({
                        name: item.name,
                        value: item.calories,
                    }));

                    return (
                        <li key={date} className="summary-item" style={{
                            background: '#fff',
                            borderRadius: '12px',
                            padding: '1rem 1.5rem',
                            marginBottom: '1.5rem',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                            cursor: 'pointer',
                        }}>
                            <div onClick={() => toggleDate(date)}>
                                <h3 style={{ fontSize: '1.5rem', color: '#333' }}>{date}</h3>
                                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontSize: '1.1rem' }}>
                                    <span><FaAppleAlt color="#ff7043" /> <strong>{totalCalories} cal</strong></span>
                                    <span><FaTint color="#42a5f5" /> <strong>{totalWater} glasses</strong></span>
                                </div>
                            </div>

                            {expandedDate === date && (
                                <div className="details" style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                                    {/* Food Items List */}
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem', color: '#333' }}>🍽 Food Items:</h4>
                                    <ul style={{ marginBottom: '1rem', paddingLeft: '20px' }}>
                                        {items.map((entry, idx) => (
                                            <li key={idx} style={{ marginBottom: '4px' }}>
                                                • <strong>{entry.name}</strong>: {entry.calories} cal
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Water Intake Information */}
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem', color: '#333' }}>💧 Water Intake:</h4>
                                    <p>{totalWater} glasses (≈ {totalWater * 250}ml)</p>

                                    {/* Body Composition Charts */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
                                        {/* Body Composition Pie Chart */}
                                        <div style={{ width: '300px', height: '250px' }}>
                                            <h5 style={{ marginBottom: '0.5rem', color: '#333' }}>Body Composition</h5>
                                            <ResponsiveContainer>
                                                <PieChart>
                                                    <Pie
                                                        data={bodyCompositionData}
                                                        dataKey="value"
                                                        nameKey="name"
                                                        cx="50%"
                                                        cy="50%"
                                                        outerRadius={80}
                                                        label
                                                    >
                                                        {bodyCompositionData.map((_, index) => (
                                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip />
                                                    <Legend />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>

                                        {/* Water Intake Chart */}
                                        <div style={{ width: '300px', height: '250px' }}>
                                            <h5 style={{ marginBottom: '0.5rem', color: '#333' }}>Water Intake (Goal: 8)</h5>
                                            <ResponsiveContainer>
                                                <PieChart>
                                                    <Pie
                                                        data={waterChartData}
                                                        dataKey="value"
                                                        nameKey="name"
                                                        cx="50%"
                                                        cy="50%"
                                                        outerRadius={80}
                                                        label
                                                    >
                                                        <Cell fill="#42a5f5" />
                                                        <Cell fill="#e0e0e0" />
                                                    </Pie>
                                                    <Tooltip />
                                                    <Legend />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                    {/* Calories Distribution Pie Chart */}
                                    <div style={{ marginTop: '2rem', width: '100%', height: '250px' }}>
                                        <h5 style={{ marginBottom: '0.5rem', color: '#333' }}>Calories Distribution</h5>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={calorieDistribution}
                                                    dataKey="value"
                                                    nameKey="name"
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius={80}
                                                    label
                                                >
                                                    {calorieDistribution.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                                <Legend />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>

                                    {/* Body Metrics Breakdown */}
                                    <div style={{ marginTop: '2rem' }}>
                                        <h5 style={{ marginBottom: '0.5rem', color: '#333' }}>Body Metrics Breakdown</h5>
                                        <ul style={{ paddingLeft: '20px', fontSize: '1rem' }}>
                                            <li><strong>BMI:</strong> {weightMetrics.bmi || 'N/A'}</li>
                                            <li><strong>Fat Percentage:</strong> {weightMetrics.fat || 'N/A'}%</li>
                                            <li><strong>Skeletal Muscle Percentage:</strong> {weightMetrics.skeletalMuscle || 'N/A'}%</li>
                                            <li><strong>Fat Weight:</strong> {weightMetrics.fatWeight || 'N/A'} kg</li>
                                            <li><strong>Skeletal Muscle Weight:</strong> {weightMetrics.skeletalMuscleWeight || 'N/A'} kg</li>
                                            <li><strong>Visceral Fat:</strong> {weightMetrics.visceralFat || 'N/A'}</li>
                                            <li><strong>Bone Mass:</strong> {weightMetrics.boneMass || 'N/A'} kg</li>
                                            <li><strong>Metabolism:</strong> {weightMetrics.metabolism || 'N/A'} kcal/day</li>
                                            <li><strong>Obesity Degree:</strong> {weightMetrics.obesity || 'N/A'}%</li>
                                            <li><strong>Lean Body Mass:</strong> {weightMetrics.leanBodyMass || 'N/A'} kg</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SummaryPage;
