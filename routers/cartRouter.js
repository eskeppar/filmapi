const express = require('express');
const cartController = require('../controllers/cartController');

function routes() {
  const cartRouter = express.Router();
  const controller = cartController();
  cartRouter.route('/cartproducts')
    .length(controller.get)
    .post(controller.post)
    .put(controller.put)
    .delete(controller.remove);

  return cartRouter;
}

module.exports = routes;
