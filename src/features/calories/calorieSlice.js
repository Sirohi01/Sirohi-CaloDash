import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
    try {
    const serialized = localStorage.getItem('calorie_entries');
    return serialized ? JSON.parse(serialized) : {};
    } catch (e) {
    console.error("Error loading from localStorage", e);
    return {};
}
};

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('calorie_entries', JSON.stringify(state.entries));
    } catch (e) {
        console.error("Error saving to localStorage", e);
}
};

const initialState = {
    entries: loadFromLocalStorage(),
};

const calorieSlice = createSlice({
    name: 'calories',
    initialState,
    reducers: {
        addEntry: (state, action) => {
        const { date, food, calories } = action.payload;
        if (!state.entries[date]) state.entries[date] = [];
        state.entries[date].push({ food, calories });
        saveToLocalStorage(state);
        },
        deleteEntry: (state, action) => {
        const { date, index } = action.payload;
        if (state.entries[date]) {
            state.entries[date].splice(index, 1);
            saveToLocalStorage(state);
        }
        },
        editEntry: (state, action) => {
        const { date, index, food, calories } = action.payload;
        if (state.entries[date] && state.entries[date][index]) {
            state.entries[date][index] = { food, calories };
            saveToLocalStorage(state);
        }
        },
    },
});

export const { addEntry, deleteEntry, editEntry } = calorieSlice.actions;
export default calorieSlice.reducer;
