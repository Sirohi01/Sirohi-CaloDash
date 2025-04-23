import { configureStore } from '@reduxjs/toolkit';
import calorieReducer from '../features/calories/calorieSlice';

export const store = configureStore({
    reducer: {
        calories: calorieReducer,
    },
});
