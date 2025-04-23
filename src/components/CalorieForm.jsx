import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../features/calories/calorieSlice';

const CalorieForm = ({ date }) => {
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!food || !calories) return;
    dispatch(addEntry({ date, food, calories: Number(calories) }));
    setFood('');
    setCalories('');
    };

    return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
        <input
        type="text"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        placeholder="Food item"
        className="border px-2 py-1 rounded"
    />
    <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories"
        className="border px-2 py-1 rounded"
    />
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Entry
    </button>
    </form>
);
};

export default CalorieForm;
