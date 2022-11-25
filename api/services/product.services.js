const Product = require("../models/Products");
const { where, Op } = require("sequelize");

class ProductService {
  static async addProduct(reqbody) {
    try {
      let newProduct = new Product(reqbody);
      return await newProduct.save({});
    } catch (error) {
      console.error("error existente en addProduct- SERVICE", error.message);
    }
  }

  static async getAllProducts() {
    try {
      return await Product.findAll();
    } catch (error) {
      console.error("error existente en getAllProducts- SERVICE", error.message);
    }
  }

  static async getOneProduct(req) {
    try {
      return await Product.findByPk(req.params.id);
    } catch (error) {
      console.error("error existente en getOneProduct- SERVICE", error.message);
    }
  };

  static async getProductByCategory(category) {
    try {
      return await Product.findAll({
        where: {
          category: { 

          },
        },
      });
    } catch (error) {
      console.error("error existente en getProductByCategory- SERVICE", error.message
      );
    }
  }

  static async getProductByName(name) {
    try {
      return await Product.findAll({
        where: {

        },
      });
    } catch (error) {
      console.error(
        "error existente en getProductByName- SERVICE", error.message
      );
    }
  }

  static async editProduct(req) {
    try {
      const result = await Product.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      });
      const product = result[1];
      return product;
    } catch (error) {
      console.error("error existente en editProduct- SERVICE", error.message);
    }
  };
}

module.exports = ProductService;
