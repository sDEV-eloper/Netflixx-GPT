import React from 'react'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='border-4 h-full p-32'>
      <h1 className='text-4xl font-bold  '>{title}</h1>
      <p className="p-4 w-2/5">{overview} </p>
      <div className='flex gap-2'>
        <button className='border flex py-1 items-center gap-2 rounded px-6 shadow-lg'><FaPlay/> Play</button>
        <button className='flex gap-2 items-center border rounded py-1 px-6 shadow-lg bg-black bg-opacity-25'><AiOutlineInfoCircle/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle