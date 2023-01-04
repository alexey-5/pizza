import { configureStore } from "@reduxjs/toolkit";
import sort from './sortSlise'
import cart from './cartSlise'
import pizza from './pizzaSlise'

export const store = configureStore({
   reducer:{
      sort,
      cart,
      pizza,
   }
});
// типизация всего хранилища 
export type RootState = ReturnType<typeof store.getState>