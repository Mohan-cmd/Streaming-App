

const MovieCard =({title,imgSource})=>{
  if(imgSource.includes("null")) return null;
 
  return(<div className="w-[120px] border mr-[4px] border-black">
           {/* <div>{title}</div> */}
           <img className="h-full" src={imgSource}></img>
         </div>
  )
}

export default MovieCard;