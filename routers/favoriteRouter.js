const express = require('express');
const favoritesController = require('../controllers/favoritesController');

function routes() {
  const favoriteRouter = express.Router();
  const controller = favoritesController();
  favoriteRouter.route('/favorites')
    .get(controller.get)
    .post(controller.post)
    // .put(controller.put)
    .delete(controller.remove);

  return favoriteRouter;
}

module.exports = routes;
