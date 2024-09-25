import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

// we are not dealing with any async API operations, so we are going to use createSlice
// and so it's take the name, the initial state and the reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x._id === item._id);
      if (existingItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existingItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      // Calculate the items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      // Calculate the shipping price | If items price is greater than 100, shipping is free | If not, shipping is 10
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

      // Calculate the tax price | Tax is 15% of the items price
      state.taxPrice = addDecimals(
        Number((0.15 * state.itemsPrice).toFixed(2))
      );

      // Calculate the total price | Total price is the sum of the items price, shipping price and tax price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      // Save the cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
