

import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {

  return (
    <>
         <GptSearchBar />
       <div className=" absolute  w-screen flex">
       <GptMovieSuggestions />
      </div>
    
    </>
  );
};
export default GPTSearch;