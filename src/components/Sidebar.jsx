import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { Stack } from "@mui/system";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "animate.css";

const StyledInputText = styled(ListItemText)(({ theme }) => ({
  fontSize: "1%",
}));

const Sidebar = () => {
  const user = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const handleConfigurationClick = () => {
    setOpen(!open);
  };

  const handleItemClick = () => {
    setOpenItem(!openItem);
  };

  const handleCategoriesClick = () => {
    setOpenCategory(!openCategory);
  };

  return (
    <>
      <Stack
        sx={{
          paddingTop: "65px",
          direction: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          spacing: 1,
        }}
      >
        <List
          className="animate__animated animate__fadeInLeft animate__fast"
          sx={{
            width: "100%",
            maxWidth: 250,
            bgcolor: "background.paper",
            position: "fixed",
            minHeight: "100vh",
            boxShadow: "0px 10px 29px 5px rgba(0,0,0,0.58)",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {user.isAdmin ? (
            <>
              <ListItem>
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountCircleOutlinedIcon />
                    </ListItemIcon>
                    <StyledInputText primary={"Perfil"} />
                  </ListItemButton>
                </Link>
              </ListItem>
              <Divider />

              <ListItemButton onClick={handleConfigurationClick}>
                <ListItemText primary="Base de Datos" />
                {open ? <ExpandMore /> : <ExpandLess />}
              </ListItemButton>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem>
                    <List component="div" disablePadding>
                      <Link
                        to={"/admin/users"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <ListItemButton>
                          <ListItemText primary="Usuarios" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </ListItem>

                  <ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <Link
                          to={"/admin/addProduct"}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <ListItemButton onClick={handleItemClick}>
                            <ListItemText primary="Agregar Inmueble" />
                          </ListItemButton>
                        </Link>
                      </List>
                    </Collapse>
                  </ListItem>
                </List>
              </Collapse>
            </>
          ) : (
            <>
              {user.userName ? (
                <>
                  <ListItem>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <AccountCircleOutlinedIcon />
                        </ListItemIcon>
                        <StyledInputText primary={"Perfil"} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Link
                      to={"/favoritesList"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <FavoriteBorderOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Favoritos" />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </>
              ) : (
                true
              )}
            </>
          )}
          <>
            <br />
            <ListItemButton onClick={handleCategoriesClick}>
              <ListItemText primary="Categorías" />
              {openCategory ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>

            <Collapse in={openCategory} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Divider />
                <ListItem>
                  <Link
                    to="/category/Alquiler"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <List component="div" disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Alquiler" />
                      </ListItemButton>
                    </List>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    to="/category/Venta"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <List component="div" disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Venta" />
                      </ListItemButton>
                    </List>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    to="/category/Casa"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <List component="div" disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Casa" />
                      </ListItemButton>
                    </List>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    to="/category/Departamento"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <List component="div" disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Departamento" />
                      </ListItemButton>
                    </List>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    to="/category/2Ambientes"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <List component="div" disablePadding>
                      <ListItemButton>
                        <ListItemText primary="2 Ambientes" />
                      </ListItemButton>
                    </List>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    to="/category/4Ambientes"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <List component="div" disablePadding>
                      <ListItemButton>
                        <ListItemText primary="4 Ambientes" />
                      </ListItemButton>
                    </List>
                  </Link>
                </ListItem>
              </List>
            </Collapse>
          </>
        </List>
      </Stack>
    </>
  );
};

export default Sidebar;
