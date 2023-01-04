import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SinitialSlise = {
   sort: number;
   categories: number;
   popUp: boolean;
}

const initialState: SinitialSlise = {
   sort: 0,
   categories: 0,
   popUp: false,
}

const sortSlise = createSlice({
   name: "sort",
   initialState,
   reducers: {
      setSort(state, action: PayloadAction<number>) {
         state.sort = action.payload
      },

      setPopUp(state, action: PayloadAction<boolean>) {
         state.popUp = action.payload
      },

      setCategories(state, action: PayloadAction<number>) {
         state.categories = action.payload
      },
   }
})
//export const selectSort = (state)=>state.sort.categories

export const { setSort, setCategories, setPopUp } = sortSlise.actions;
export default sortSlise.reducer;