// In the actions.ts file:

import { Product } from "./types";

// Define action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Define action creators
export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (product: Product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});
