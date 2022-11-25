const S = require("sequelize");

const db = require("../config/index");

class Category extends S.Model {}

Category.init(
    {
      categoryName: {
        type: S.STRING,
        allowNull: false,
      },
      productId: {
        type: S.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize: db,
      modelName: "category",
    }
  );

  module.exports = Category;
