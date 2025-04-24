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

  
  const waterAdvice = percentage === 100 ? 
    'You have reached your water goal for today!' : 
    `Keep going! Drink ${maxGlasses - intake} more glasses to reach your goal.`;

  return (
    <div className="container water-tracker" style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '24px', color: '#333', textAlign: 'center' }}>💧 Water Intake Tracker</h2>
      
      <div className="tracker-body" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 150, height: 150, marginBottom: '1.5rem' }}>
          <CircularProgressbar
            value={percentage}
            text={`${intake}/${maxGlasses}`}
            styles={buildStyles({
              textColor: '#00bcd4',
              pathColor: '#00bcd4',
              trailColor: '#e0f7fa',
              strokeLinecap: 'round', 
            })}
          />
        </div>

        <div className="tracker-info" style={{ marginBottom: '1rem', textAlign: 'center' }}>
          <h4 style={{ color: '#00bcd4', margin: '10px 0' }}>Daily Goal: {maxGlasses} Glasses (2L)</h4>
          <p style={{ color: '#444', fontSize: '16px' }}>
            {waterAdvice}
          </p>
        </div>

        <button 
          onClick={handleAdd} 
          className="add-glass-btn" 
          style={{
            padding: '12px 20px', 
            backgroundColor: '#00bcd4', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '8px', 
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s',
          }}
        >
          <FaTint style={{ marginRight: '8px' }} />
          Add 1 Glass (250ml)
        </button>
        
        <div className="tracker-summary" style={{ marginTop: '2rem', textAlign: 'center', fontSize: '16px' }}>
          <h5 style={{ color: '#333', marginBottom: '10px' }}>Water Intake Summary for Today</h5>
          <div style={{ color: '#666' }}>
            <p><strong>{intake}</strong> Glasses ({intake * 250} ml) of water consumed today.</p>
            <p>{intake < maxGlasses ? `You need ${maxGlasses - intake} more glasses to hit your daily goal.` : 'Great job! You have completed your daily goal.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTracker;
