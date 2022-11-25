const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth.controller");
const { verifyToken } = require("../middleware/auth.middleware");

router.post("/register", AuthController.register);
router.post("/login", AuthController.logIn);
router.get("/getMe", verifyToken, AuthController.getMe);
router.post("/logout", AuthController.logOut);

module.exports = router;