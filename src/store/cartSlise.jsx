import { createSlice } from "@reduxjs/toolkit";

const json1 = localStorage.getItem('cart');
 //let json = [];
 // if(json1) json=JSON.parse(json1) ;
  const json = json1?JSON.parse(json1):[]
 // console.log(localStorage.getItem('cart'));

const cartSlise = createSlice({
  name: "cart",
  initialState: {
    item: json,
    sum: json.reduce((akk, elem)=>akk+elem.price*elem.count,0),
  },

  reducers: {
    /* addItem(state, action) {
      state.item.push(action.payload);
      state.sum = state.item.reduce((akk, elem)=>akk+elem.price,0)
    }, */
    addItem(state, action) {
    const itemId = state.item.find((elem)=>elem.id===action.payload.id)
      if(itemId){itemId.count=itemId.count+1}
      else{state.item.push({...action.payload,count: 1});}
      
      state.sum = state.item.reduce((akk, elem)=>akk+elem.price*elem.count,0)
    },

    deleteItem(state, action) {
      state.item = state.item.filter((el) => el.id !== action.payload);
      state.sum = state.item.reduce((akk, elem)=>akk+elem.price*elem.count,0)
      // console.log(action.payload)
    },

    deleteAll(state) {
      if(window.confirm('Подтвердите удаление!'))//вывод запроса на удаление
      {state.item = [];
      state.sum = 0;}
      // console.log(action.payload)
    },

    plus(state, action) {
      const itemId = state.item.find((elem)=>elem.id===action.payload)
      if(itemId){itemId.count+=1}
      state.sum = state.item.reduce((akk, elem)=>akk+elem.price*elem.count,0)
    },

    minus(state, action) {
      let itemId = state.item.find((elem)=>elem.id===action.payload)
      if(itemId&&itemId.count>1){itemId.count=itemId.count-1}
      state.sum = state.item.reduce((akk, elem)=>akk+elem.price*elem.count,0)
    },
  },
});
export const { addItem, deleteItem, deleteAll, plus, minus } = cartSlise.actions;
export default cartSlise.reducer;
