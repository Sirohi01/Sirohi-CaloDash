import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGlass } from '../features/water/waterSlice';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaTint } from 'react-icons/fa';
import dayjs from 'dayjs';

const WaterTracker = () => {
  const dispatch = useDispatch();
  const today = dayjs().format('YYYY-MM-DD');
  const intake = useSelector((state) => state.water.intake?.[today] || 0);
  const maxGlasses = 8;
  const percentage = Math.min((intake / maxGlasses) * 100, 100);

  const handleAdd = () => {
    if (intake < maxGlasses) {
      dispatch(addGlass());
    }
  };

  return (
    <div className="container water-tracker">
      <h2>💧 Water Intake Tracker</h2>
      <div className="tracker-body">
        <div style={{ width: 120, height: 120 }}>
          <CircularProgressbar
            value={percentage}
            text={`${intake}/${maxGlasses}`}
            styles={buildStyles({
              textColor: '#00bcd4',
              pathColor: '#00bcd4',
              trailColor: '#e0f7fa',
            })}
          />
        </div>
        <button onClick={handleAdd} className="add-glass-btn">
          <FaTint style={{ marginRight: 8 }} />
          Add 1 Glass (250ml)
        </button>
      </div>
    </div>
  );
};

export default WaterTracker;
