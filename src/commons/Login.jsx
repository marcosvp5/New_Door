import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

import { Typography, Box, CssBaseline, Avatar, styled } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { userLogin } from "../store/users";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const handlerInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlerLogin = () => {
    dispatch(userLogin(user))
      .then((res) => {
        if(!res.payload) {
          return swal("Invalid Email or Password");
        }
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: "15px",
    marginLeft: "70px",
    backgroundColor: "#8d69d4",
    "&:hover": {
      backgroundColor: "#633fa4",
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    marginTop: "15px",
  }));

  return (
    <CssBaseline>
      <Box
        sx={{
          paddingTop: "50px",
          minHeight: "100vh",
          backgroundColor: "#212223",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fcfcfc",
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
              <Avatar
                sx={{ m: 1, bgcolor: "#212223", color: "#633fA4" }}
              ></Avatar>{" "}
              Ingresa
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            margin="normal"
            id="email"
            label="Ingresa un correo / e-mail"
            name="email"
            onChange={handlerInput}
            sx={{ color: "white" }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            id="password"
            label="Ingresa una contraseña"
            name="password"
            type="password"
            onChange={handlerInput}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <StyledButton 
              onClick={handlerLogin}
              variant="contained"
              color="primary"
              xs={{
                marginTop: "100px",
              }}
            >
              Ingresar
            </StyledButton>
          </Link>
          <StyledTypography variant="body1" component="p">
            ¿No tienes cuenta? Regístrate{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              aquí
            </Link>
          </StyledTypography>
        </Box>
      </Box>
    </CssBaseline>
  );
};

export default Login;
