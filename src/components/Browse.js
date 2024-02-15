import Header from "./Header";
import usegetNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";
const Browse =()=>{
  usegetNowPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
    const blnSearch = useSelector((state)=>state.search?.blnDisplaySearch)
    console.log("blnSearchval in browse: ")
    console.log(blnSearch)
  return (<div>
    <Header/>
    {blnSearch? <GPTSearchPage/> :  <div>
    <MainContainer/>
    <SecondaryContainer/>
    </div>}
   
  </div>)
}

export default Browse;