import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart/actions";
import { getCartItems, getProducts } from "../store/cart/selectors";
import { Product } from "../store/cart/types";

const ProductsList: React.FC = () => {
  const products = useSelector(getProducts);

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
      <Typography variant="h2">Products List</Typography>
      {products.length === 0 ? (
        <Typography variant="h3">No products available.</Typography>
      ) : (
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={6} md={3}>
              <Box>
                <Card sx={{ padding: 4 }}>
                  <img src={product.image} alt={product.name} />
                  <Typography variant="h5">{product.name}</Typography>
                  <Typography variant="body1">
                    Price: {product.price}
                  </Typography>
                  <Button
                    sx={{ marginTop: 4 }}
                    onClick={() => handleAddToCart(product)}
                    variant="contained"
                  >
                    Add to Cart
                  </Button>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ProductsList;
