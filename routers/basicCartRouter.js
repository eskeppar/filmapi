const express = require('express');
const basicCartController = require('../controllers/basicCartController');

function routes() {
  const basicCartRouter = express.Router();
  const controller = basicCartController();
  basicCartController.route('/basicCarts')
    .get(controller.get);

  return basicCartRouter;
}

module.exports = routes;
