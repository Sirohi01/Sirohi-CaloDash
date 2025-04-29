    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { addBodyMeasurements } from '../features/measurements/measurementSlice';
    import './BodyMeasurementForm.css';
    import {
    FaRulerHorizontal,
    FaChild,
    FaMale,
    FaArrowUp,
    FaArrowDown,
    FaHeadSideMask,
    FaCalendarAlt,
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
        });
    };

    return (
        <div className="measurement-form-container">
        <h2>Track Body Measurements</h2>
        <form onSubmit={handleSubmit} className="measurement-form-grid">
            <div className="form-group full-width">
            <label htmlFor="date">
                <FaCalendarAlt /> Date
            </label>
            <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            </div>

            {['chest', 'waist', 'hips', 'arms', 'thighs', 'neck'].map((part) => (
            <div key={part} className="form-group">
                <label htmlFor={part}>
                {iconMap[part]} {part.charAt(0).toUpperCase() + part.slice(1)} (cm)
                </label>
                <input
                name={part}
                type="number"
                value={formData[part]}
                onChange={handleChange}
                required
                />
            </div>
            ))}

            <button type="submit" className="submit-btn">Save Measurements</button>
        </form>
        </div>
    );
    };

    export default BodyMeasurementForm;
