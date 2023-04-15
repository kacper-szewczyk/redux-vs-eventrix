import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import ProductItem from "./ProductItem";
import { useEventrixState } from "eventrix";
import { Product } from "../store/cart/types";

const ProductsList = () => {
  const [products] = useEventrixState<Product[]>("products");

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
