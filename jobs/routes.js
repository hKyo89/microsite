#!/usr/bin/env node

var express = require("express");
var router = express.Router();

var jobs = require("./controllers/jobs.js");

var prefix = "/jobs";

if (IS_DEV) {
    prefix = "/jobs";
}

router.get(prefix, function (req, res) {
    jobs.indexController(req, res);
});

router.get(prefix + "/test", function (req, res) {
    jobs.testController(req, res);
});

router.get(prefix + "/:group([a-z\-]+)", function (req, res) {
    jobs.groupController(req, res);
});

router.get(prefix + "/:group([a-z\-]+)/:job([a-z\-]+)", function (req, res) {
    jobs.positionController(req, res);  
});

router.post(prefix + "/post", function (req, res) {
    jobs.submitController(req, res);
});

module.exports = router;



