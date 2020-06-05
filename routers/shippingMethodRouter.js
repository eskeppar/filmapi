const express = require('express');
const shippingMethodsController = require('../controllers/shippingMethodsController');

function routes() {
  const shippingMethodRouter = express.Router();
  const controller = shippingMethodsController();
  shippingMethodRouter.route('/shippingMethods')
    .get(controller.get)
    .post(controller.post);
  shippingMethodRouter.route('/shippingMethods/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return shippingMethodRouter;
}

module.exports = routes;
