const mongoose = require('mongoose');
const Language = require('./Language');
const Button = require('./Button');

const NodeSchema = new mongoose.Schema({
  name: String,
  language: [Language],
  text: String,
  buttons: [Button],
  regex: String,
});

const Node = mongoose.model('node', NodeSchema);
module.exports = NodeSchema;
