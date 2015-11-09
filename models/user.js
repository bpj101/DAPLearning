'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var userSchema = mongoose.Schema({
  userame: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String,
    bcrypt: true
  },
  type: {
    type: String
  }
});

var User = module.exports = mongoose.model('User', userSchema);

// Fetch All Classes
module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByUsername = function (username, callback) {
  var query = {
    'userame': username
  };
  User.findOne(query, callback);
};

// Save Student
module.exports.saveStudent = function (newUser, newStudent, callback) {
  bcrypt.hash(newUser.password, 10, function (err, hash) {
    if (err) throw err;
    // Set hash
    newUser.password = hash;
    console.log('Student is being saved');
    async.paralell([newUser.save, newStudent.save], callback);
  });
};

// Save Instructor
module.exports.saveInstructor = function (newUser, newInstructor, callback) {
  bcrypt.hash(newUser.password, 10, function (err, hash) {
    if (err) throw err;
    // Set hash
    newUser.password = hash;
    console.log('Instructor is being saved');
    async.paralell([newUser.save, newInstructor.save], callback);
  });
};