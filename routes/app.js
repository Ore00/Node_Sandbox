"use strict";
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { assignUsers } = require("../controllers/assignUsers");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(process.cwd() + "/views/index.html");
  });

  app.get("/assignedUsers", function (req, res) {
    const randomlyAssigedUsers = assignUsers("./uploads/input.csv", "\n");
    res.json({ assigments: randomlyAssigedUsers });
  });

  app.post("/api/fileanalyse", upload.single("upfile"), (req, res, next) => {
    const file = req.file;
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    res.json({
      name: file.originalname,
      type: file.mimetype,
      size: file.size,
    });
  });
};
