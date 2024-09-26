require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const expect = require("chai").expect;
const cors = require("cors");
const routes = require("./routes/app.js");
const exec = require("child_process").exec;
const port = process.env.PORT || 3000;
const app = express();
const net = require("net");

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

// 404 Not Found Middleware
app.use(function (req, res) {
  res.status(404).type("text").send("Not Found");
});

const portFree = (port, cb) => {
  const server = net.createServer();
  server
    .once("error", (err) => {
      if (err.code === "EADDRINUSE") {
        cb(false);
      } else {
        cb(true);
      }
    })
    .once("listening", () => server.once("close", () => cb(true)).close())
    .listen(port);
};

portFree(port, (isFree) => {
  if (isFree) {
    app.listen(port, () => {
      console.log(
        "Listening on port " + port + " in " + process.env.NODE_ENV + " mode.",
      );
      if (process.env.NODE_ENV === "test") {
        exec("npm test", (error, stdout, stderr) => {
          console.log(stdout);
          console.log(stderr);
        });
      }
    });
  } else {
    console.log("Port already in use");
  }
});

module.exports = app;
