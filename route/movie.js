const express = require("express");

const { getAllMovie, searchMovie } = require("../control/movie");

const router = express.Router();

router.route("/").get(getAllMovie);
router.route("/search").get(searchMovie);

module.exports = router;
