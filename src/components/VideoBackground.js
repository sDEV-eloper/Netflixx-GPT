import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);

  useTrailerVideo(id);

  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=39xUiR3paT9I2N9i&`} //autoplay=1&mute=1
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
