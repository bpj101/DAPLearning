'use strict';

var express = require('express');
var router = express.Router();

var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var User = require('../models/user');
var Student = require('../models/student');
var Instructor = require('../models/instructor');


/* GET users listing. */
router.get('/signup', function (req, res, next) {
  res.render('users/signup');
});

router.post('/signup', function (req, res, next) {
  // Get form values
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var street_address = req.body.street_address;
  var city = req.body.city;
  var statusbar = req.body.statusbar;
  var zip = req.body.zip;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  var type = req.body.type;

  // Form field Valication
  req.req.checkBody('first_name', 'First Name is required').notEmpty();
  req.req.checkBody('last_name', 'Last Name is required').notEmpty();
  req.req.checkBody('email', 'Email is required').notEmpty();
  req.req.checkBody('email', 'Email must be a valid email').isEmail();
  req.req.checkBody('username', 'Username is required').notEmpty();
  req.req.checkBody('password', 'Password is required').notEmpty();
  req.req.checkBody('password2', 'Confirmation Password do not match').equals(req.body.password);

  var errprs = req.validationErrors();

  if (errors) {
    res.render('user//signup', {
      'errors': errors,
      'first_name': first_name,
      'last_name': last_name,
      'street_address': street_address,
      'city': city,
      'state': state,
      'zip': zip,
      'email': email,
      'username': username,
      'password': password,
      'password2': password2
    });
  } else {

  }
});

module.exports = router;