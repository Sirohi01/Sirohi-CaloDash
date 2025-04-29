import { configureStore } from '@reduxjs/toolkit';
import calorieReducer from '../features/calories/calorieSlice';
import waterReducer from '../features/water/waterSlice';
import weightReducer from '../features/weight/weightSlice';
import measurementReducer from '../features/measurements/measurementSlice';

// Load state from localStorage
const loadState = () => {
  try {
    const data = localStorage.getItem('reduxState');
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const data = JSON.stringify({
      calories: state.calories,
      water: state.water,
      weight: state.weight,
      measurements: state.measurements, 
    });
    localStorage.setItem('reduxState', data);
  } catch {
    // Ignore write errors
  }
};

// Get persisted state
const persistedState = loadState();

// Create store
const store = configureStore({
  reducer: {
    calories: calorieReducer,
    water: waterReducer,
    weight: weightReducer,
    measurements: measurementReducer,
  },
  preloadedState: persistedState,
});

// Subscribe to state changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
