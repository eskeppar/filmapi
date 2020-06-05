const express = require('express');
const ordersController = require('../controllers/ordersController');

function routes() {
  const orderRouter = express.Router();
  const controller = ordersController();
  orderRouter.route('/orders')
    .get(controller.get)
    .post(controller.post);
  orderRouter.route('/orders/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return orderRouter;
}

module.exports = routes;
