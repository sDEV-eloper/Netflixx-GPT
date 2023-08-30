import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/slices/movieSlice'
import { API_OPTIONS } from '../utils/constant'

const useTrailerVideo = () => {

    const dispatch=useDispatch()

    const getMovieTrailor= async()=>{
        const data= await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS)
        const json= await data.json()
        console.log("TRailorJSON: ", json)
        const trailer=json.results.filter((item)=>item.type==="Trailer")
        const onlyOneTrailer=trailer.length ? trailer[0]: json.results[0]
        dispatch(addTrailerVideo(onlyOneTrailer))
        }
          useEffect(()=>{
            getMovieTrailor();
          },[])
}

export default useTrailerVideo