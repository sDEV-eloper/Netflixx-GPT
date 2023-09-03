import React, { useState } from 'react'
import { POSTER_BASE_URL } from '../utils/constant'
import VideoTrailerBg from './VideoTrailerBg'

const MovieCard = ({posterPath,onClick, isSelected,  id}) => {
    if (!posterPath) return null;
  return (
    <>
    <div className='flex flex-col gap-4'>
    <div className="w-36 md:w-48 p-4 hover:scale-110 transition duration-600 cursor-pointer flex flex-col gap-8 " onClick={onClick}>
        <img src={POSTER_BASE_URL+posterPath} alt="" className='rounded-lg border-gray-600'/>
        </div>
    {isSelected &&
     <div className='border text-white flex flex-col items-center w-full h-full' >
     <div className='border left-0'>
     <VideoTrailerBg id={id}/>
     </div>
     </div>
     }
     </div>
     </>
  )
}

export default MovieCard