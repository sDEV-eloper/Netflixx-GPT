import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return (
    movies.addNowPlayingMovies && (
      <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4  relative z-20  max-w-screen-xl overflow-hidden">
      <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.addPopularMovies} />
      <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
    </div>
    </div>
    )
  )
}

export default SecondaryContainer