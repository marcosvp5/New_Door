const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const userRouter = require("./user");
const productRouter = require("./product");
const categoryRouter = require("./category");
const reviewRouter = require("./review");
const favoriteRouter = require("./favorite");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/reviews", reviewRouter);
router.use("/favorites", favoriteRouter);

module.exports = router;
