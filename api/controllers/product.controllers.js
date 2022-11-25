const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const ProductService = require("../services/product.services");

class ProductController {
  static async addProduct(req, res, next) {
    try {
      const product = await ProductService.addProduct(req.body);
      res.status(201).send(product);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getAllProducts(req, res) {
    try {
      const allProducts = await ProductService.getAllProducts();
      allProducts && res.status(200).send(allProducts);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getOneProduct(req, res) {
    try {
      const product = await ProductService.getOneProduct(req);
      product && res.status(200).json(product);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

  static async getProductByCategory(req, res) {
    try {
      const { category } = req.params;
      const product = await ProductService.getProductByCategory(category);
      product && res.status(202).send(product);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getProductByName(req, res) {
    try {
      const { name } = req.params;
      const product = await ProductService.getProductByName(name);
      product && res.status(200).send(product);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async editProduct(req, res) {
    try {
      const product = await ProductService.editProduct(req);
      product && res.status(201).send(product);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}

module.exports = ProductController;
