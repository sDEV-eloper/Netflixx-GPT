import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS,  TOP_RATED_URL } from '../utils/constant'
import { addNowPlayingMovies, addTopRatedMovies } from '../utils/slices/movieSlice'

//Fetch data from Api and update store
const useTopRatedMovies = () => {
    const dispatch=useDispatch()
    const topRatedMovies = useSelector(
      (store) => store.movies.addTopRatedMovies
    );
    console.log("TopRatedMOvies", topRatedMovies)
    const getTopRatedMovies=async()=>{
      try {
       const data= await fetch(TOP_RATED_URL, API_OPTIONS)
       const json = await data.json();
       console.log("JSON ", json)
       dispatch(addTopRatedMovies(json.results))
     } catch (error) {
       console.error('Error fetching data:', error);
     }
    }
   
    useEffect(()=>{
    !topRatedMovies && getTopRatedMovies();
    },[])
}

export default useTopRatedMovies