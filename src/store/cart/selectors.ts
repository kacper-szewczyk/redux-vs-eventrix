import { RootState } from "../store";

export const getCartItems = (state: RootState) => {
  return state.cart.cartItems;
};

export const getProducts = (state: RootState) => {
  return state.cart.products;
};