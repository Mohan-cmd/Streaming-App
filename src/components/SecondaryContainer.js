import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer =()=>{
  const movies =  useSelector((store)=>(store.movies.nowPlayingMovies))
  const trendingMovies= useSelector((store)=>(store.movies?.trendingMovies))
  const upcomingMovies=useSelector((store)=>(store.movies?.upcomingMovies))
  //if(movies==null) return;
 // if(trendingMovies==null) return;
  console.log("Movielist primary is:")
  console.log(movies)

   return(
    <div className="bg-black">
    <div className="mt-0 md:-mt-52 relative z-2">
    { movies&& <MovieList movieList={movies} type={"Popular Movies"}/>}
     { trendingMovies &&<MovieList movieList={trendingMovies} type={"Top Rated Movies"}/>}
     {upcomingMovies && <MovieList movieList={upcomingMovies} type={"Upcoming Movies"}/>}
    </div>
    </div>
   )
}

export default SecondaryContainer;