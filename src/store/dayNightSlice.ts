import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface initial {
  isDay: boolean;
}

const initialState: initial = {
  isDay: false,
};

const dayNightSlice = createSlice({
  name: 'dayNightMode',
  initialState,
  reducers: {
    toggleMode(state, action: PayloadAction<boolean>) {
      state.isDay = action.payload;
    },
  },
});

export const { toggleMode } = dayNightSlice.actions;
export default dayNightSlice.reducer;
