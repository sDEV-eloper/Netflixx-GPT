import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/slices/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, POPULAR_PLAYING_URL } from "../utils/constant";


const usePopularMovies = () => {
  const dispatch=useDispatch();
  const popularMovies=useSelector((store)=>store.movies.addPopularMovies)
    const getPopularMovies=async()=>{
        const data=await fetch(POPULAR_PLAYING_URL, API_OPTIONS);
        const json=await data.json();
        dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
       !popularMovies && getPopularMovies()
    },[])
}

export default usePopularMovies