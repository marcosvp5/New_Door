import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography, Box, styled } from "@mui/material";

import { addProduct } from "../store/products";

const Productsform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newprod, setNewprod] = useState({
    productName: "",
    address: "",
    description: "",
    price: "",
    location: "",
    imageUrl: "",
  });

  const handlerInput = (e) => {
    setNewprod({ ...newprod, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    dispatch(addProduct(newprod)).then(() => navigate("/"));
  };

  const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: "15px",
    marginLeft: "118px",
    backgroundColor: "#8d69d4",
    "&:hover": {
      backgroundColor: "#633fa4",
    },
  }));

  return (
    <Box
      sx={{
        backgroundColor: "#212223",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        backgroundColor="white"
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          m: 10,
          p: 5,
          boxShadow: "10px 10px 5px 0px rgba(255,255,255, 0.45)",
        }}
      >
        <Box sx={{ display: "flex" }}>
          {" "}
          <Typography component="h1" variant="h5">
            Ingresar Datos de la Propiedad
          </Typography>
        </Box>

        <TextField
          variant="outlined"
          margin="normal"
          id="productName"
          label="ingresa el Nombre"
          name="productName"
          type="productName"
          onChange={handlerInput}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="address"
          label="ingresa la Dirección"
          name="address"
          type="address"
          onChange={handlerInput}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="description"
          label="ingresa una Descripción"
          name="description"
          type="description"
          onChange={handlerInput}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="price"
          label="ingresa el precio"
          name="price"
          type="price"
          onChange={handlerInput}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="location"
          label="ingresa la Zona"
          name="location"
          type="location"
          onChange={handlerInput}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="imageUrl"
          label="ingresa la Imagen"
          name="imageUrl"
          type="imageUrl"
          onChange={handlerInput}
        />
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <StyledButton
            variant="contained"
            sx={{
              backgroundColor: "#8d69d4",
              "&:hover": {
                backgroundColor: "#633fa4",
              },
            }}
            onClick={handleRegister}
          >
            Agregar
          </StyledButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Productsform;
