const express = require('express');
const router = express.Router();

const ApiService = require('../services/api.service');
const apiService = new ApiService();

/* GET home page */
router.get("/", (req, res, next) => {
  apiService
  .getAllCharacters()
  .then((response) => {
    res.render("index", {characters: response.data});
  })
});

module.exports = router;
