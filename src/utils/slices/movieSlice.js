import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        addNowPlayingMovies: null,
    addPopularMovies: null,
    addTopRatedMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.addNowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state, action)=>{
            state.addTrailerVideo=action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.addPopularMovies=action.payload;
        },
        addTopRatedMovies:(state, action)=>{
            state.addTopRatedMovies=action.payload;
        }
        }
})
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies}=movieSlice.actions;
export default movieSlice.reducer;