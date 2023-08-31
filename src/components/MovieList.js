import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  console.log("movies: ", movies);
  return (
    <div>
        <div>
            <h1>{title}</h1>
        </div>
        { movies.map((movie)=>(
       
        <MovieCard key={movie.id} posterPath={movie.posterPath}  />
    
        ))
            
        }
    </div>
  )
}

export default MovieList