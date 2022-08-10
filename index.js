const express = require("express");
const compression = require("compression");
const cors = require("cors");
const { json, urlencoded } = require("body-parser");

const PORT = 3000;

const App = express();
App.use(compression());
App.use(cors());
App.use(json());
App.use(urlencoded({ extended: false }));

App.get("/", (req, res) => {
  console.log("Checking");
  return res.send({
    state: true,
    message: "Welcome to NodeJS Testing App from Docker",
  });
});

App.listen(PORT, () => console.log(`Server was running on Port ${PORT}`));
