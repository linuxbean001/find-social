const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  fans: {
    type: String,
    required: true
  },
  following: {
    type: String,
    required: true
  },
  heart: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('tiktokusers', userSchema);
