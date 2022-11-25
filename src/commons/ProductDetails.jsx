import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

import { 
  CardContent, 
  Grid 
} from "@mui/material";
import {
  Box,
  Typography,
  CardMedia,
  Card,
} from "@mui/material";
import "./spinner.css";

const ProductDetails = () => {
  const url = useLocation().pathname.split("/products/")[1];
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
    .get(`/api/products/${url}`)
    .then((res) => setProduct(res.data));
  }, [url]);

  if (!product.productName) {
    return (
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    );
  }

  return (
    <>
      <Grid container spacing={4} sx={{ p: 8, ml: "500px", maxWidth: "100vw" }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          className="animate__animated animate__fadeIn animate__slow"
        >
          <Box sx={{ display: "flex" }}>
            <Card
              sx={{
                height: "75vh",
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                boxShadow:
                  "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
                transition: "all .2s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                image={product.imageUrl}
                component="img"
                sx={{
                  marginTop:'10px',
                  maxHeight: "40%",
                  objectFit: "contain",
                }}
                alt="foto de producto"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {product.productName.substring(0, 100)}...
                  <br />
                  Precio:<Typography>U$S{product.price}</Typography>
                </Typography>

                <Typography variant="h5">Descripción</Typography>
                <Typography>{product.description}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
