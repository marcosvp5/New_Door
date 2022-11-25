import React from "react";

import { Grid } from "@mui/material";

const ImageGrid = ({ images, onSelect, selectedImage }) => {
  return (
    <Grid container direction="column">
      {images.map((image, i) => (
        <img
          src={image}
          height={80}
          onClick={() => onSelect(i)}
          style={{
            border: i === selectedImage ? "solid 1px black" : "solid 1px #eee",
            cursor: "pointer",
          }}
          alt="real state"
        />
      ))}
    </Grid>
  );
};

export default ImageGrid;
