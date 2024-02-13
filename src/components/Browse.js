import Header from "./Header";
import usegetNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse =()=>{
  usegetNowPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (<div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
  </div>)
}

export default Browse;