import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

import { addNowPlayingMovies } from "../utils/movieSlice";


const useNowPlayingMovies =()=>{
    const dispatch=useDispatch();
    const getNowPlayingMovies= async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/discover/movie",API_OPTIONS);
        const json =await data.json();
        console.log("api data is:: ")
        console.log(json.results)
        dispatch(addNowPlayingMovies(json.results))
}
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}
export default useNowPlayingMovies;