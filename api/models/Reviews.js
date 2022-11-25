const S = require("sequelize");

const db = require("../config/index");

class Reviews extends S.Model {}

Reviews.init(
  {
    userId: {
        type: S.INTEGER,
    },
    productId: {
      type: S.INTEGER,
    },
    comment: {
      type: S.TEXT,
    },
    rating: {
      type: S.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: "review",
  }
);

module.exports = Reviews;
