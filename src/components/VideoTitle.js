

const VideoTitle =({title,overview})=>{

    return( 
    <div className="pt-[12%] ml-10 text-white absolute">
        <h1 className="font-bold text-3xl ">{title}</h1>
        <p className=" w-1/4 mt-2 text-xs">{overview}</p>
        <div className="flex space-x-2">
            <button className="bg-white border-[1px] border-black p-2 px-3 rounded-md text-xs text-black hover:bg-opacity-80">▶︎ Play</button>
            <button className="bg-white border-[1px] border-black p-2 px-3 rounded-md text-xs text-black hover:bg-opacity-80">More Info</button>
        </div>
    </div>);
}

export default VideoTitle;