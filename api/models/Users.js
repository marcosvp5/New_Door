const S = require("sequelize");
const bcrypt = require("bcrypt");

const db = require("../config/index");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    userName: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
      isEmail: true,
      },
    },
    salt: {
      type: S.STRING,
    },
    password: {
      type: S.STRING,
      allowNull: false,
      validate: {
        min: 8
      },
    },
    favorites: {
      type: S.ARRAY(S.INTEGER),
      defaultValue: [],
    },
    isAdmin: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(4)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
