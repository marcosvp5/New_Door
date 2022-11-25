const express = require("express");
const favoriteRouter = express.Router();

const FavoriteController = require("../controllers/favorite.controllers");

favoriteRouter.post("/:id", FavoriteController.addFavorite);

favoriteRouter.get("/", FavoriteController.getAllFavorites);

favoriteRouter.delete("/:id", FavoriteController.deleteFavorite);

module.exports = favoriteRouter;
