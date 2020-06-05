const express = require('express');
const paymentMethodsController = require('../controllers/paymentMethodsController');

function routes() {
  const paymentMethodRouter = express.Router();
  const controller = paymentMethodsController();
  paymentMethodRouter.route('/paymentMethods')
    .get(controller.get)
    .post(controller.post);
  paymentMethodRouter.route('/paymentMethods/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return paymentMethodRouter;
}

module.exports = routes;
