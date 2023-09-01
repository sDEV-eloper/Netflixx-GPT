import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/slices/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_URL } from "../utils/constant";


const useUpcomingMovies = () => {
  const dispatch=useDispatch();
  const upcomingMovies=useSelector((store)=>store.movies.upcomingMovies)
    const getUpcomingMovies=async()=>{
        const data=await fetch(UPCOMING_URL, API_OPTIONS);
        const json=await data.json();
        dispatch(addUpcomingMovies(json.results))
    }
    useEffect(()=>{
       !upcomingMovies && getUpcomingMovies()
    },[])
}

export default useUpcomingMovies