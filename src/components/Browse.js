import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

  //fetch api and update store -call custom hook
  useNowPlayingMovies();
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <>
    <div className='flex justify-between h-full '>
  <Header/>
  <div className='flex flex-col'> 
  <MainContainer/>
  <SecondaryContainer/>
  </div>
    </div>
    </>
  )
}

export default Browse