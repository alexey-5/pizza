import { createSlice } from "@reduxjs/toolkit";

const sortSlise  = createSlice({
   name: "sort",
   initialState:{
     sort: 0,
     categories: 0,
     popUp: false,
   },

   reducers: {
      setSort(state, action){
       state.sort = action.payload
      },

      setPopUp(state, action){
       state.popUp = action.payload
      },

      setCategories(state, action){
       state.categories = action.payload
      },
   }
})
//export const selectSort = (state)=>state.sort.categories

export const{setSort, setCategories, setPopUp} = sortSlise.actions;
export default sortSlise.reducer;