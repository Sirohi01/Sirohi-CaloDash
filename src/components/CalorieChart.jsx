    import React from 'react';
    import { useSelector } from 'react-redux';
    import { Bar } from 'react-chartjs-2';
    import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

    ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

    const CalorieChart = () => {
    const entries = useSelector((state) => state.calories.entries);

    const dates = Object.keys(entries).sort();
    const data = dates.map(date =>
        entries[date].reduce((sum, item) => sum + item.calories, 0)
    );

    const chartData = {
        labels: dates,
        datasets: [
        {
            label: 'Calories',
            data,
            backgroundColor: '#007bff',
            borderRadius: 6,
        },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
        legend: { display: false },
        },
        scales: {
        y: {
            beginAtZero: true,
            ticks: { stepSize: 100 },
        },
        },
    };

    return (
        <div className="chart-container" style={{ marginTop: '30px' }}>
        <h2 style={{ textAlign: 'center' }}>Daily Calorie Intake</h2>
        <Bar data={chartData} options={options} />
        </div>
    );
    };

    export default CalorieChart;
