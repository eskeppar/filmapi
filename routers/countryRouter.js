const express = require('express');
const countriesController = require('../controllers/countriesController');

function routes() {
  const countryRouter = express.Router();
  const controller = countriesController();
  countryRouter.route('/countries')
    .get(controller.get)
    .post(controller.post);
  countryRouter.route('/countries/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);

  return countryRouter;
}

module.exports = routes;
