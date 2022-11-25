const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const FavoriteService = require("../services/favorite.services");

class FavoriteController {
  static async addFavorite(req, res) {
    try {
      const favorite = await FavoriteService.addFavorite(req.body);
      res.status(201).send(favorite);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getAllFavorites(req, res) {
    try {
      const allFavorites = await FavoriteService.getAllFavorites();
      allFavorites && res.status(200).send(allFavorites);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async deleteFavorite(req, res) {
    console.log("ESTE ES EL REQ.PARAMS", req.params);
    console.log("ESTE ES EL REQ.BODY", req.body);
    try {
      const result = await FavoriteService.deleteFavorite();
      result && res.status(200).send([]);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }
}

module.exports = FavoriteController;
