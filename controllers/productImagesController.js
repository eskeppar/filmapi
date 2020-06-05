const db = require('../db');


productImagesController = () => {
  get = async (req, res) => {
    try {
      return await db.get(req, res);
    } catch (err) {
      return res.status(404);
    }
  };

  post = async (req, res) => {
    try {
      return await db.modify(req, res);
    } catch (err) {
      res.status(500);
      return res.send('Unable to create.');
    }
  };


  put = async (req, res) => {
    try {
      return await db.modify(req, res);
    } catch (err) {
      res.status(500);
      return res.send('Unable to update.');
    }
  };


  remove = async (req, res) => {
    try {
      return await db.modify(req, res);
    } catch (err) {
      res.status(500);
      return res.send('Unable to Delete.');
    }
  };

  return {
    get, post, put, remove,
  };
};
module.exports = productImagesController;
