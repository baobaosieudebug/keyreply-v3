const mongoose = require('mongoose');
const Button = require('./Button');
const Condition = require('./Condition');

const LanguageSchema = new mongoose.Schema({
  lang: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
  buttons: [Button],
  condition: [Condition],
  regex: {
    type: String,
  },
});

const Language = mongoose.model('language', LanguageSchema);
module.exports = LanguageSchema;
