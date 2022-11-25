const { Users } = require("../models");
const jwt = require("jsonwebtoken");

class UserServices {
  static async createUser(req) {
    try {
      const newUser = await Users.create(req.body);
      return newUser;
    } catch (err) {
      console.log("error existente en createUser - SERVICE", err);
    }
  };

  static async loginUser(req) {
    try {
      const user = await Users.findOne({
        where: { 
          email: req.body.email 
        },
      });
      return user;
    } catch (err) {
      console.log("error existente en loginUser - SERVICE", err);
    }
  };
    
  static async getAllUsers() {
    try {
      return await Users.findAll();
    } catch (err) {
      console.log("error existente en getAllUsers - SERVICE", err);
    }
  };
  
  static async getOneUser(req){
    try {
      const user = await Users.findOne({
        where: {
          id: req.params.id,
        },
      });
      return user;
    } catch (err) {
      console.log("error existente en getOneUser - SERVICE", err);
    }
  };

  static async editUser(req){
    try {
      const [affectedRows, updatedUser] = await Users.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
  
      const user = updatedUser[0];
      return user;
    } catch (err) {
      console.log("error existente en editUser - SERVICE", err);
    }
  };
    
  static async deleteUser(req){
    try {
      return await Users.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      console.log("error existente en deleteUser - SERVICE", err);
    }
  };
}

module.exports = UserServices;
