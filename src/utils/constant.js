export const netflixLogo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/popular?&page=1";
export const TOP_RATED_URL =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1";
export const UPCOMING_URL =
  "https://api.themoviedb.org/3/movie/upcoming?&page=1";
export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";
export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGE = [
  { id: "en", name: "English" },
  { id: "hin", name: "Hindi" },
  { id: "spn", name: "Spanish" },
];
export const  OPENAI_API_KEY=process.env.REACT_APP_OPENAI_KEY

