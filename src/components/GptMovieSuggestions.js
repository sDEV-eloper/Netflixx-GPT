
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  

  if (!movieNames) return null;

  return (
    <>
      <div className='absolute p-4 bg-black text-white w-screen'>
        <div className="bg-black text-white bg-opacity-90">
      {!movieResults ? (
        <h1  className='z-10  bg-black text-white'>Loading...</h1>
      )
       : (
            <ul className='flex flex-col overflow-x-scroll'>
              {movieNames.map((movieName, index) => (
                <MovieList
                  key={movieName}
                  title={movieName}
                  movies={movieResults[index]}
                />
              ))}
            </ul>
      )}
      </div>
      </div>
    </>
  );
};

export default GptMovieSuggestions;
