const express = require("express");

const { getAllMovie } = require("../control/movie");

const router = express.Router();

router.route("/").get(getAllMovie);

module.exports = router;
