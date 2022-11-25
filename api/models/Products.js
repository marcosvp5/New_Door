const S = require("sequelize");
const db = require("../config/index");

class Product extends S.Model {}

Product.init(
  {
    productName: {
      type: S.STRING,
      allowNull: false,
    },
    address: {
      type: S.TEXT,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    price: {
      type: S.FLOAT,
      allowNull: false,
    },
    location: {
      type: S.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: S.STRING,
      allowNull: false,
    },
    availability: {
      type: S.STRING,
      allowNull: true,
    },
    category: {
      type: S.ARRAY(S.STRING),
      required: true,
    },
  },
  {
    sequelize: db,
    modelName: "product",
  }
);

module.exports = Product;
