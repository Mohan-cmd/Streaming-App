

const VideoTitle =({title,overview})=>{

    return( 
    <div className="pt-[30%] md:pt-[12%] md:ml-10 ml-4 text-white absolute">
        <h1 className="font-bold md:text-3xl text-2xl mb-2 md:mb-0">{title}</h1>
        <p className="hidden md:inline-block w-1/4 mt-2 text-xs">{overview}</p>
        <div className="flex space-x-2">
            <button className="bg-white border-[1px] border-black p-2 px-3 rounded-md text-xs text-black hover:bg-opacity-80">▶︎ Play</button>
            <button className="hidden md:inline-block bg-white border-[1px] border-black p-2 px-3 rounded-md text-xs text-black hover:bg-opacity-80">More Info</button>
        </div>
    </div>);
}

export default VideoTitle;