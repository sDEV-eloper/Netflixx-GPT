import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (cardId) => {
    if (selectedCard === cardId) {
      setSelectedCard(null); // Close the selected card if clicked again
    } else {
      setSelectedCard(cardId); // Show details for the clicked card
    }
  };
    return (
      <div className="px-6 ">
        <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} id={movie.id} posterPath={movie.poster_path}  
              onClick={() => handleCardClick(movie.id)}
              isSelected={selectedCard === movie.id} />
            ))}
          </div>
        </div>
      </div>
    );
  };
export default MovieList;