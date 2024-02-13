

const MovieCard =({title,imgSource})=>{
  return(<div className="w-[120px] border mr-[4px] border-black">
           {/* <div>{title}</div> */}
           <img className="" src={imgSource}></img>
         </div>
  )
}

export default MovieCard;