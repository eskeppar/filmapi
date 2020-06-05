const express = require('express');
const orderStatusesController = require('../controllers/orderStatusesController');

function routes() {
  const orderStatusRouter = express.Router();
  const controller = orderStatusesController();
  orderStatusRouter.route('/orderStatuses')
    .get(controller.get)
    .post(controller.post);
  orderStatusRouter.route('/orderStatuses/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return orderStatusRouter;
}

module.exports = routes;
