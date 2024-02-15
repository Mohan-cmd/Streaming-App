import { createSlice } from "@reduxjs/toolkit";


const searchSlice=createSlice({
       name:"search",
       initialState:{
        blnDisplaySearch:false,
        gptmovieList:null,
        movieNames:null,
        movieResults:null
       },
       reducers:{
           displaySearch:(state,action)=>{
             state.blnDisplaySearch=action.payload;
           },
           addGPTMovieResults:(state,action)=>{
            const{movieNames, movieResults} =action.payload;
            state.movieNames =movieNames;
            state.movieResults=movieResults;
            //state.gptmovieList=action.payload;
           }
       }
})

export const {displaySearch,addGPTMovieResults} =searchSlice.actions;
export default searchSlice.reducer;