const express = require('express');
const customersController = require('../controllers/customersController');

function routes() {
  const customerRouter = express.Router();
  const controller = customersController();
  customerRouter.route('/customers')
    .get(controller.get)
    .post(controller.post);
  customerRouter.route('/customers/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return customerRouter;
}

module.exports = routes;
