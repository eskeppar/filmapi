const express = require('express');
const taxesController = require('../controllers/taxesController');

function routes() {
  const taxRouter = express.Router();
  const controller = taxesController();
  taxRouter.route('/taxes')
    .get(controller.get)
    .post(controller.post);

  taxRouter.route('/taxes/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return taxRouter;
}

module.exports = routes;
