    // Updated SummaryPage.jsx
    import React, { useState, useMemo } from 'react';
    import { useSelector } from 'react-redux';
    import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
    } from 'recharts';
    import {
    FaTint,
    FaAppleAlt,
    FaMale,
    FaRulerHorizontal,
    FaChild,
    FaArrowUp,
    FaArrowDown,
    FaHeadSideMask,
    } from 'react-icons/fa';
    import './summarypage.css';

    const COLORS = ['#ff7043', '#66bb6a', '#42a5f5', '#ffca28', '#ab47bc'];

    const iconMap = {
    chest: <FaMale />, 
    waist: <FaRulerHorizontal />, 
    hips: <FaChild />, 
    arms: <FaArrowUp />, 
    thighs: <FaArrowDown />, 
    neck: <FaHeadSideMask />,
    };

    const SummaryPage = () => {
    const weightEntries = useSelector((state) => state.weight.entries);
    const calorieEntries = useSelector((state) => state.calories.entries);
    const waterIntake = useSelector((state) => state.water.intake);
    const measurementList = useSelector((state) => state.measurements.measurements);

    const measurementEntries = useMemo(() => {
        const map = {};
        measurementList.forEach(entry => {
        const dateOnly = new Date(entry.date).toISOString().split('T')[0];
        map[dateOnly] = entry.data || entry; // fallback
        });
        return map;
    }, [measurementList]);

    const [expandedDate, setExpandedDate] = useState(null);

    const sortedDates = useMemo(() => {
        return Object.keys(calorieEntries).sort((a, b) => new Date(b) - new Date(a));
    }, [calorieEntries]);

    const toggleDate = (date) => {
        setExpandedDate((prev) => (prev === date ? null : date));
    };

    return (
        <div className="summary-page">
        <h2 className="summary-title">Health Summary</h2>

        {sortedDates.length === 0 && (
            <p className="empty-state">No entries yet. Start tracking your meals, water, and body data!</p>
        )}

        <ul className="summary-list">
            {sortedDates.map((date) => {
            const items = calorieEntries[date];
            const totalCalories = items.reduce((sum, item) => sum + item.calories, 0);
            const totalWater = waterIntake[date] || 0;
            const weightMetrics = weightEntries[date]?.metrics || {};
            const bodyMeasurement = measurementEntries[date];

            const bodyCompositionData = [
                { name: 'Fat', value: parseFloat(weightMetrics.fatWeight || 0) },
                { name: 'Lean', value: parseFloat(weightMetrics.leanBodyMass || 0) },
            ];

            const waterChartData = [
                { name: 'Water Intake', value: totalWater },
                { name: 'Remaining', value: Math.max(16 - totalWater, 0) },
            ];

            const calorieDistribution = items.map((item) => ({
                name: item.name,
                value: item.calories,
            }));

            return (
                <li key={date} className="summary-item" onClick={() => toggleDate(date)}>
                <h3 className="summary-date">{date}</h3>
                <div className="summary-stats">
                    <span>
                    <FaAppleAlt color="#ff7043" /> <strong>{totalCalories} cal</strong>
                    </span>
                    <span>
                    <FaTint color="#42a5f5" /> <strong>{totalWater} glasses</strong>
                    </span>
                </div>

                {expandedDate === date && (
                    <div className="summary-expanded">
                    <h4 className="summary-section-title">🍽 Food Items</h4>
                    <ul className="summary-food-list">
                        {items.map((entry, idx) => (
                        <li key={idx}>• <strong>{entry.name}</strong>: {entry.calories} cal</li>
                        ))}
                    </ul>

                    <h4 className="summary-section-title">💧 Water Intake</h4>
                    <p>{totalWater} glasses (≈ {totalWater * 250}ml)</p>

                    <div className="summary-chart-group">
                        <div className="summary-chart">
                        <h5 className="summary-section-title">Body Composition</h5>
                        <ResponsiveContainer>
                            <PieChart>
                            <Pie data={bodyCompositionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                {bodyCompositionData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                        </div>

                        <div className="summary-chart">
                        <h5 className="summary-section-title">Water Intake (Goal: 8)</h5>
                        <ResponsiveContainer>
                            <PieChart>
                            <Pie data={waterChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                <Cell fill="#42a5f5" />
                                <Cell fill="#e0e0e0" />
                            </Pie>
                            <Tooltip />
                            <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="summary-full-width-chart">
                        <h5 className="summary-section-title">Calories Distribution</h5>
                        <ResponsiveContainer>
                        <PieChart>
                            <Pie data={calorieDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                            {calorieDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="body-matrix-breakdown">
                        <div className="summary-section-title">Body Metrics Breakdown</div>
                        <div className="body-matrix-grid">
                            <div className="body-matrix-card">
                            <div className="body-matrix-label">BMI</div>
                            <div className="body-matrix-value">{weightMetrics.bmi || 'N/A'}</div>
                            </div>
                            <div className="body-matrix-card">
                            <div className="body-matrix-label">Fat Percentage</div>
                            <div className="body-matrix-value">{weightMetrics.fat || 'N/A'}%</div>
                            </div>
                            <div className="body-matrix-card">
                            <div className="body-matrix-label">Skeletal Muscle %</div>
                            <div className="body-matrix-value">{weightMetrics.skeletalMuscle || 'N/A'}%</div>
                            </div>
                            <div className="body-matrix-card">
                            <div className="body-matrix-label">Fat Weight</div>
                            <div className="body-matrix-value">{weightMetrics.fatWeight || 'N/A'} kg</div>
                            </div>
                            <div className="body-matrix-card">
                            <div className="body-matrix-label">Skeletal Muscle Weight</div>
                            <div className="body-matrix-value">{weightMetrics.skeletalMuscleWeight || 'N/A'} kg</div>
                            </div>
                            <div className="body-matrix-card">
                            <div className="body-matrix-label">Visceral Fat</div>
                            <div className="body-matrix-value">{weightMetrics.visceralFat || 'N/A'}</div>
                            </div>
                            <div className="body-matrix-card">
                            <div className="body-matrix-label">Bone Mass</div>
                            <div className="body-matrix-value">{weightMetrics.boneMass || 'N/A'} kg</div>
                            </div>
                            <div className="body-matrix-card">
                            <div className="body-matrix-label">Metabolism</div>
                            <div className="body-matrix-value">{weightMetrics.metabolism || 'N/A'} kcal/day</div>
                            </div>
                            <div className="body-matrix-card">
                            <div className="body-matrix-label">Obesity Degree</div>
                            <div className="body-matrix-value">{weightMetrics.obesity || 'N/A'}%</div>
                            </div>
                            <div className="body-matrix-card">
                            <div className="body-matrix-label">Lean Body Mass</div>
                            <div className="body-matrix-value">{weightMetrics.leanBodyMass || 'N/A'} kg</div>
                            </div>
                        </div>
                    </div>


                    {bodyMeasurement && (
                        <div className="summary-measurements">
                        <h5 className="summary-section-title">📏 Body Measurements</h5>
                        <div className="measurement-card-container">
                            {Object.entries(bodyMeasurement).map(([part, value]) => (
                            <div key={part} className="measurement-card">
                                <div className="measurement-icon">{iconMap[part]}</div>
                                <div className="measurement-label">{part.charAt(0).toUpperCase() + part.slice(1)}</div>
                                <div className="measurement-value">{value} cm</div>
                            </div>
                            ))}
                        </div>
                        </div>
                    )}
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