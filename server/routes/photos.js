var express = require("express");
var router = express.Router();

const multer = require("multer");
const path = require("path");

const util = require("util");
const fs = require("fs");
var models = require("../../models");

//uploadするディレクトリ
const upDir = path.join(__dirname, "upload");
//アップロードディレクトリ
const uploadDir = multer({ dest: upDir });
//readFileをpromisで利用
const readFile = util.promisify(fs.readFile);
/* GET home page. */
router.get("/", function(req, res) {
  res.json("Hello");
});
router.post("/", uploadDir.single("photo"), function(req, res) {
  readFile(req.file.path).then(data => {
    models.Photos.create({
      title: req.body.title,
      photo: data,
      kind: req.file.mimetype
    }).then(photo => {
      res.json(photo);
    });
  });
});

module.exports = router;
