const express = require("express");
const productRouter = express.Router();

const ProductController = require("../controllers/product.controllers");

productRouter.post("/add", ProductController.addProduct);

productRouter.get("/", ProductController.getAllProducts);
productRouter.get("/:id", ProductController.getOneProduct);
productRouter.get("/cat/:category", ProductController.getProductByCategory);
productRouter.get("/name/:name", ProductController.getProductByName);

productRouter.put("/edit/:id", ProductController.editProduct);

module.exports = productRouter;
