
import { useSelector} from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoContainer =({movieId})=>{
    const trailerVideo= useSelector((store)=>store.movies.trailerVideo); 
    useMovieTrailer(movieId);
    return(
        <div className="w-screen aspect-video bg-gradient-to-r from-black">
        <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&showinfo=0&controls=0&autohide=1"}
        title="YouTube video player" frameBorder="0" allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
    )
}

export default VideoContainer;