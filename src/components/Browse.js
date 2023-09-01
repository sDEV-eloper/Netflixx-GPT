import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import { NETFLIX_BG } from '../utils/constant';

const Browse = () => {

  //fetch api and update store -call custom hook
  useNowPlayingMovies();
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()


  const toggleGptValue=useSelector((store)=>store.gpt.showGptSearch)
  return (
    <>
    <div className=' absolute flex justify-between h-full '>
  <Header/>

{
  toggleGptValue?

  <div className="w-screen flex items-center justify-center">
    <img
      src={NETFLIX_BG}
      alt=""
    />
  <GptSearch/>
  </div>
  :
  <div className='flex flex-col'> 
  <MainContainer/>
  <SecondaryContainer/>
  </div>
}
    </div>
    </>
  )
}

export default Browse