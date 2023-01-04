 import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { type } from "os";
//createAsyncThunk() — данный метод предназначен для выполнения асинхронных операций: он принимает тип операции и функцию, возвращающую промис, и генерирует преобразователь операции (thunk), который, в свою очередь, отправляет типы операций pending/fulfilled/rejected в частичный редуктор;
export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizzaStatus",
  async ({ sortText, sortCategory, searchFetch }) => {
    const { data } = await axios(
      `https://63271534ba4a9c47533059e2.mockapi.io/pizzabaza?&order=asc&sortBy=${sortText}${sortCategory}${searchFetch}`
    );//console.log(data)
    return data;
  });

  type Item = {
    category: number;
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    rating: number;
    sizes: number[];
    types: number[];
  }

  type CartItem = {
    //category: number;
      id: string;
      imageUrl: string;
      name: string;
      price: number;
      count: number;
      sizes: number;
      types: number;
  }

  interface PinitialState {
    items: Item[];
    loading: string;
    search: string;
    pizzaMore: CartItem[];
  }

  const initialState: PinitialState = {
    items: [],
    loading: 'pending',//'idle' | 'pending' | 'succeeded' | 'failed' // idle -пустой
    search: '',
    pizzaMore:[],
  } 

const pizzaSlise = createSlice({
  name: "pizza",
  initialState,
  reducers: { 
    setSearch(state, action: PayloadAction<string>){
      state.search = action.payload
     },
    setPizzaMore(state, action: PayloadAction<CartItem>){
      state.pizzaMore = [];
      state.pizzaMore.push(action.payload);
     // console.log(state.pizzaMore)
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
