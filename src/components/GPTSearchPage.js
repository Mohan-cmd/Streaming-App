import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTsearch from "./GPTsearch";
import { HOME_PAGE_IMG } from "../utils/Constants";

const GPTMoviePage=()=>{
   return(
    <div>
     <div className="fixed -z-10 opacity-95 ">
     <img  className="h-screen object-cover " alt="bg image" src={HOME_PAGE_IMG}></img>
     </div>
        
     <div className="pt-[25%] md:p-0">
      <GPTsearch/>
      <GPTMovieSuggestion/>
     </div>
     </div> 
   )
}

export default GPTMoviePage;