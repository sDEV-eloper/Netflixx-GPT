import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMultipleTrailerVideo } from '../utils/slices/movieSlice';
import { API_OPTIONS } from '../utils/constant';

const useMultipleTrailer = (id) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS);
    const json = await data.json();
    const trailer = json.results.filter((item) => item.type === "Trailer");
    const exactTrailer=trailer.filter((item)=> item.name==="Main Trailer"|| item.name==="Official Trailer")
    const onlyOneTrailer = trailer.length ? exactTrailer[0] : json.results[0];
    dispatch(addMultipleTrailerVideo(onlyOneTrailer));
  };

  useEffect(() => {
     // Check if trailerVideo is already available in the Redux store before fetching
    //  if (!trailerVideo) {
      getMovieTrailer();
    //  }
  }, []); 
  return getMovieTrailer;
};

export default useMultipleTrailer;
