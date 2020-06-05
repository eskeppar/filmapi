const express = require('express');
const promoCodesController = require('../controllers/promoCodesController');


function routes() {
  const promoCodeRouter = express.Router();
  const controller = promoCodesController();
  promoCodeRouter.route('/promoCodes')
    .get(controller.get)
    .post(controller.post);

  promoCodeRouter.route('/promoCodes/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return promoCodeRouter;
}

module.exports = routes;
