import { useSelector } from "react-redux";
import GPTsearch from "./GPTsearch"
import MovieList from "./MovieList";


const GPTMovieSuggestion=()=>{
    const{movieResults, movieNames} =useSelector((store)=>store?.search)
    if(movieNames==null) return;
    return(
        <div className="bg-black m-4 p-2 opacity-90">
           <div className="">
            {movieNames.map((movieName,index)=><MovieList key={movieName} type={movieName} movieList={movieResults[index]}/>)}
            
           </div>
        </div>
    )
}

export default GPTMovieSuggestion;