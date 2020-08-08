const connection = require("../mysql_connection");

const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

// @desc     영화데이터 불러오기
// @url      GET/api/v1/movie?offset=
// @request
// @response
exports.getAllMovie = async (req, res, next) => {
  let offset = req.query.offset;
  let query = `select * from movie limit ${offset},25`;
  try {
    [rows] = await connection.query(query);
    let count = rows.length;
    res.status(200).json({ success: true, movie: rows, count: count });
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
};

// @desc     영화명 검색
// @url      GET/api/v1/movie/search?q=title&?offset=
// @request  title
// @response
exports.searchMovie = async (req, res, next) => {
  let offset = req.query.offset;
  let title = req.query.q;
  let query = `select * from movie where title like "%${title}%" limit ${offset},25`;

  try {
    [rows] = await connection.query(query);
    res.status(200).json({ success: true, movie: rows });
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
};
