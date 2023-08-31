import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((state)=>state.movies?.addNowPlayingMovies)
  console.log("movies on Secontainer: ", movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies}/>
    </div>
  )
}

export default SecondaryContainer