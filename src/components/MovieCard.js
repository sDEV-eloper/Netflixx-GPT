import React from 'react'
import { POSTER_BASE_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48'>
        <img src={POSTER_BASE_URL+posterPath} alt="" />
    </div>
  )
}

export default MovieCard