var express = require("express");
var router = express.Router();

const multer = require("multer");
const path = require("path");

//uploadするディレクトリ
const upDir = path.join(__dirname, "upload");
//アップロードディレクトリ
const uploadDir = multer({ dest: upDir });
/* GET home page. */
router.get("/", function(req, res) {
  res.json("Hello");
});
router.post("/", uploadDir.single("photo"), function(req, res) {
  console.log(req.body.name);
  console.log(req.file.originalname);
  console.log(req.file.path);
  console.log(req.file.filename);
  res.json(JSON.stringify({ name: req.body.name, sucsess: "succsess" }));
});

module.exports = router;
