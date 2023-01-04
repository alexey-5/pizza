import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const json1 = localStorage.getItem("cart");
const json: CartItem[] = json1 ? JSON.parse(json1) : [];
 console.log('корзина - ',json);

 type CinitialState = {
    item: CartItem[];
    sum: number;
 }

 const initialState: CinitialState ={
  item: json,
  sum: json.reduce((akk, elem) => akk + elem.price * elem.count, 0),
 }

const cartSlise = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    addItem(state, action: PayloadAction<CartItem>) {
      const itemId = state.item.find((elem) => elem.id === action.payload.id);
      if (itemId) {
        itemId.count = itemId.count + 1;
      } else {
        state.item.push({ ...action.payload, count: 1 });
      }
      state.sum = state.item.reduce(
        (akk, elem) => akk + elem.price * elem.count,
        0
      );
    },

    deleteItem(state, action: PayloadAction<string>) {
      state.item = state.item.filter((el) => el.id !== action.payload);
      state.sum = state.item.reduce(
        (akk, elem) => akk + elem.price * elem.count,
        0
      );
      // console.log(action.payload)
    },

    deleteAll(state) {
      if (window.confirm("Подтвердите удаление!")) {
        //вывод запроса на удаление
        state.item = [];
        state.sum = 0;
      }
      // console.log(action.payload)
    },

    plus(state, action: PayloadAction<string>) {
      const itemId = state.item.find((elem) => elem.id === action.payload);
      if (itemId) {
        itemId.count += 1;
      }
      state.sum = state.item.reduce(
        (akk, elem) => akk + elem.price * elem.count,
        0
      );
    },

    minus(state, action: PayloadAction<string>) {
      let itemId = state.item.find((elem) => elem.id === action.payload);
      if (itemId && itemId.count > 1) {
        itemId.count = itemId.count - 1;
      }
      state.sum = state.item.reduce(
        (akk, elem) => akk + elem.price * elem.count,
        0
      );
    },
  },
});
export const { addItem, deleteItem, deleteAll, plus, minus } =
  cartSlise.actions;
export default cartSlise.reducer;
