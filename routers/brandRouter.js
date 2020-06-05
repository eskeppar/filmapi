const express = require('express');
const brandsController = require('../controllers/brandsController');


function routes() {
  const brandRouter = express.Router();
  const controller = brandsController();
  brandRouter.route('/brands')
    .get(controller.get)
    .post(controller.post);

  brandRouter.route('/brands/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return brandRouter;
}

module.exports = routes;
