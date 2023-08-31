import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((state)=>state.movies)
  console.log("movies on Secontainer: ", movies);
  return (
    movies.addNowPlayingMovies && (
       <div>
      <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
    </div>
    )
  )
}

export default SecondaryContainer