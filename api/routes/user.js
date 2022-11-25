const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controllers");
const { verifyToken, verifyTokenAdmin } = require("../middleware/auth.middleware");

router.get("/", verifyTokenAdmin, UserController.getAllUsers); 
router.get("/:id", UserController.getOneUser);

router.put("/:id", verifyTokenAdmin, UserController.editUser);

router.delete("/:id", verifyTokenAdmin, UserController.deleteUser);

module.exports = router;
