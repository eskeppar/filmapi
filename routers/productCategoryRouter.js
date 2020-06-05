const express = require('express');
const productCategoriesController = require('../controllers/productCategoriesController.js');

function routes() {
  const productCategoryRouter = express.Router();
  const controller = productCategoriesController();
  productCategoryRouter.route('/productCategories')
    .get(controller.get)
    .post(controller.post)
    .delete(controller.remove);

  return productCategoryRouter;
}

module.exports = routes;
