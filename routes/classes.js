'use strict';

var express = require('express');
var router = express.Router();

var Class = require('../models/class');


/* GET All Classes */
router.get('/', function (req, res, next) {
  Class.getClasses(function (err, classes) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.render('classes/index', {
        'classes': classes
      });
    }
    console.log(classes);
  }, 3);
});

module.exports = router;