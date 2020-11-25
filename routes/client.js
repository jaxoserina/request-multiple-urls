var express = require("express");
var router = express.Router();
const reqUrls = require('./../request-multiple-urls');

const config = require('./../config.json');

router.get("/", async function (req, res) {
  const response = await reqUrls(config.urls);
  res.render('index', { response });
});
router.get("/read", async function (req, res) {
  const response = await reqUrls(urls);
  res.render('index', { response });
});

module.exports = router;
