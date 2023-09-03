import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utils/langConstant';
import { openai } from '../utils/OpenAi';
import { API_OPTIONS, BASE_IMAGE_URL, SEARCH_MOVIE_URL, TheShining } from '../utils/constant';
import { addSearchMovies } from '../utils/slices/gptSlice';
import GptSearchResults from './GptMovieSuggestions';

const GptSearchBar = () => {
    const [error, setError] = useState(null);
    const dispatch=useDispatch();
    const currentLanguage=useSelector((store)=>store.config.lang)
    const searchText=useRef(null)
    const searchMovie=async(movie)=>{
        try {
            const data = await fetch(SEARCH_MOVIE_URL + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        
            if (!data.ok) {
              // If the response status is not OK (e.g., 404 or 500), throw an error
              throw new Error(`Failed to fetch data. Status: ${data.status}`);
            }
        
            const json = await data.json();
            return json.results;
          } catch (error) {
            console.error("Error:", error.message);
           
          }
        }
        const handleGptSearchClick = async () => {
            const searchTextValue = searchText.current.value;
          
            // Make an API call to the GPT API to search results
            const gptQuery =
              "Act as a Movie Recommendation system and suggest some movies for the query: " +
              searchTextValue +
              ". Only give me names of 5 movies, comma-separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
          
            let gptResults;
          
            try {
              gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',
              });
            
              // Handle the response here
            } catch (error) {
              // Handle errors here
              console.error('Error:', error.response ? error.response.data : error.message);
              setError("🙇‍♂️Sorry! I have exceeded the rate limit allowed for API key")
              return; // Exit the function if there's an error
            }
          
            const gptMovies = gptResults?.choices[0]?.message?.content.split(',');
          
            // Handle errors for searchMovie calls
            const promiseArr = gptMovies.map((item) => searchMovie(item));
            let tmdbResults;
          
            try {
              tmdbResults = await Promise.all(promiseArr);
            } catch (error) {
              // Handle errors here
              console.error('Error fetching movie results:', error);
              return; // Exit the function if there's an error
            }
          
            // Assuming 'dispatch' and 'addSearchMovies' are defined and work as intended
            dispatch(addSearchMovies({ movieNames: gptMovies, movieResults: tmdbResults }));
          };
          
        
    return (
        <div className='absolute w-1/2 top-[30%]'>  
<form onSubmit={(e)=>e.preventDefault()}>   
    <div className="relative">
        <input type="search" id="default-search" ref={searchText} className="block w-full p-2 pl-6 text-md text-gray-100 border border-gray-500 rounded-lg bg-black bg-opacity-80 focus:ring-green-500 focus:border-green-500 " placeholder={lang[currentLanguage].onPlaceholder} />
        <button type="submit" onClick={handleGptSearchClick} className="text-white absolute right-0.5 bottom-0.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 ">
        {lang[currentLanguage].search}
            </button>
    </div>
</form>
{error && <div className='rounded-lg bg-black border-red-500 border-2 text-red-500 text-xl font-medium p-4 text-center mt-2'>
    {error}
</div>}
    </div>
  )
}

export default GptSearchBar