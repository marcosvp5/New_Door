const S = require("sequelize");

const db = require("../config/index");

class Reservation extends S.Model {}

Reservation.init(
  {
    userId: {
      type: S.INTEGER,
      allowNull: false,
    },
    stateId: {
      type: S.INTEGER,
      allowNull: false,      
    },
    date: {
      type: S.DATE,
    },
  },
  {
    sequelize: db,
    modelName: "reservation",
  }
);

module.exports = Reservation;