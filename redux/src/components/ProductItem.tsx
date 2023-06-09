import React, {useCallback} from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart/actions";
import { Product } from "../store/cart/types";
import { getNumberOfItemsInTheCart } from "../store/cart/selectors";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const dispatch = useDispatch();
  const productQuantity = useSelector(getNumberOfItemsInTheCart(product));

  const handleAddToCart = useCallback((product: Product) => {
    dispatch(addToCart(product));
  }, [dispatch]);

  const handleRemoveFromCart =  useCallback((product: Product) => {
    dispatch(removeFromCart(product));
  }, [dispatch]);

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
