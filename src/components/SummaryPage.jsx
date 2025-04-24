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
    } from 'recharts';

    const COLORS = ['#ff7043', '#66bb6a', '#42a5f5', '#ffca28', '#ab47bc'];

    const SummaryPage = () => {
    const calorieEntries = useSelector((state) => state.calories.entries);
    const waterIntake = useSelector((state) => state.water.intake);
    const [expandedDate, setExpandedDate] = useState(null);

    const sortedDates = Object.keys(calorieEntries).sort((a, b) => new Date(b) - new Date(a));

    const toggleDate = (date) => {
        setExpandedDate((prev) => (prev === date ? null : date));
    };

    return (
        <div className="summary-page" style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Calories & Water Intake Summary</h2>
        <ul className="summary-list" style={{ listStyle: 'none', padding: 0 }}>
            {sortedDates.map((date) => {
            const items = calorieEntries[date];
            const totalCalories = items.reduce((sum, item) => sum + item.calories, 0);
            const totalWater = waterIntake[date] || 0;

            const waterChartData = [
                { name: 'Water Intake', value: totalWater },
                { name: 'Remaining', value: Math.max(8 - totalWater, 0) },
            ];

            return (
                <li key={date} className="summary-item" style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '1rem 1.5rem',
                marginBottom: '1rem',
                boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
                }}>
                <div onClick={() => toggleDate(date)} style={{ cursor: 'pointer' }}>
                    <h3>{date}</h3>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <span><FaAppleAlt color="#ff7043" /> <strong>{totalCalories} cal</strong></span>
                    <span><FaTint color="#42a5f5" /> <strong>{totalWater} glasses</strong></span>
                    </div>
                </div>

                {expandedDate === date && (
                    <div className="details" style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                    <h4 style={{ marginBottom: '0.5rem' }}>🍽 Food Items:</h4>
                    <ul style={{ marginBottom: '1rem' }}>
                        {items.map((entry, idx) => (
                        <li key={idx} style={{ marginBottom: '4px' }}>
                            • <strong>{entry.name}</strong>: {entry.calories} cal
                        </li>
                        ))}
                    </ul>

                    <h4 style={{ marginBottom: '0.5rem' }}>💧 Water Intake:</h4>
                    <p>{totalWater} glasses (≈ {totalWater * 250}ml)</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem' }}>
                        {/* Calorie Pie Chart */}
                        <div>
                        <h5 style={{ marginBottom: '0.5rem' }}>Calories Distribution</h5>
                        <div style={{ width: 300, height: 250 }}>
                            <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                data={items}
                                dataKey="calories"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label
                                >
                                {items.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                            </ResponsiveContainer>
                        </div>
                        </div>

                        {/* Water Intake Chart */}
                        <div>
                        <h5 style={{ marginBottom: '0.5rem' }}>Water Intake (Goal: 8)</h5>
                        <div style={{ width: 300, height: 250 }}>
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
