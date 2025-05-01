import { configureStore } from '@reduxjs/toolkit';
import calorieReducer from '../features/calories/calorieSlice';
import waterReducer from '../features/water/waterSlice';
import weightReducer from '../features/weight/weightSlice';
import measurementReducer from '../features/measurements/measurementSlice';
import userReducer from '../features/user/userSlice';

const loadState = () => {
  try {
    const data = localStorage.getItem('reduxState');
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const data = JSON.stringify({
      calories: state.calories,
      water: state.water,
      weight: state.weight,
      measurements: state.measurements,
      user: state.user,
    });
    localStorage.setItem('reduxState', data);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    calories: calorieReducer,
    water: waterReducer,
    weight: weightReducer,
    measurements: measurementReducer,
    user: userReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;