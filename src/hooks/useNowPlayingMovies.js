import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS, FETCH_URL } from '../utils/constant'
import { addNowPlayingMovies } from '../utils/slices/movieSlice'

//Fetch data from Api and update store
const useNowPlayingMovies = () => {
    const dispatch=useDispatch()

    const getNowPlayingMovies=async()=>{
      try {
       const data= await fetch(FETCH_URL, API_OPTIONS)
       if (!data.ok) {
         throw new Error('Network response was not ok');
       }
       const json = await data.json();
       console.log("JSON ", json)
       dispatch(addNowPlayingMovies(json?.results))
     } catch (error) {
       console.error('Error fetching data:', error);
     }
    }
   
    useEffect(()=>{
     getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies