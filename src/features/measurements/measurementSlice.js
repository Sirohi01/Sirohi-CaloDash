import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  measurements: []
};

const measurementSlice = createSlice({
  name: 'measurements',
  initialState,
  reducers: {
    addBodyMeasurements: (state, action) => {
      const { date, ...rest } = action.payload;
      // Wrap the rest of the body part data under `data` to match SummaryPage usage
      state.measurements.push({ date, data: rest });
    }
  }
});

export const { addBodyMeasurements } = measurementSlice.actions;
export default measurementSlice.reducer;
