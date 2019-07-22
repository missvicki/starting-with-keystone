import express from "express";
const debug = require("debug")("app");
import chalk from "chalk";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("The API is working");
});

app.listen(port, () => {
  debug(`Server is running on port ${chalk.green(port)}`);
});
