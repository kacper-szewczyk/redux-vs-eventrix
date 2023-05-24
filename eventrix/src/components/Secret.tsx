import React, { useState } from "react";
import {Grid } from "@mui/material";
import { useEvent } from "eventrix";


const Secret = () => {
  const [visible, setVisible] = useState(false);
  useEvent('hawajska', () => {
    setVisible(true);
  });

  
  if (!visible) {
    return null;
  }

  return (
    <Grid item xs={6} md={3}>
      <img src="/domino.jpeg" alt="Hawajska" />
    </Grid>
  );
};

export default Secret;
