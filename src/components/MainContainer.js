import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
const MainContainer =()=>{
    const movies= useSelector((store)=>store.movies?.nowPlayingMovies)
    if(movies=== null) return; // known as early return i.e., if movies data is nuill then return directly without executing belo code
    //Above can be written as if(!movies) return;
    const mainMovie= movies[6];
    const {original_title,overview,id}=mainMovie
    console.log(mainMovie)
    return(
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoContainer movieId={id}/>
    </div>
    );
}

export default MainContainer;