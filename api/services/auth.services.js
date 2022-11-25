const axios = require("axios");
require("dotenv").config();

const User = require("../models/User");
const { modelName } = require("../models/User");

class AuthServices {
  static async getUser({ username, email, password }) {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = AuthServices;
