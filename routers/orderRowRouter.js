const express = require('express');
const orderRowsController = require('../controllers/orderRowsController');

function routes() {
  const orderRowRouter = express.Router();
  const controller = orderRowsController();
  orderRowRouter.route('/orderRows')
    .get(controller.get)
    .post(controller.post);
  orderRowRouter.route('/orderRows/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return orderRowRouter;
}

module.exports = routes;
