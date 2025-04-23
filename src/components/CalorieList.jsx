import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEntry, editEntry } from '../features/calories/calorieSlice';

const CalorieList = ({ date }) => {
  const entries = useSelector((state) => state.calories.entries[date] || []);
  const dispatch = useDispatch();

  const [editIndex, setEditIndex] = useState(null);
  const [editFood, setEditFood] = useState('');
  const [editCalories, setEditCalories] = useState('');

  const handleDelete = (index) => {
    dispatch(deleteEntry({ date, index }));
  };

  const startEdit = (index, entry) => {
    setEditIndex(index);
    setEditFood(entry.food);
    setEditCalories(entry.calories);
  };

  const saveEdit = () => {
    dispatch(editEntry({ date, index: editIndex, food: editFood, calories: Number(editCalories) }));
    setEditIndex(null);
    setEditFood('');
    setEditCalories('');
  };

  const totalCalories = entries.reduce((sum, item) => sum + item.calories, 0);

  return (
    <div>
      <h2>Entries for {date}</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  value={editFood}
                  onChange={(e) => setEditFood(e.target.value)}
                />
                <input
                  type="number"
                  value={editCalories}
                  onChange={(e) => setEditCalories(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {entry.food} — {entry.calories} cal
                <button className="edit" onClick={() => startEdit(index, entry)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <p className="total-calories">Total Calories: {totalCalories}</p>
    </div>
  );
};

export default CalorieList;
