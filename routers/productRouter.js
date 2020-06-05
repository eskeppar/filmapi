const express = require('express');
const productsController = require('../controllers/productsController');


function routes() {
  const productRouter = express.Router();
  const controller = productsController();
  productRouter.route('/products')
    .get(controller.get)
    .post(controller.post);

  productRouter.route('/products/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return productRouter;
}

module.exports = routes;
