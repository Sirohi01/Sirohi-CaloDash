import { configureStore } from '@reduxjs/toolkit';
import calorieReducer from '../features/calories/calorieSlice';
import waterReducer from '../features/water/waterSlice';
export const store = configureStore({
    reducer: {
        calories: calorieReducer,
        water: waterReducer,
    },
});
