    import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
    entries: {},
    };

    const weightSlice = createSlice({
    name: 'weight',
    initialState,
    reducers: {
        addWeightEntry: (state, action) => {
        const { date, weight, height, age, metrics } = action.payload;
        state.entries[date] = { weight, height, age, metrics };
        },
    },
    });

    export const { addWeightEntry } = weightSlice.actions;
    export default weightSlice.reducer;
