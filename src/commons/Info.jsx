import React, { useState } from "react";

import { 
  Divider, 
  Grid, 
  Typography, 
  Box, 
  Rating 
} from "@mui/material";

const Info = ({ producto }) => {
  const [value, setValue] = useState(2);

  return (
    <Grid container direction="column" sx={{ height: "100%" }}>
      <Typography 
        variant="subtitle1"
      >
        {producto.category}
      </Typography>
      <Divider />
      <Box mt={2}>
        <Typography 
          variant="h4"
        >
          {producto.productName}
        </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography 
          variant="subtitle1"
        >
          {producto.description}
        </Typography>
        <Typography 
          variant="h5"
        >
          Price: ${producto.price}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Info;
