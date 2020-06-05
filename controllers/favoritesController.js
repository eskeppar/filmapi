const db = require('../db');

const favoritesController = () => {
  const get = async (req, res) => {
    try {
      return await db.get(req, res);
    } catch (err) {
      return res.status(404);
    }
  };

  const post = async (req, res) => {
    try {
      return await db.modify(req, res, 's');
    } catch (err) {
      res.status(500);
      return res.send('Unable to create.');
    }
  };


  const put = async (req, res) => {
    try {
      return await db.modify(req, res);
    } catch (err) {
      res.status(500);
      return res.send('Unable to update.');
    }
  };


  const remove = async (req, res) => {
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
module.exports = favoritesController;
