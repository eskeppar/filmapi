const express = require('express');
const reviewsController = require('../controllers/reviewsController');

function routes() {
  const reviewRouter = express.Router();
  const controller = reviewsController();
  reviewRouter.route('/reviews')
    .get(controller.get)
    .post(controller.post)
    .put(controller.put)
    .delete(controller.remove);

  return reviewRouter;
}

module.exports = routes;
