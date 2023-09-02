import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utils/langConstant';
import { openai } from '../utils/OpenAi';
import { API_OPTIONS, BASE_IMAGE_URL, SEARCH_MOVIE_URL, TheShining } from '../utils/constant';
import { addSearchMovies } from '../utils/slices/gptSlice';
import GptSearchResults from './GptMovieSuggestions';

const GptSearchBar = () => {
    const dispatch=useDispatch();
    const currentLanguage=useSelector((store)=>store.config.lang)
    const searchText=useRef(null)
    const searchMovie=async(movie)=>{
        const data=await fetch(SEARCH_MOVIE_URL+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
         const json=await data.json()
         return json.results;
        }
        const handleGptSearchClick=async()=>{
            //Make api call  to gpt api to search results
            const gptQuery= "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      
            const gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',
            });
            const gptMovies=gptResults?.choices[0]?.message?.content.split(",")
            console.log("GptMovies", gptMovies)
            const promiseArr=gptMovies.map((item)=>searchMovie(item))
            const tmdbResults=await Promise.all(promiseArr)
            console.log(tmdbResults)
              dispatch(addSearchMovies({movieNames:gptMovies, movieResults:tmdbResults}))
            
        }
        
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
    </div>
  )
}

export default GptSearchBar