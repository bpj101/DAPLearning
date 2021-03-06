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

/* GET All Classes */
router.get('/:id/details', function (req, res, next) {
  Class.getClassById([req.params.id], function (err, classname) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.render('classes/details', {
        'class': classname
      });
    }
  });
});
module.exports = router;