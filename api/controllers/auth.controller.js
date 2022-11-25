const axios = require("axios");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const UserService = require("../services/user.services");

class AuthController {
  static async register(req, res, next) {
    try {
      const user = await UserService.createUser(req);
      if (user) {
        const token = jwt.sign(
          {
            id: user.dataValues.id,
            userName: user.dataValues.userName,
            email: user.dataValues.email,
            isAdmin: user.dataValues.isAdmin,
          },
          process.env.SECRET,
          { expiresIn: "5d" }
        );

        const payload = jwt.verify(token, process.env.SECRET);
        req.user = payload;
        res.cookie("token", token, { maxAge: 999999 });
        res.status(201).send(req.user);
      }
      user || res.sendStatus(404);
    } catch (error) {
      console.log(error);
      next();
    }
  }
  
  static async logIn(req, res) {
    const user = await UserService.loginUser(req);
    if (!user) return res.sendStatus(401);

    const { id, userName, email, isAdmin, salt, password, favorites } = user.dataValues;
    const passwordHash = bcrypt.hashSync(req.body.password, salt);

    if (passwordHash !== password) return res.sendStatus(401);
    if (passwordHash === password) {
      const token = jwt.sign(
        { id, userName, email, isAdmin, favorites },
        process.env.SECRET,
        {
          expiresIn: "5d",
        }
      );
      
      const payload = jwt.verify(token, process.env.SECRET);
      req.user = payload;
      res.cookie("token", token, { maxAge: 999999 });
      res.status(201).send(req.user);
    }
  }

  static async getMe (req, res) {
    res.send(req.user);
  };

  static async logOut(req, res) {
    res.clearCookie("token");
    res.sendStatus(204);
  }
}

module.exports = AuthController;
