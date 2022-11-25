const express = require("express");
const reviewsRouter = express.Router();

const { Reviews } = require("../models");
const ReviewController = require("../controllers/review.controllers");

module.exports = reviewsRouter;