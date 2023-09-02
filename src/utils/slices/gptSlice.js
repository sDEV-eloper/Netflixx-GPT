import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames:null,
    movieResults:null,
  },
  reducers: {
    toggleGptView: (state, action) => {
      return {
        showGptSearch: !state.showGptSearch,
      }
    },
    addSearchMovies:(state, action)=>{
      const {movieNames, movieResults}=action.payload
      state.movieNames=movieNames
      state.movieResults=movieResults
  },
  },
});

export const { toggleGptView, addSearchMovies } = gptSlice.actions;
export default gptSlice.reducer;
