import { EventsReceiver } from "eventrix";
import { CartItem, Events, Product } from "./types";

const addToCart = new EventsReceiver(
  Events.ADD_TO_CART,
  (_, eventData, stateManager) => {
    const addedProduct: Product = eventData;
    const cartItems = stateManager.getState("cartItems") as CartItem[];
    const existingCartItem = cartItems.find(
      (item: CartItem) => item.product.id === addedProduct.id
    );
    if (existingCartItem) {
      stateManager.setState(
        "cartItems",
        cartItems.map((item) =>
          item.product.id === addedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      stateManager.setState("cartItems", [
        ...cartItems,
        { product: addedProduct, quantity: 1 },
      ]);
    }
  }
);

const removeFromCart = new EventsReceiver(
  Events.REMOVE_FROM_CART,
  (_, eventData, stateManager) => {
    const removedProduct: Product = eventData;
    const cartItems = stateManager.getState("cartItems") as CartItem[];

    const cartItem = cartItems.find(
      (item) => item.product.id === removedProduct.id
    );
    if (!cartItem) {
      return;
    }
    if (cartItem.quantity > 1) {
      stateManager.setState(
        "cartItems",
        cartItems.map((item) =>
          item.product.id === removedProduct.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      const updatedCartItems = cartItems.filter(
        (item) => item.product.id !== removedProduct.id
      );
      stateManager.setState("cartItems", updatedCartItems);
    }
  }
);

const receiversList = [addToCart, removeFromCart];

export default receiversList;
