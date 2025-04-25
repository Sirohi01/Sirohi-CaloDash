import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWeightEntry } from '../features/weight/weightSlice';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const calculateMetrics = (weight, height, age) => {
    const bmi = weight / Math.pow(height / 100, 2);
    const fat = 1.2 * bmi + 0.23 * age - 5.4;
    const fatWeight = (fat / 100) * weight;
    const skeletalMuscle = 40 - (fat / 2);
    const skeletalMuscleWeight = (skeletalMuscle / 100) * weight;
    const visceralFat = Math.max(1, Math.min(20, (fat / 10)));
    const boneMass = weight * 0.04;
    const metabolism = 10 * weight + 6.25 * height - 5 * age + 5;
    const obesity = (bmi / 25) * 100;
    const leanBodyMass = weight - fatWeight;

    return {
        bmi: bmi.toFixed(1),
        fat: fat.toFixed(1),
        fatWeight: fatWeight.toFixed(1),
        skeletalMuscle: skeletalMuscle.toFixed(1),
        skeletalMuscleWeight: skeletalMuscleWeight.toFixed(1),
        visceralFat: visceralFat.toFixed(1),
        boneMass: boneMass.toFixed(1),
        metabolism: metabolism.toFixed(1),
        obesity: obesity.toFixed(1),
        leanBodyMass: leanBodyMass.toFixed(1),
    };
};

const WeightTracker = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        date: '',
        weight: '',
        height: '',
        age: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const metrics = calculateMetrics(+formData.weight, +formData.height, +formData.age);
        dispatch(addWeightEntry({ ...formData, metrics }));
        alert('Weight data saved!');
        setFormData({ date: '', weight: '', height: '', age: '' });
    };

    const pieData = [
        { name: 'Fat', value: +formData.weight * 0.2 },
        { name: 'Lean', value: +formData.weight * 0.8 },
    ];

    return (
        <div className="tracker-card">
            <h2>Weight Tracker</h2>

            {/* Form to Input Data */}
            <div className="form-section">
                <form onSubmit={handleSubmit} className="tracker-form">
                    <input
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                    />
                    <input
                        name="weight"
                        type="number"
                        placeholder="Weight (kg)"
                        required
                        onChange={handleChange}
                        value={formData.weight}
                    />
                    <input
                        name="height"
                        type="number"
                        placeholder="Height (cm)"
                        required
                        onChange={handleChange}
                        value={formData.height}
                    />
                    <input
                        name="age"
                        type="number"
                        placeholder="Age"
                        required
                        onChange={handleChange}
                        value={formData.age}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Introduction Section */}
            <div className="intro">
                <p>Tracking your weight and body metrics is an essential part of a healthy lifestyle. It helps in setting clear goals, understanding your body's composition, and ensuring you're on track to meet your fitness objectives.</p>
            </div>

            {/* Benefits Section */}
            <div className="benefits">
                <h3>Benefits of Tracking Weight</h3>
                <ul>
                    <li><strong>Improved Accountability:</strong> Regular tracking helps you stay on top of your goals.</li>
                    <li><strong>Informed Decisions:</strong> Understanding your body’s composition gives you better insight into your progress.</li>
                    <li><strong>Better Motivation:</strong> Seeing positive trends over time encourages continued effort.</li>
                    <li><strong>Health Monitoring:</strong> Regularly checking your weight and other metrics can highlight health issues early.</li>
                </ul>
            </div>

            {/* Disadvantages Section */}
            <div className="disadvantages">
                <h3>Disadvantages of Focusing Solely on Weight</h3>
                <ul>
                    <li><strong>Weight Fluctuations:</strong> Weight can fluctuate due to water retention, muscle gain, or other factors.</li>
                    <li><strong>Doesn’t Account for Muscle Mass:</strong> Weight alone doesn’t distinguish between fat loss and muscle gain.</li>
                    <li><strong>Risk of Obsession:</strong> Focusing too much on the scale can lead to unhealthy habits or mental distress.</li>
                </ul>
            </div>

            {/* Pie Chart Visualizing Lean vs Fat Body Mass */}
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                        {pieData.map((_, index) => (
                            <Cell key={index} fill={['#ff7043', '#66bb6a'][index % 2]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

            {/* Displaying Calculated Metrics */}
            <div className="metrics">
                <h3>Body Metrics</h3>
                {formData.weight && formData.height && formData.age && (
                    <div className="metrics-details">
                        <p><strong>BMI:</strong> {calculateMetrics(+formData.weight, +formData.height, +formData.age).bmi}</p>
                        <p><strong>Body Fat Percentage:</strong> {calculateMetrics(+formData.weight, +formData.height, +formData.age).fat}%</p>
                        <p><strong>Fat Weight:</strong> {calculateMetrics(+formData.weight, +formData.height, +formData.age).fatWeight} kg</p>
                        <p><strong>Skeletal Muscle Percentage:</strong> {calculateMetrics(+formData.weight, +formData.height, +formData.age).skeletalMuscle}%</p>
                        <p><strong>Skeletal Muscle Weight:</strong> {calculateMetrics(+formData.weight, +formData.height, +formData.age).skeletalMuscleWeight} kg</p>
                        <p><strong>Visceral Fat Level:</strong> {calculateMetrics(+formData.weight, +formData.height, +formData.age).visceralFat}</p>
                        <p><strong>Bone Mass:</strong> {calculateMetrics(+formData.weight, +formData.height, +formData.age).boneMass} kg</p>
                        <p><strong>Metabolism:</strong> {calculateMetrics(+formData.weight, +formData.height, +formData.age).metabolism} kcal/day</p>
                        <p><strong>Obesity Degree:</strong> {calculateMetrics(+formData.weight, +formData.height, +formData.age).obesity}%</p>
                        <p><strong>Lean Body Mass:</strong> {calculateMetrics(+formData.weight, +formData.height, +formData.age).leanBodyMass} kg</p>
                    </div>
                )}
            </div>

            {/* Insights Section */}
            <div className="insights">
                <h3>Insights & Tips</h3>
                <p><strong>Keep track of your body fat percentage rather than just weight, as it gives a better picture of your health.</strong></p>
                <p><strong>Consistently monitor your progress, and make adjustments to your diet and exercise routine as needed.</strong></p>
                <p><strong>Focus on building lean muscle, which will help increase metabolism and promote fat loss.</strong></p>
            </div>
        </div>
    );
};

export default WeightTracker;
