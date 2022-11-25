import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Box, CssBaseline } from "@mui/material";

import Login from "./commons/Login";
import Register from "./commons/Register";
import NotFound from "./commons/NotFound";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import ProductsForm from "./components/ProductsForm";
import FavoritesList from "./components/FavoritesList";
import Admin from "./components/Admin";
import UsersList from "./components/UsersList";

import Category from "./commons/Category";
import ProductDetails from "./commons/ProductDetails";
import Search from "./commons/Search";

import { persistence } from "./store/users";
import { getAllProducts } from "./store/products";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(persistence());
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/favoritesList" element={<FavoritesList />} />
          {user.isAdmin && (
            <>
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/addProduct" element={<ProductsForm />} />
              <Route path="/admin/users" element={<UsersList />} />
            </>
          )}
          <Route path="*" element={<Navigate to="404" />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
