import React from 'react'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] absolute bg-gradient-to-r from-[#151515]'>
      <h1 className='text-4xl font-bold text-white pl-4 '>{title}</h1>
      <p className="p-4  w-2/5 text-gray-200">{overview} </p>
      <div className='flex gap-2 p-4'>
        <button className=' bg-white border flex py-1 items-center gap-2 rounded px-6 shadow-lg hover:bg-gray-300'><FaPlay/> Play</button>
        <button className=' border flex gap-2 items-center  rounded py-1 px-6 shadow-lg bg-black bg-opacity-80 text-white hover:bg-gray-800'><AiOutlineInfoCircle/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle