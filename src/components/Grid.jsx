import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import {
  CardActions,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Button,
} from "@mui/material";
import "animate.css";

const ProductsGrid = () => {
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <>
      <Grid container spacing={4} sx={{ p: 10, ml: "194px", maxWidth: "85vw" }}>
        {products.map((card) => (
          <Grid
            item
            key={card.productName}
            xs={12}
            sm={6}
            md={4}
            className="animate__animated animate__fadeInUp animate__slow"
          >
            <Card
              sx={{
                height: "65vh",
                display: "flex",
                flexDirection: "column",
                boxShadow:
                  "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
                transition: "all .2s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  marginTop:'10px',
                  maxHeight: "50%",
                  objectFit: "contain",
                }}
                image={card.imageUrl}
                alt="foto de producto"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {card.productName.substring(0, 20)}...
                </Typography>
                <Typography>
                  {`${card.description.substring(0, 80)}...`}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  onClick={() => {
                    handleClick(card);
                  }}
                  sx={{
                    backgroundColor: "#212223",
                    "&:hover": {
                      backgroundColor: "#212223",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  variant="contained"
                  size="large"
                >
                  Ver
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsGrid;
