
export const HOME_PAGE_IMG="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const Logo ="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const TMDB_IMG_URL="https://image.tmdb.org/t/p/w500/"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
  };

export const Supported_LANGUAGES=[
    {identifier:"en" ,name:"English"},
    {identifier:"hindi", name:"Hindi"},
    {identifier:"spanish",name:"Spanish"}
] ;

export const OPENAI_KEY= process.env.REACT_APP_OPENAI_KEY ;

export const MOVIE_API="https://api.themoviedb.org/3/search/movie?query="