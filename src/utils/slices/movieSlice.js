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
        addMultipleTrailerVideo:(state, action)=>{
            state.addMultipleTrailerVideo=action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.addPopularMovies=action.payload;
        },
        addTopRatedMovies:(state, action)=>{
            state.addTopRatedMovies=action.payload;
        },
        addUpcomingMovies:(state, action)=>{
            state.upcomingMovies=action.payload
        },
      
        }
})
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addMultipleTrailerVideo, addUpcomingMovies}=movieSlice.actions;
export default movieSlice.reducer;