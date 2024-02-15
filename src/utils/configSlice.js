import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
  name:"config",
  initialState:{
    langSelValue:'en'
  },
  reducers:{
    setLanguage:(state,action)=>{
        state.langSelValue=action.payload
    },
  }
})

export const {setLanguage} = configSlice.actions;
export default configSlice.reducer;