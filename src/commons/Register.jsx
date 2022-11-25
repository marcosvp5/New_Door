import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Typography, Box, Avatar } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { userRegister } from "../store/users";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    userName: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const handlerInput = (e) => {
    if(e.target.value === "realstate") e.target.value = true;
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  
  const handleRegister = () => {
    dispatch(userRegister(register))
      .then(() => navigate("/"));
  };

  const {
    formState: { errors },
  } = useForm();

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
            <Avatar sx={{ m: 1, bgcolor: "#212223", color: "#633fA4" }}>
              <LockOutlinedIcon />
            </Avatar>{" "}
            Registrarse
          </Typography>
        </Box>

        <TextField
          variant="outlined"
          margin="normal"
          id="username"
          label="Ingresa un nombre de usuario"
          name="userName"
          type="userName"
          onChange={handlerInput}
        />
        {errors.userName?.type === "required" && "El usuario es requerido."}
          <TextField
          variant="outlined"
          margin="normal"
          id="email"
          label="Ingresa un correo / e-mail"
          name="email"
          type="email"
          onChange={handlerInput}
        />
        {errors.email?.type === "pattern" && "Ingresa un formato válido."}
        {errors.email?.type === "required" && "El email es requerido."}
        <TextField
          variant="outlined"
          margin="normal"
          id="password"
          label="ingresa una contraseña"
          name="password"
          type="password"
          onChange={handlerInput}
        />
        {errors.password?.type === "required" && "La contraseña es requerida."}
        <TextField
          variant="outlined"
          margin="normal"
          id="isAdmin"
          label="Ingresa contraseña (perfil ADM)"
          name="isAdmin"
          type="password"
          onChange={handlerInput}
        />
        {errors.isAdmin?.type === "required" && "La contraseña es requerida."}
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#8d69d4",
            "&:hover": {
              backgroundColor: "#633fa4",
            },
          }}
          onClick={handleRegister}
        >
          Ingresar
        </Button>
        <Typography variant="body1" component="p">
          ¿Ya tenes una cuenta? Ingresa{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            aqui{" "}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
