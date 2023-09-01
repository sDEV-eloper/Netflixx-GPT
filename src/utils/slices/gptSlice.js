import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptView: (state, action) => {
      return {
        showGptSearch: !state.showGptSearch,
      };
    },
  },
});

export const { toggleGptView } = gptSlice.actions;
export default gptSlice.reducer;
