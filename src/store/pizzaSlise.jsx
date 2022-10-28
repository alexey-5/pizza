import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizzaStatus",
  async ({ sortText, sortCategory, searchFetch }) => {
    const { data } = await axios(
      `https://63271534ba4a9c47533059e2.mockapi.io/pizzabaza?&order=asc&sortBy=${sortText}${sortCategory}${searchFetch}`
    );//console.log(data)
    return data;
  });

const pizzaSlise = createSlice({
  name: "pizza",
  initialState: {
    items: [],
    loading: 'pending',//'idle' | 'pending' | 'succeeded' | 'failed' // idle -пустой
    search: '',
    pizzaMore:{}
  },
  reducers: { 
    setSearch(state, action){
      state.search = action.payload
     },
    setPizzaMore(state, action){
      state.pizzaMore = action.payload
     },
   },
  extraReducers:{
    [fetchPizza.pending]: (state)=>{
       state.loading = 'pending';
       state.items=[];  // console.log('  Идёт зарузка')
    },
    [fetchPizza.fulfilled]: (state, action)=>{
       state.loading = 'succeeded';
       state.items=action.payload; // console.log('  Данные получены')
    },
    [fetchPizza.rejected]: (state, action)=>{
       state.loading = 'failed';
       state.items=[];
       console.log('  Ошибка')
    },
  },
    /* extraReducers: (builder) => {
      builder.addCase(fetchPizza.fulfilled, (state, action) => {
        state.items = action.payload;
      }); } */
});
export const { setSearch, setPizzaMore } = pizzaSlise.actions;
export default pizzaSlise.reducer;
