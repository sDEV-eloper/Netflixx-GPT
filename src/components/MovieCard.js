import React from 'react'
import { POSTER_BASE_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
    if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
        ImageCard
        <img src={POSTER_BASE_URL+posterPath} alt="" />
    </div>
  )
}

export default MovieCard