import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import {
  alpha,
  Box,
  IconButton,
  styled,
  FormControl,
  Button,
  MenuItem,
  Dialog,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "animate.css";

import { searchProduct } from "../store/products";
import { userLogout } from "../store/users";

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#212223",
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius,
}));

const Search = styled("div")(({ theme }) => ({
  marginRight: "550px",
  color: "white",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  gap: "20px",
  padding: "2px 10px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  color: "white",
  display: "flex",
  gap: "20px",
  variant: "outlined",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
}));

const StyledIcon = styled(HomeWorkOutlinedIcon)(({ theme }) => ({
  color: "#abdbe3",
  fontSize: "40px",
  borderRadius: theme.shape.borderRadius,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  paddingTop: "3px",
  borderRadius: theme.shape.borderRadius,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  paddingLeft: "30px",
  borderRadius: theme.shape.borderRadius,
}));

const Navbar = () => {
  const user = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handlerChange = (e) => {
    setInput(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProduct(input))
      .then(() => navigate("/search"));
  };

  const handlerLogOut = () => {
    dispatch(userLogout())
      .then(() => setOpen(!open), navigate("/"));
  };

  return (
    <>
      <AppBar
        position="fixed"
        className="animate__animated animate__fadeInDown animate__delay-1s animated__faster"
      >
        <StyledToolBar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <StyledTypography
              display="flex"
              variant="h5"
              sx={{ color: "white" }}
            >
              Real State App
              <StyledIcon
                className="animate__animated animate__bounceInDown animate__fast"
                sw={{ color: "#633fA4" }}
              />
            </StyledTypography>
          </Link>

          <Search>
            <FormControl>
              <StyledInputBase
                onChange={handlerChange}
                placeholder="Search..."
              ></StyledInputBase>
            </FormControl>
            <Icons>
              <IconButton onClick={handlerSubmit}>
                <SearchIcon
                  sx={{ color: "white", "&:hover": { color: "gray" } }}
                />
              </IconButton>
            </Icons>
          </Search>

          <Icons>
            <IconButton
              onClick={() => setOpen(!open)}
              sx={{
                borderRadius: 10,
                backgroundColor: "#27333D",
                "&:hover": {
                  backgroundColor: "#3F4B55",
                },
              }}
            >
              <AccountCircleOutlinedIcon
                sx={{
                  fontSize: 25,
                  color: "white",
                }}
              />
              <StyledTypography
                display="flex"
                variant="h5"
                sx={{ color: "white", marginRight: "40px" }}
                onClick={() => setOpen(!open)}
              >
                {user.userName ? user.userName : <>Cuenta</>}
              </StyledTypography>
            </IconButton>
          </Icons>
        </StyledToolBar>

        {user.userName ? (
          <>
            <Dialog
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={open}
              onClose={() => setOpen(!open)}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <MenuItem>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "" }}
                  >
                    <AccountCircleOutlinedIcon
                      sx={{ fontSize: 30 }}
                      onClick={() => setOpen(!open)}
                    />
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button onClick={handlerLogOut}>Cerrar sesión</Button>
                  </Link>
                </MenuItem>
              </Box>
            </Dialog>
          </>
        ) : (
          <Dialog
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <MenuItem>
                <AccountCircleOutlinedIcon />
              </MenuItem>
              <MenuItem>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button onClick={() => setOpen(!open)}>Iniciar sesión</Button>
                </Link>
                <MenuItem>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <Button onClick={() => setOpen(!open)}>Registrarse</Button>
                  </Link>
                </MenuItem>
              </MenuItem>
            </Box>
          </Dialog>
        )}
      </AppBar>
    </>
  );
};

export default Navbar;
