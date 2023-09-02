
import { useSelector } from "react-redux";
import { NETFLIX_BG } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  return (
    <>
         <GptSearchBar />
     { !movieResults ?
     <div className="d-flex justify-content-center">
      OPENAI API KEY  LIMIT EXCEEDED
     </div>
     :
       <div className=" absolute  w-screen flex">
       <GptMovieSuggestions />
      </div>
    }
    </>
  );
};
export default GPTSearch;