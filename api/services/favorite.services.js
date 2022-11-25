const { Users } = require("../models");

class FavoriteService {
    static async addFavorite(reqbody) {
        try {
            let newFavorite = new Users(reqbody);
            return await newFavorite.save({});
        } catch (error) {
            console.error("error existente en deleteFavorite- SERVICE", error.message);
        }
    }

  static async getAllFavorites() {
      try {
          let allFavorites = await Users.findAll();
          return allFavorites;
      } catch (error) {
          console.error("error existente en getAllFavorites- SERVICE", error.message);
      }
  }

  static async deleteFavorite(req){
      try {
        const { productId } = req.query;
        const result = await Users.destroy({
          where: {
            id: productId,
          },
        });
        return result;
    } catch (err) {
        console.error("error existente en deleteFavorite- SERVICE", error.message);
      }
    };
}

module.exports = FavoriteService;
