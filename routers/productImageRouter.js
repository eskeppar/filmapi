const express = require('express');
const productImagesController = require('../controllers/productImagesController');

function routes() {
  const productImageRouter = express.Router();
  const controller = productImagesController();
  productImageRouter.route('/productImages')
    .get(controller.get)
    .post(controller.post);

  productImageRouter.route('/productImages/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return productImageRouter;
}

module.exports = routes;
