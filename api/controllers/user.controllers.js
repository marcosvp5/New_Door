const UserService = require("../services/user.services");

class UserControllers {
  static async createUser(req, res) {
    try {
      await UserService.createUser(req);
      return res.status(201).send(user);
    } catch (error) {
      return res.sendStatus(404).json({ error });
    }
  };
  
  static async loginUser(req, res) {
    try {
      const user = await UserService.loginUser(req);
      return res.send(user);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
  
  static async logOutUser(req, res) {
    try {
      req.logOut();
      return res.status(200).send({});
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
    
  static async getAllUsers(req, res) {
    console.log("PASÓ POR ACÁ")
    try {
      const users = await UserService.getAllUsers();
      console.log("ESTOS SON LOS USERS", users);
      return res.status(200).send(users);
    } catch (error) {
      return res.status(500).json({ error }); 
    }
  };

  static async getOneUser(req, res) {
    try {
      const user = await UserService.getOneUser(req);
      user && res.status(200).send(user);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
  
  static async editUser(req, res) {
    try {
      const updatedUser = await UserService.editUser(req);
      return res.status(200).send(updatedUser);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
   
  static async deleteUser(req, res) {
    try {
      await UserService.deleteUser(req);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}

module.exports = UserControllers;
