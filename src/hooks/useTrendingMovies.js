import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

import { addTrendingMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const useTrendingMovies =()=>{
    const trendingMovies = useSelector((store)=>store.movies.trendingMovies)
    const dispatch=useDispatch();
    const getTrendingMovies= async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS);
        const json =await data.json();
        // console.log("api data is:: ")
        // console.log(json.results)
        dispatch(addTrendingMovies(json.results))
}
    useEffect(()=>{
        !trendingMovies && getTrendingMovies();
    },[])
}
export default useTrendingMovies;