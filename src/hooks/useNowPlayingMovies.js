import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, FETCH_URL, NOW_PLAYING_URL } from '../utils/constant'
import { addNowPlayingMovies } from '../utils/slices/movieSlice'

//Fetch data from Api and update store
const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
    const nowPlayingMovies = useSelector(
      (store) => store.movies.addNowPlayingMovies
    );

    const getNowPlayingMovies=async()=>{
      try {
       const data= await fetch(NOW_PLAYING_URL, API_OPTIONS)
       const json = await data.json();
       console.log("JSON ", json)
       dispatch(addNowPlayingMovies(json.results))
     } catch (error) {
       console.error('Error fetching data:', error);
     }
    }
   
    useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies