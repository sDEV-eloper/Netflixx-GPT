
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  const movieDetail=[
    {
    title:"Now Playing",
    movies: movies?.addNowPlayingMovies
  },
    {
    title:"Popular",
    movies: movies?.addPopularMovies
  },
    {
    title:"Upcoming Movies",
    movies: movies?.upcomingMovies
  },
    {
    title:"Top Rated",
    movies: movies?.addTopRatedMovies
  },
]
  return (
    movies.addNowPlayingMovies && (
      <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4  relative z-20  max-w-screen-xl overflow-hidden">
        {movieDetail.map((item)=>
      <MovieList title={item.title} movies={item.movies} />
        )}
    </div>
    </div>
    )
  )
}

export default SecondaryContainer