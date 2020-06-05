const express = require('express');
const categoriesController = require('../controllers/categoriesController');

function routes() {
  const categoryRouter = express.Router();
  const controller = categoriesController();
  categoryRouter.route('/categories')
    .get(controller.get)
    .post(controller.post);
  categoryRouter.route('/categories/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return categoryRouter;
}

module.exports = routes;
