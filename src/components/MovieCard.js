import React, { useState } from 'react'
import { POSTER_BASE_URL } from '../utils/constant'
import VideoTrailerBg from './VideoTrailerBg'
// import { useSelector } from 'react-redux';
// import VideoTrailerBg from './VideoTrailerBg';

const MovieCard = ({posterPath, id}) => {
const [isRendered, setIsRendered]=useState(false)
  const handleClick=()=>{
    setIsRendered(!isRendered)
  }
    if (!posterPath) return null;
  return (
    <div className='flex flex-col gap-4'>
    <div className="w-36 md:w-48 p-4 hover:scale-110 transition duration-600 cursor-pointer" onClick={handleClick}>
        <img src={POSTER_BASE_URL+posterPath} alt="" className='rounded-lg border-gray-600'/>
    </div>
    {isRendered &&
     <div className='border flex justify-start '>
     <VideoTrailerBg id={id}/>
     </div>
     }
    </div>
  )
}

export default MovieCard