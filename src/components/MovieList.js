import MovieCard from "./MovieCard";
import { TMDB_IMG_URL } from "../utils/Constants";

const MovieList=({movieList,type})=>{

     console.log("movieList is:")
     console.log(movieList)
     return (
        <div className="p-3 bg-transparent">
          <h1 className="text-white py-2">{type}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex flex-row">
                {movieList.map((movie)=><MovieCard title={movie?.original_title} imgSource={TMDB_IMG_URL+movie?.poster_path} key={movie?.poster_path}/>)}
                </div>
            </div>
        </div>
    );
}

export default MovieList;