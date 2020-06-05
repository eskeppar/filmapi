const express = require('express');
const promoTypesController = require('../controllers/promoTypesController');


function routes() {
  const promoTypeRouter = express.Router();
  const controller = promoTypesController();
  promoTypeRouter.route('/promoTypes')
    .get(controller.get)
    .post(controller.post);

  promoTypeRouter.route('/promoTypes/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return promoTypeRouter;
}

module.exports = routes;
