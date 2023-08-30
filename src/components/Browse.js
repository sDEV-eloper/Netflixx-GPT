import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  //fetch api and update store -call custom hook
  useNowPlayingMovies();

  return (
    <>
    <div className='flex justify-between h-full'>
  <Header/>
  <MainContainer/>
  <SecondaryContainer/>
    </div>
    </>
  )
}

export default Browse