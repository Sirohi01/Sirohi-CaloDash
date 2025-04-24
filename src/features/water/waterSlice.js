import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const waterSlice = createSlice({
    name: 'water',
    initialState: {
        intake: {
        [today]: 0,
        },
    },
    reducers: {
        addGlass: (state) => {
        const today = dayjs().format('YYYY-MM-DD');
        if (!state.intake[today]) {
            state.intake[today] = 0;
        }
        state.intake[today] += 1;
        },
    },
});

export const { addGlass } = waterSlice.actions;
export default waterSlice.reducer;
