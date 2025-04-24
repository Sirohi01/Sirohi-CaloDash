import { configureStore } from '@reduxjs/toolkit';
import calorieReducer from '../features/calories/calorieSlice';
import waterReducer from '../features/water/waterSlice';

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
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
