import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface initial {
  tab: string;
  down: boolean;
}

const initialState: initial = {
  tab: "Home",
  down: false,
};

const navSlice = createSlice({
  name: "select_nav",
  initialState,
  reducers: {
    selectTab(state, action: PayloadAction<string>) {
      state.tab = action.payload;
    },
    isDown(state, action: PayloadAction<boolean>) {
      state.down = action.payload;
    },
  },
});

export const { selectTab, isDown } = navSlice.actions;
export default navSlice.reducer;
