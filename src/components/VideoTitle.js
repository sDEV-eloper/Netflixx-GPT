import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='border-4 h-full p-32'>
      <h1 className='text-4xl font-bold  '>{title}</h1>
      <p className="p-4 w-2/5">{overview} </p>
      <div>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle