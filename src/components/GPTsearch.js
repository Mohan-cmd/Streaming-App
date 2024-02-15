import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/LanguageConstants";
import { useRef } from "react";
import openAi from "../utils/openAi";
import { MOVIE_API } from "../utils/Constants";
import { API_OPTIONS } from "../utils/Constants";
import { useState } from "react";
import MovieList from "./MovieList";
import { addGPTMovieResults } from "../utils/searchSlice";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
const GPTsearch=()=>{
    const dispatch= useDispatch();
    const setlang=useSelector((store)=>store.config.langSelValue);
    const searchtext=useRef();
    const [MoviesList,setMoviesList] =useState(null);
    const searchMovieTMDB =async(movie)=>{
       const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
       const json =await data.json();
        return json.results;
    }
    const handleSearchClick =async ()=>{
        const gptQuery="Act as a  Movie Recommendtion system and suggest some movies for the query "+searchtext?.current?.value +". Only give names of 5 movies, comma seperated like the following example result . Example: movie1,movie2";
        const chatCompletion = await openAi.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
          });
        
       // console.log("chat data si:")
        const gptMovies=chatCompletion?.choices[0]?.message?.content.split(",");  // gives us arry of movie names
        const promisesArray = gptMovies.map((movie)=> searchMovieTMDB(movie));  // returns array of promises [promises1,promise2]....
        const tmdbresults= await Promise.all(promisesArray)
       // console.log("req data is: ")
       // console.log(tmdbresults)
    //setMoviesList(tmdbresults); 
       dispatch(addGPTMovieResults({movieNames: gptMovies, movieResults: tmdbresults}))
    }
   return(
    <div >
      <div className="pt-[8%] flex justify-center ">
        <form className="w-full md:w-1/2 p-2 md:m-6 bg-black grid grid-cols-12" onSubmit={e=>e.preventDefault()}>
          <input ref={searchtext} type="text" className="border border-white col-span-9 p-2 m-2" placeholder={lang[setlang].gptSearchPlaceholder}></input>
          <button className="bg-purple-800 ml-2 col-span-3 rounded-md p-2 m-2" onClick={handleSearchClick}>{lang[setlang].search}</button>
        </form>
      </div>  
        {/* {MoviesList && <MovieList movieList={MoviesList} type={"Search results"}/>} */}
    </div>
   )
}

export default GPTsearch;