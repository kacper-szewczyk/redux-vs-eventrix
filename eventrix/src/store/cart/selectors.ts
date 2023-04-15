import { RootState } from "../store";
import { Product } from "./types";

export const getCartItems = (state: RootState) => {
  return state.cart.cartItems;
};

export const getProducts = (state: RootState) => {
  return state.cart.products;
};

export const getNumberOfItemsInTheCart =
  (product: Product) => (state: RootState) => {
    const cartItem = state.cart.cartItems.find(
      (cart) => cart.product.id === product.id
    );
    return cartItem?.quantity;
  };
