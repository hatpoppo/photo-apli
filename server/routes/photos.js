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
router.get("/", function(req, res, next) {
  models.Photos.findAll({}).then(photos => {
    let obj = {};
    photos.forEach(photo => {
      let rec = {};
      rec.title = photo.title;
      rec.kind = photo.kind;
      rec.complete = photo.complete;
      if (photo.photo instanceof Buffer) {
        rec.image = photo.photo.toString("base64");
      }
      obj[photo.id] = rec;
    });
    res.json(obj);
  });
});
router.post("/", uploadDir.single("photo"), function(req, res) {
  readFile(req.file.path).then(data => {
    models.Photos.create({
      title: req.body.title,
      photo: data,
      complete: false,
      kind: req.file.mimetype
    }).then(photo => {
      console.log(photo.photo);
      let obj = {};
      obj.title = photo.title;
      obj.id = photo.id;
      obj.complete = photo.complete;
      obj.kind = photo.kind;
      if (photo.photo instanceof Buffer) {
        obj.base64 = photo.photo.toString("base64");
      }
      res.json(obj);
    });
  });
});
router.put("/:id", function(req, res, next) {
  models.Photos.update(
    {
      title: req.body.title,
      complete: req.body.complete
    },
    {
      where: { id: req.params.id }
    }
  ).then(photo => {
    res.json(photo);
  });
});
router.delete("/:id", function(req, res, next) {
  models.Photos.destroy({
    where: { id: req.params.id }
  });
});

module.exports = router;
