
import useTrailerVideo from '../hooks/useTrailerVideo';
import { useSelector } from 'react-redux';

const VideoBackground = ({id}) => {

const trailerVideo =useSelector((state)=>state.movies?.addTrailerVideo)

useTrailerVideo(id);

  return (
    <div>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=39xUiR3paT9I2N9i` }title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
    </div>
  )
}

export default VideoBackground