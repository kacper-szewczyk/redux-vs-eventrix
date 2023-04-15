import React, { useMemo } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { CartItem, Events, Product } from "../store/cart/types";
import { useEmit, useEventrixState } from "eventrix";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const emit = useEmit();
  const [cartItems] = useEventrixState<CartItem[]>("cartItems");

  const productQuantity = useMemo(
    () => cartItems.find((item) => item.product.id === product.id)?.quantity,
    [cartItems]
  );

  const handleAddToCart = (product: Product) => {
    emit(Events.ADD_TO_CART, product);
  };

  const handleRemoveFromCart = (product: Product) => {
    emit(Events.REMOVE_FROM_CART, product);
  };

  return (
    <Grid item xs={6} md={3}>
      <Box>
        <Card sx={{ padding: 4 }}>
          <img src={product.image} alt={product.name} />
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body1">Price: {product.price}</Typography>
          {(!productQuantity || productQuantity === 0) && (
            <Button
              sx={{ marginTop: 3 }}
              onClick={() => handleAddToCart(product)}
              variant="contained"
            >
              Add to Cart
            </Button>
          )}
          {productQuantity && (
            <>
              <Typography variant="body1">
                Quantity: {productQuantity}{" "}
              </Typography>
              <Button
                onClick={() => handleAddToCart(product)}
                variant="contained"
              >
                +1
              </Button>
              <Button
                sx={{ marginLeft: 4 }}
                onClick={() => handleRemoveFromCart(product)}
                variant="outlined"
              >
                -1
              </Button>
            </>
          )}
        </Card>
      </Box>
    </Grid>
  );
};

export default ProductItem;
