    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { addBodyMeasurements } from '../features/measurements/measurementSlice';
    import './BodyMeasurementForm.css';
    import {
    FaRulerHorizontal, FaChild, FaMale, FaArrowUp, FaArrowDown,
    FaHeadSideMask, FaCalendarAlt, FaRegStickyNote,
    FaWeight, FaArrowsAltV, FaInfoCircle
    } from 'react-icons/fa';

    const iconMap = {
    chest: <FaMale />,
    waist: <FaRulerHorizontal />,
    hips: <FaChild />,
    arms: <FaArrowUp />,
    thighs: <FaArrowDown />,
    neck: <FaHeadSideMask />,
    };

    const BodyMeasurementForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        date: '',
        chest: '',
        waist: '',
        hips: '',
        arms: '',
        thighs: '',
        neck: '',
        height: '',
        weight: '',
        notes: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBodyMeasurements({ date: new Date(formData.date).toISOString(), ...formData }));
        setFormData({
        date: '',
        chest: '',
        waist: '',
        hips: '',
        arms: '',
        thighs: '',
        neck: '',
        height: '',
        weight: '',
        notes: '',
        });
    };

    const calculateBMI = () => {
        const heightMeters = formData.height / 100;
        const bmi = formData.weight && formData.height ? (formData.weight / (heightMeters * heightMeters)).toFixed(2) : null;
        return bmi;
    };

    return (
        <div className="measurement-form-container">
        <h2>📏 Track Body Measurements</h2>

        <section className="measurement-theory">
            <h3><FaInfoCircle /> Why Track Body Measurements?</h3>
            <p>
                Your journey toward fat loss and muscle gain isn’t just reflected on a weighing scale. In fact, body weight can be misleading due to water retention, muscle mass, or even clothing. That’s why tracking body measurements is one of the most powerful ways to:
            </p>

            <div className="benefits-grid">
                <div>
                <h4>📉 More Accurate than Weight</h4>
                <p>Fat loss often doesn't show as weight change. Measuring inches gives real progress insight that the scale misses.</p>
                </div>
                <div>
                <h4>📊 Visual Progress Motivation</h4>
                <p>Seeing reduced waist size or increased arm size boosts confidence and helps stay consistent with diet and exercise.</p>
                </div>
                <div>
                <h4>🧠 Mental Reinforcement</h4>
                <p>Non-scale victories reduce stress and anxiety. Progress isn't always linear—measurements help maintain mental clarity.</p>
                </div>
                <div>
                <h4>🔬 Track Muscle vs Fat</h4>
                <p>Gain muscle, lose fat—yet scale stays still. Measurements show muscle gain in arms, thighs, chest while waist shrinks.</p>
                </div>
                <div>
                <h4>🧬 Better Health Indicators</h4>
                <p>Waist-to-hip ratio & neck circumference are predictors of metabolic and cardiovascular health—essential for longevity.</p>
                </div>
                <div>
                <h4>🏆 Personalized Insights</h4>
                <p>Each body is unique. Measurement trends show where you gain/lose fat first, so you can adjust workouts accordingly.</p>
                </div>
            </div>

            <div className="quick-tips">
                <h4>📌 Pro Tips for Accurate Tracking:</h4>
                <ul>
                <li>  Always measure at the same time of day (morning preferred).</li>
                <li>  Wear tight clothing or measure without clothing.</li>
                <li>  Use a mirror or a second person for hard-to-reach areas.</li>
                <li>  Keep posture upright and body relaxed when measuring.</li>
                <li>  Log your data consistently every 7 or 14 days.</li>
                </ul>
            </div>
            </section>


        <form onSubmit={handleSubmit} className="measurement-form-grid">
            <div className="form-group full-width">
            <label htmlFor="date"><FaCalendarAlt /> Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>

            {['chest', 'waist', 'hips', 'arms', 'thighs', 'neck'].map((part) => (
            <div key={part} className="form-group">
                <label htmlFor={part}>{iconMap[part]} {part.charAt(0).toUpperCase() + part.slice(1)} (cm)</label>
                <input type="number" name={part} value={formData[part]} onChange={handleChange} required />
            </div>
            ))}

            <div className="form-group">
            <label htmlFor="height"><FaArrowsAltV /> Height (cm)</label>
            <input type="number" name="height" value={formData.height} onChange={handleChange} />
            </div>

            <div className="form-group">
            <label htmlFor="weight"><FaWeight /> Weight (kg)</label>
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
            </div>

            <div className="form-group full-width">
            <label htmlFor="notes"><FaRegStickyNote /> Notes</label>
            <textarea name="notes" rows="2" placeholder="Eg. Felt bloated today, skipped workout" value={formData.notes} onChange={handleChange}></textarea>
            </div>

            {calculateBMI() && (
            <div className="form-group full-width bmi-result">
                <p><strong>Calculated BMI:</strong> {calculateBMI()} – {
                calculateBMI() < 18.5 ? 'Underweight' :
                calculateBMI() < 25 ? 'Normal' :
                calculateBMI() < 30 ? 'Overweight' : 'Obese'
                }</p>
            </div>
            )}

            <button type="submit" className="submit-btn">💾 Save Measurements</button>
        </form>

        <div className="measurement-tips">
            <h4>📝 Measurement Tips</h4>
            <ul>
            <li>Take measurements first thing in the morning.</li>
            <li>Use a soft tape measure, snug but not tight.</li>
            <li>Track every 7–14 days for consistency.</li>
            </ul>
        </div>
        </div>
    );
    };

    export default BodyMeasurementForm;
