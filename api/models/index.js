const Users = require("./Users");
const Reservations = require("./Reservations");
const Products = require("./Products");
const Categories = require("./Categories");
const Reviews = require("./Reviews");

Users.belongsToMany(Products, { through: Reviews });
Products.belongsToMany(Users, { through: Reviews });

Users.belongsToMany(Products, { through: Reservations });
Products.belongsToMany(Users, { through: Reservations });

Users.hasMany(Reservations, { as: "reservations_users" });

Users.hasMany(Reviews, { as: "reviews_users" });
Reviews.belongsTo(Users, { as: "user_review" });

Products.belongsTo(Categories, { as: "categories_products" });

Products.hasMany(Reservations, { as: "reservations_Products" });

Products.hasMany(Reviews, { as: "reviews_Products" });
Reviews.belongsTo(Products, { as: "state_review" });

module.exports = { Users, Reservations, Products, Categories, Reviews };
