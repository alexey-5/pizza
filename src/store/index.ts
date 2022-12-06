import { configureStore } from "@reduxjs/toolkit";
import sort from './sortSlise'
import cart from './cartSlise'
import pizza from './pizzaSlise'

export default configureStore({
   reducer:{
      sort,
      cart,
      pizza,
   }
})