import React from "react";
import { CartItem } from "../store/cart/types";
import ProductItem from "./ProductItem";
import { Grid, Stack, Typography } from "@mui/material";
import { useEventrixState } from "eventrix";

const ShoppingCart = () => {
  const [cartItems] = useEventrixState<CartItem[]>("cartItems");

  return (
    <Stack>
      <Typography variant="h3">Shopping Cart</Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty</Typography>
      ) : (
        <>
          <Typography variant="h5">
            You have {cartItems.length} items in your cart.
          </Typography>
          <Grid container spacing={4}>
            {cartItems.map((item: CartItem) => (
              <ProductItem product={item.product} />
            ))}
          </Grid>
        </>
      )}
    </Stack>
  );
};

export default ShoppingCart;
