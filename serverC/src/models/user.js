const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String },
  chatArr: [],
  language: { type: String },
});

module.exports = mongoose.model('User', User);
