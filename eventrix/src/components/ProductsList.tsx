import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getProducts } from "../store/cart/selectors";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const products = useSelector(getProducts);

  return (
    <Stack>
      <Typography variant="h2">Products List</Typography>
      {products.length === 0 ? (
        <Typography variant="h3">No products available.</Typography>
      ) : (
        <Grid container spacing={4}>
          {products.map((product) => (
            <ProductItem product={product} />
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default ProductsList;
