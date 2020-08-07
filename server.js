const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const movie = require("./route/movie");

const morgan = require("morgan");

const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/movie", movie);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} node on part ${PORT}`)
);
