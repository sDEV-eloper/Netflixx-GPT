import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/slices/movieSlice'
import { API_OPTIONS } from '../utils/constant'

const useTrailerVideo = (id) => {

    const dispatch=useDispatch()
    const trailerVideo = useSelector((store) => store.movies.addTrailerVideo);

    const getMovieTrailer= async()=>{
        const data= await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS)
        const json= await data.json()
        const trailer=json.results.filter((item)=>item.type==="Trailer")
        const onlyOneTrailer=trailer.length ? trailer[0]: json.results[0]
        dispatch(addTrailerVideo(onlyOneTrailer))
        }
          useEffect(()=>{
            !trailerVideo && getMovieTrailer();
          },[])
}

export default useTrailerVideo