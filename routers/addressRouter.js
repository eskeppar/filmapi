const express = require('express');
const addressesController = require('../controllers/addressesController');


function routes() {
  const addressRouter = express.Router();
  const controller = addressesController();
  addressRouter.route('/addresses')
    .get(controller.get)
    .post(controller.post);

  addressRouter.route('/addresses/:Id')
    .get(controller.get)
    .put(controller.put)
    .delete(controller.remove);
  return addressRouter;
}
module.exports = routes;
