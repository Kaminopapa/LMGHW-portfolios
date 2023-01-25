import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface initial {
  tab: string;
}

const initialState: initial = {
  tab: "about_me",
};

const navSlice = createSlice({
  name: "select_nav",
  initialState,
  reducers: {
    selectTab(state, action: PayloadAction<string>) {
      state.tab = action.payload;
    },
  },
});

export const { selectTab } = navSlice.actions;
export default navSlice.reducer;
