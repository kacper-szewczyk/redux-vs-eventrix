import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart/actions";
import { getCartItems } from "../store/cart/selectors";
import { CartItem, Product } from "../store/cart/types";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>You have {cartItems.length} items in your cart.</p>
          <ul>
            {cartItems.map((item: CartItem) => (
              <li key={item.product.id}>
                <img src={item.product.image} alt={item.product.name} />
                <p>{item.product.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.product.price}</p>
                <button onClick={() => handleAddToCart(item.product)}>
                  Add to Cart
                </button>
                <button onClick={() => handleRemoveFromCart(item.product)}>
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
