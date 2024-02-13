import { createSlice } from "@reduxjs/toolkit"

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        trendingMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies=action.payload;
        },
        addNowPlayingVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addNowPlayingVideo,addTrendingMovies,addUpcomingMovies} =movieSlice.actions;
export default movieSlice.reducer;